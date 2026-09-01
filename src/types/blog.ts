/**
 * Blog domain types.
 * The UI consumes these types only — the data source (local file today,
 * Lovable Cloud / Supabase in Phase 2) can be swapped without UI changes.
 */

export type BlogCategory = {
  slug: string;
  name: string;
};

export type BlogAuthor = {
  name: string;
  role?: string;
  avatar?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  /** Plain-text paragraphs; rendered as article body. */
  content: string[];
  coverImage?: string;
  category: string;
  author: BlogAuthor;
  /** ISO date string. */
  publishedAt: string;
  featured: boolean;
  readTime: number;
};

export type Comment = {
  id: string;
  postSlug: string;
  name: string;
  body: string;
  createdAt: string;
};
