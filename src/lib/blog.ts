import { blogCategories, blogPosts } from "@/data/blog";
import type { BlogCategory, BlogPost } from "@/types/blog";

/**
 * Data-source layer for the blog.
 * Every component reads through these functions, so Phase 2 can point them at
 * Lovable Cloud without touching a single visual component.
 */

export function listPosts(options?: { category?: string; query?: string }): BlogPost[] {
  const category = options?.category;
  const query = options?.query?.trim().toLowerCase();

  return blogPosts
    .filter((p) => (category && category !== "all" ? p.category === category : true))
    .filter((p) =>
      query
        ? [p.title, p.excerpt, p.category].some((f) => f.toLowerCase().includes(query))
        : true,
    )
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getFeaturedPost(): BlogPost | undefined {
  const sorted = listPosts();
  return sorted.find((p) => p.featured) ?? sorted[0];
}

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return listPosts()
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, limit);
}

export function getCategories(): BlogCategory[] {
  return blogCategories;
}

export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
