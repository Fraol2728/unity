import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { org, programs } from "@/data/site";
import { PageHeader, SectionLabel, ActionLink } from "@/components/site/kit";
import { PageTransition, Reveal } from "@/components/site/motion";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Unity Welcome Settlement Agency" },
      {
        name: "description",
        content:
          "Find guidance on settlement, language and skills, community life, documentation, wellbeing and employment support from Unity Welcome Settlement Agency.",
      },
      { property: "og:title", content: "Resources — Unity Welcome" },
      {
        property: "og:description",
        content: "Where to start, who to ask, and how Unity Welcome can help you next.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resources" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("all");

  const categories = useMemo(
    () => [{ slug: "all", title: "All" }, ...programs.map((p) => ({ slug: p.slug, title: p.title }))],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return programs
      .filter((p) => (active === "all" ? true : p.slug === active))
      .filter((p) =>
        q
          ? [p.title, p.short, ...p.offerings].some((t) => t.toLowerCase().includes(q))
          : true,
      );
  }, [query, active]);

  const featured = programs[0]!;

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Resources"
        title="Guidance for every step of settling in"
        lead="Everything listed here comes from services Unity Welcome actually provides. If you cannot find what you need, our team will point you in the right direction."
      />

      <section className="container-page pb-20" aria-labelledby="featured-resource">
        <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel>Start here</SectionLabel>
            <h2 id="featured-resource" className="display-serif mt-6 text-ink">
              {featured.title}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-muted-foreground">{featured.summary}</p>
            <div className="mt-8">
              <ActionLink to="/programs/$slug" params={{ slug: featured.slug }}>
                Read the full guide
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-28" aria-labelledby="resource-list">
        <div className="border-t border-border pt-10">
          <h2 id="resource-list" className="label-eyebrow text-clay">
            Browse resources
          </h2>

          <label htmlFor="resource-search" className="sr-only">
            Search resources
          </label>
          <div className="mt-8 flex items-center gap-3 border-b border-border pb-3 lg:max-w-xl">
            <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            <input
              id="resource-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for housing, English classes, documents…"
              maxLength={80}
              className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-muted-foreground"
            />
          </div>

          <nav className="mt-8 flex flex-wrap gap-2" aria-label="Filter resources">
            {categories.map((c) => (
              <button
                key={c.slug}
                type="button"
                aria-pressed={active === c.slug}
                onClick={() => setActive(c.slug)}
                className={cn(
                  "min-h-11 rounded-full border px-5 text-sm font-medium transition-colors",
                  active === c.slug
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {c.title}
              </button>
            ))}
          </nav>

          {results.length > 0 ? (
            <ul className="mt-12 border-t border-border">
              {results.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.04}>
                  <li className="border-b border-border">
                    <Link
                      to="/programs/$slug"
                      params={{ slug: p.slug }}
                      className="group flex items-start gap-6 py-8"
                    >
                      <span className="numeral text-sm text-clay">{p.number}</span>
                      <span className="flex-1">
                        <span className="heading-md block text-ink transition-colors group-hover:text-primary">
                          {p.title}
                        </span>
                        <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-muted-foreground">
                          {p.short}
                        </span>
                      </span>
                      <ArrowRight
                        className="mt-1 size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
          ) : (
            <p className="mt-12 border-t border-border pt-12 text-muted-foreground">
              No resources match that search yet. Try a different word, or contact our team
              directly and we will help you find the right support.
            </p>
          )}
        </div>
      </section>

      <section className="bg-cream-deep/60 py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Need a document or a guide?</SectionLabel>
            <h2 className="display-serif mt-6 text-ink">
              Downloadable materials are being prepared — our team can help in the meantime.
            </h2>
          </div>
          <ul className="space-y-6 self-center">
            <li>
              <a
                href={org.phoneHref}
                className="flex items-center gap-4 border-t border-border pt-6 text-lg font-medium text-primary hover:text-clay"
              >
                <Phone className="size-5" aria-hidden="true" />
                {org.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${org.email}`}
                className="flex items-center gap-4 border-t border-border pt-6 text-lg font-medium break-all text-primary hover:text-clay"
              >
                <Mail className="size-5 shrink-0" aria-hidden="true" />
                {org.email}
              </a>
            </li>
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
