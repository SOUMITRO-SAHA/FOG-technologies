import * as z from "zod";

export const trackSchema = z.object({
  name: z.string().min(1, "Track name is required"),
  artist: z.string().min(1, "Artist name is required"),
  album: z.string().min(1, "Album name is required"),
  genre: z.string().min(1, "Genre is required"),
});
