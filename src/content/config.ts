import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.string(),
    image: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    author: z.string(),
    slug: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};