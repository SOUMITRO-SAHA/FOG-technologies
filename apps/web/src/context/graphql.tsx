"use client";

import { config } from "@/config";
import * as React from "react";

export enum PageType {
  HOME = "Home",
  LIBRARY = "Library",
  DISCOVERY = "Discovery",
}

interface GraphQLContextType {
  fetchData: (page: PageType) => Promise<void>;
  data: any;
  isLoading: boolean;
  error: string | null;
}

const GraphQLContext = React.createContext<GraphQLContextType | undefined>(
  undefined
);

export const GraphQLProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchData = async (page: PageType): Promise<void> => {
    setIsLoading(true);
    setError(null);

    const query = getQueryForPage(page);

    try {
      // TODO: Update the Endpoint
      const response = await fetch(config.BACKEND_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
        }),
      });

      const jsonResponse = await response.json();
      if (jsonResponse.errors) {
        setError(jsonResponse.errors[0].message || "Error fetching data");
        setData(null);
      } else {
        setData(jsonResponse.data);
      }
    } catch (err) {
      setError("Network error occurred");
      setData(null);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GraphQLContext.Provider value={{ fetchData, data, isLoading, error }}>
      {children}
    </GraphQLContext.Provider>
  );
};

const getQueryForPage = (page: PageType) => {
  switch (page) {
    case PageType.HOME:
      return `
        query {
          homeData {
            id
            title
            description
          }
        }
      `;
    case PageType.LIBRARY:
      return `
        query {
          libraryData {
            id
            title
            author
          }
        }
      `;
    case PageType.DISCOVERY:
      return `
        query {
          discoveryData {
            id
            name
            type
          }
        }
      `;
    // Add more cases for different pages
    default:
      return `
        query {
          defaultData {
            id
            title
          }
        }
      `;
  }
};

export const useGraphQLResponse = (): GraphQLContextType => {
  const context = React.useContext(GraphQLContext);
  if (!context) {
    throw new Error("useGraphQL must be used within a GraphQLProvider");
  }
  return context;
};
