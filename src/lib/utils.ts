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
