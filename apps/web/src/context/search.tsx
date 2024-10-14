"use client";

import * as React from "react";

export enum SearchType {
  HOME = "Home",
  MUSIC = "Music",
  LIVE = "Live",
  PODCAST = "Podcast",
  // Add more types as needed
}

interface ISearchContextType {
  search: (query: string, type: SearchType) => Promise<any>;
  data: any;
  loading: boolean;
  error: string | null;
}

// Create the search context
const SearchContext = React.createContext<ISearchContextType | undefined>(
  undefined
);

// Provide search context
export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const search = async (query: string, type: SearchType): Promise<any> => {
    setLoading(true);
    setError(null);

    try {
      // Replace with your API endpoint
      const response = { data: [] }; // TODO: Call the Graphql API Here
      setData(response.data);
      return response.data;
    } catch (err) {
      setError("Something went wrong.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider value={{ search, data, loading, error }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): ISearchContextType => {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
