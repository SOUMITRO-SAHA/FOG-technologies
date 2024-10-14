import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { context } from "./utils/db";

const server = new ApolloServer({ schema, context });

server.listen({ port: 4000, path: "/graphql" }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
