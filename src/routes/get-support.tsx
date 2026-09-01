import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { org, programs } from "@/data/site";
import { PageHeader, SectionLabel } from "@/components/site/kit";
import { PageTransition, Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/get-support")({
  head: () => ({
    meta: [
      { title: "Get Support — Unity Welcome Settlement Agency" },
      {
        name: "description",
        content:
          "Looking for help with housing, English, work, documents or wellbeing? Choose what you need and Unity Welcome will connect you with the right settlement support.",
      },
      { property: "og:title", content: "Get Support — Unity Welcome" },
      {
        property: "og:description",
        content: "Tell us what you need help with and our team will guide you to the right service.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/get-support" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-support" }],
  }),
  component: GetSupportPage,
});

const needs: { need: string; slug: string }[] = [
  { need: "Housing and settling into a new community", slug: "settlement-assistance" },
  { need: "Learning English or building job skills", slug: "language-and-skills-training" },
  { need: "Meeting people and joining community life", slug: "community-integration" },
  { need: "Immigration documents and my rights", slug: "legal-and-documentation" },
  { need: "My mental health and family wellbeing", slug: "mental-health-and-wellness" },
  { need: "Finding a job", slug: "employment-services" },
];

function GetSupportPage() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Get support"
        title="I'm looking for help with…"
        lead="Choose what matters most to you right now. Every option leads to a real Unity Welcome program, and you can always call or email us instead."
      />

      <section className="container-page pb-20" aria-label="Support options">
        <ul className="border-t border-border">
          {needs.map((item, i) => {
            const program = programs.find((p) => p.slug === item.slug)!;
            return (
              <Reveal key={item.slug} delay={i * 0.04}>
                <li className="border-b border-border">
                  <Link
                    to="/programs/$slug"
                    params={{ slug: item.slug }}
                    className="group flex items-center gap-6 py-8"
                  >
                    <span className="numeral text-sm text-clay">{program.number}</span>
                    <span className="flex-1">
                      <span className="heading-md block text-ink transition-colors group-hover:text-primary">
                        {item.need}
                      </span>
                      <span className="mt-2 block text-sm text-muted-foreground">
                        {program.title}
                      </span>
                    </span>
                    <ArrowRight
                      className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section className="bg-cream-deep/60 py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Prefer to talk to a person?</SectionLabel>
            <h2 className="display-serif mt-6 text-ink">
              You can call or email us directly — no form required.
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
            <li className="border-t border-border pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-sm font-semibold text-ink hover:text-primary"
              >
                Send us a message instead
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </PageTransition>
  );
}
