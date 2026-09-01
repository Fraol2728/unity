import type { BlogCategory, BlogPost } from "@/types/blog";

/**
 * Unity Welcome has not published any articles on its existing website yet,
 * so this list is intentionally empty — no content is fabricated here.
 * Phase 2 replaces this module with a Lovable Cloud query; the UI is unchanged.
 */
export const blogPosts: BlogPost[] = [];

/** Editorial categories the organisation's work maps onto. */
export const blogCategories: BlogCategory[] = [
  { slug: "community", name: "Community" },
  { slug: "settlement", name: "Settlement" },
  { slug: "resources", name: "Resources" },
  { slug: "stories", name: "Stories" },
  { slug: "education", name: "Education" },
  { slug: "events", name: "Events" },
  { slug: "updates", name: "Updates" },
];
