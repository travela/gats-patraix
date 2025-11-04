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

const catsCollection = defineCollection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    age: z.string(),
    gender: z.union([z.literal('male'), z.literal('female')]),
    personality: z.array(z.string()),
    description: z.string(),
    image: z.string(),
    isSpecialNeeds: z.boolean().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};