import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),

    skillsKnown: defineCollection({
      type: 'data',
      source: 'assets/data/skills/known.json',
      schema: {
        name: {
          type: 'string',
          required: true
        },
        url: {
          type: 'string',
          required: true
        },
      }
    }),
    skillsTested: defineCollection({
      type: 'data',
      source: 'assets/data/skills/tested.json',
      schema: {
        name: {
          type: 'string',
          required: true
        },
        url: {
          type: 'string',
          required: true
        },
      }
    }),

  }
})
