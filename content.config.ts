import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    resume: defineCollection({
      type: "page",
      source: "resume/*.md",

      schema: z.object({
        profile: z.string(),
      }),
    }),
  },
});
