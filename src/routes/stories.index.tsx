import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { stories } from "@/data/site";
import { PageHeader } from "@/components/site/kit";
import { PageTransition, Reveal } from "@/components/site/motion";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Community Stories — Unity Welcome Settlement Agency" },
      {
        name: "description",
        content:
          "Voices from the Unity Welcome community: newcomers sharing how settlement, language and legal support helped them build a new life in Canada.",
      },
      { property: "og:title", content: "Community Stories — Unity Welcome" },
      {
        property: "og:description",
        content: "Every story is a testament to resilience, courage and the power of community support.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/stories" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/stories" }],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Success stories"
        title="Voices from our community"
        lead="Every story is a testament to resilience, courage, and the power of community support. These accounts are shared by members of the Unity Welcome community."
      />

      <section className="container-page pb-24 md:pb-32">
        <ul>
          {stories.map((story, i) => (
            <Reveal key={story.slug} delay={i * 0.05}>
              <li className="border-t border-border last:border-b">
                <Link
                  to="/stories/$slug"
                  params={{ slug: story.slug }}
                  className="group grid gap-4 py-10 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-10"
                >
                  <span className="label-eyebrow text-clay">{story.category}</span>
                  <span>
                    <h2 className="display-serif text-ink transition-colors group-hover:text-primary">
                      {story.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      “{story.quote}”
                    </p>
                    <span className="mt-4 block text-xs tracking-[0.2em] text-muted-foreground uppercase">
                      {story.name} · {story.role}
                    </span>
                  </span>
                  <ArrowRight
                    className="size-5 text-primary transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        <p className="mt-14 max-w-2xl text-sm text-muted-foreground">
          More stories from the community will be published here as they are shared with us.
        </p>
      </section>

      <CTASection />
    </PageTransition>
  );
}
