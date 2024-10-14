import { gql } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = gql`
  type Track {
    id: Int!
    name: String!
    artist: String!
    album: String!
    genre: String!
  }

  input CreateTrackInput {
    name: String!
    artist: String!
    album: String!
    genre: String!
  }

  type Query {
    tracks: [Track!]!
  }

  type Mutation {
    createTrack(data: CreateTrackInput!): Track!
  }
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });
