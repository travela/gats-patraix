import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const loadBlogPosts = () => {
  const postsRaw: Record<string, MarkdownModule> = import.meta.glob('/src/content/blog/**/*.md', { eager: true });
  return Object.values(postsRaw).map((post) => post.frontmatter);
};

interface MarkdownModule {
  frontmatter: BlogPost;
  default: any; // The markdown content component
}

export interface BlogPost {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  image: string;
  tags: string[];
  slug: string;
}

export interface Cat {
  id: string;
  name: string;
  age: string;
  gender: 'male' | 'female';
  personality: string[];
  description: string;
  image: string;
  publishedAt: string;
  isSpecialNeeds?: boolean;
  slug?: string;
  link?: string;
}

export const loadCats = () => {
  const catsRaw: Record<string, CatModule> = import.meta.glob('/src/content/cats/**/*.md', { eager: true });
  return Object.values(catsRaw).map((c) => c.frontmatter as Cat);
};

interface CatModule {
  frontmatter: Cat;
  default: any;
}

const images = import.meta.glob('/src/assets/images/*', { eager: true, as: 'url' });

const resolveImagePath = (imageName: string) => {
  const imageKey = imageName.startsWith('/') ? imageName : `/${imageName}`;
  return images[imageKey] || '';
};

export { resolveImagePath };