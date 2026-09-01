import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { programs } from "@/data/site";
import { programImages } from "@/lib/images";
import { ActionLink, SectionLabel } from "@/components/site/kit";
import { PageTransition, ParallaxImage, Reveal } from "@/components/site/motion";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/programs/$slug")({
  loader: ({ params }) => {
    const program = programs.find((p) => p.slug === params.slug);
    if (!program) throw notFound();
    return { program };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Program not found — Unity Welcome" }, { name: "robots", content: "noindex" }],
      };
    }
    const { program } = loaderData;
    return {
      meta: [
        { title: `${program.title} — Unity Welcome Settlement Agency` },
        { name: "description", content: program.summary.slice(0, 155) },
        { property: "og:title", content: `${program.title} — Unity Welcome` },
        { property: "og:description", content: program.short },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/programs/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/programs/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: program.title,
            description: program.summary,
            provider: { "@type": "NGO", name: "Unity Welcome Settlement Agency" },
            areaServed: "Canada",
          }),
        },
      ],
    };
  },
  notFoundComponent: ProgramNotFound,
  component: ProgramPage,
});

function ProgramNotFound() {
  return (
    <div className="container-page py-44 text-center">
      <h1 className="display-lg text-ink">Program not found</h1>
      <p className="body-lead mt-6">The program you are looking for is not available.</p>
      <div className="mt-10 flex justify-center">
        <ActionLink to="/programs">See all programs</ActionLink>
      </div>
    </div>
  );
}

function ProgramPage() {
  const { program } = Route.useLoaderData();
  const others = programs.filter((p) => p.slug !== program.slug).slice(0, 3);

  return (
    <PageTransition>
      <header className="container-page pt-36 pb-12 md:pt-44 md:pb-16">
        <SectionLabel>Program {program.number}</SectionLabel>
        <h1 className="display-lg mt-6 max-w-4xl text-ink">{program.title}</h1>
        <p className="body-lead mt-7 max-w-2xl">{program.short}</p>
      </header>

      <div className="container-page">
        <ParallaxImage
          src={programImages[program.image]!}
          alt={program.imageAlt}
          className="aspect-[16/9] w-full rounded-sm"
          distance={30}
        />
      </div>

      <section className="container-page grid gap-14 py-20 md:py-28 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 className="display-serif text-ink">How this program works</h2>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">{program.summary}</p>
          <div className="mt-10">
            <ActionLink to="/contact">Get started</ActionLink>
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="label-eyebrow text-clay">What we offer</h2>
          <ul className="mt-7 space-y-4">
            {program.offerings.map((o) => (
              <li key={o} className="flex items-start gap-4 border-t border-border pt-4 text-ink/80">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border py-20 md:py-28" aria-labelledby="other-programs">
        <div className="container-page">
          <h2 id="other-programs" className="label-eyebrow text-clay">
            Other programs
          </h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <li>
                  <Link to="/programs/$slug" params={{ slug: p.slug }} className="group block">
                    <div className="aspect-[4/3] overflow-hidden rounded-sm bg-cream-deep">
                      <img
                        src={programImages[p.image]}
                        alt={p.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-bold tracking-tight text-ink group-hover:text-clay">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
