import { PrismaClient } from "@prisma/client";

import { trackSchema } from "./track";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    tracks: async () => {
      return prisma.track.findMany();
    },
  },
  Mutation: {
    createTrack: async (_: any, args: { data: any }) => {
      const validatedData = trackSchema.parse(args.data);
      return prisma.track.create({ data: validatedData });
    },
  },
};
