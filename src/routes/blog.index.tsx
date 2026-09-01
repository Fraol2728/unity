import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { getCategories, getFeaturedPost, listPosts } from "@/lib/blog";
import { PageHeader, SectionLabel, ActionLink } from "@/components/site/kit";
import { PageTransition, Reveal } from "@/components/site/motion";
import { FeaturedPost, PostCard } from "@/components/blog/PostCards";
import { CTASection } from "@/components/site/CTASection";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Stories From Our Community — Unity Welcome Settlement Agency" },
      {
        name: "description",
        content:
          "Stories, updates, resources and community perspectives from Unity Welcome Settlement Agency, supporting newcomers across Canada.",
      },
      { property: "og:title", content: "Stories From Our Community — Unity Welcome" },
      {
        property: "og:description",
        content: "Stories, updates, resources and community perspectives from Unity Welcome.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndexPage,
});

const PAGE_SIZE = 6;

function BlogIndexPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const categories = getCategories();
  const featured = getFeaturedPost();
  const posts = useMemo(() => listPosts({ category, query }), [category, query]);
  const shown = posts.slice(0, visible);

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Latest from Unity Welcome"
        title="Stories from our community"
        lead="Stories, updates, resources and community perspectives from the people we walk alongside."
      />

      {featured && (
        <section className="container-page pb-20" aria-label="Featured story">
          <FeaturedPost post={featured} />
        </section>
      )}

      <section className="container-page pb-28" aria-labelledby="all-articles">
        <div className="flex flex-col gap-8 border-t border-border pt-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 id="all-articles" className="label-eyebrow text-clay">
            All articles
          </h2>

          <div className="flex flex-1 flex-col gap-6 lg:max-w-xl">
            <label htmlFor="blog-search" className="sr-only">
              Search articles
            </label>
            <div className="flex items-center gap-3 border-b border-border pb-3">
              <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setVisible(PAGE_SIZE);
                }}
                placeholder="Search stories"
                maxLength={80}
                className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>

        <nav className="mt-8 flex flex-wrap gap-2" aria-label="Filter by category">
          {[{ slug: "all", name: "All" }, ...categories].map((c) => (
            <button
              key={c.slug}
              type="button"
              aria-pressed={category === c.slug}
              onClick={() => {
                setCategory(c.slug);
                setVisible(PAGE_SIZE);
              }}
              className={cn(
                "min-h-11 rounded-full border px-5 text-sm font-medium transition-colors",
                category === c.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary",
              )}
            >
              {c.name}
            </button>
          ))}
        </nav>

        {shown.length > 0 ? (
          <>
            <ul className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.05}>
                  <li>
                    <PostCard post={post} />
                  </li>
                </Reveal>
              ))}
            </ul>
            {visible < posts.length && (
              <div className="mt-14 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisible((v) => v + PAGE_SIZE)}
                  className="min-h-11 rounded-full border border-primary/30 px-7 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Load more stories
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="mt-14 border-t border-border pt-14">
            <SectionLabel>Coming soon</SectionLabel>
            <p className="display-serif mt-6 max-w-2xl text-ink">
              Unity Welcome has not published articles here yet. Community voices are already
              shared on our stories page.
            </p>
            <div className="mt-9">
              <ActionLink to="/stories" variant="outline">
                Read community stories
              </ActionLink>
            </div>
          </div>
        )}
      </section>

      <CTASection />
    </PageTransition>
  );
}
