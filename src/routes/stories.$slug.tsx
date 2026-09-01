import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { stories } from "@/data/site";
import { ActionLink, SectionLabel } from "@/components/site/kit";
import { PageTransition } from "@/components/site/motion";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = stories.find((s) => s.slug === params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Story not found — Unity Welcome" }, { name: "robots", content: "noindex" }],
      };
    }
    const { story } = loaderData;
    return {
      meta: [
        { title: `${story.title} — Unity Welcome Settlement Agency` },
        { name: "description", content: story.quote.slice(0, 155) },
        { property: "og:title", content: story.title },
        { property: "og:description", content: story.quote.slice(0, 155) },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/stories/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/stories/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: story.title,
            articleSection: story.category,
            publisher: { "@type": "NGO", name: "Unity Welcome Settlement Agency" },
          }),
        },
      ],
    };
  },
  notFoundComponent: StoryNotFound,
  component: StoryPage,
});

function StoryNotFound() {
  return (
    <div className="container-page py-44 text-center">
      <h1 className="display-lg text-ink">Story not found</h1>
      <div className="mt-10 flex justify-center">
        <ActionLink to="/stories">All stories</ActionLink>
      </div>
    </div>
  );
}

function StoryPage() {
  const { story } = Route.useLoaderData();
  const others = stories.filter((s) => s.slug !== story.slug);

  return (
    <PageTransition>
      <article className="container-page pt-36 pb-20 md:pt-44 md:pb-28">
        <SectionLabel>{story.category}</SectionLabel>
        <h1 className="display-lg mt-6 max-w-4xl text-ink">{story.title}</h1>

        <figure className="mt-14 max-w-3xl border-t border-border pt-12">
          <Quote className="size-8 text-clay" aria-hidden="true" />
          <blockquote className="display-serif mt-6 text-ink">“{story.quote}”</blockquote>
          <figcaption className="mt-8 text-sm text-muted-foreground">
            <span className="font-semibold text-ink">{story.name}</span> · {story.role}
          </figcaption>
        </figure>

        <p className="mt-14 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          This account was shared with Unity Welcome Settlement Agency by a member of our community.
          If you would like to share your own experience, we would be glad to hear from you.
        </p>

        <div className="mt-10">
          <ActionLink to="/contact" variant="outline">
            Share your story
          </ActionLink>
        </div>
      </article>

      <section className="border-t border-border py-20" aria-labelledby="more-stories">
        <div className="container-page">
          <h2 id="more-stories" className="label-eyebrow text-clay">
            More stories
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-2">
            {others.map((s) => (
              <li key={s.slug} className="border-t border-border pt-6">
                <Link to="/stories/$slug" params={{ slug: s.slug }} className="group block">
                  <h3 className="heading-md text-ink group-hover:text-clay">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {s.name} · {s.role}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
