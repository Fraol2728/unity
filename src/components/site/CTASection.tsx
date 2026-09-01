import { ActionLink, SectionLabel } from "./kit";
import { Reveal } from "./motion";

export function CTASection({
  eyebrow = "Take the first step",
  title = "You don't have to start alone.",
  body = "Whether you have just arrived or you have been here for years, our team can help you find housing, learn English, find work, and build a community around you.",
  primaryLabel = "Get Support",
  primaryTo = "/get-support",
  secondaryLabel = "Learn about Unity Welcome",
  secondaryTo = "/about",
}: {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="surface-ink relative overflow-hidden py-24 md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-24 size-[34rem] rounded-full bg-primary/25 blur-[120px]"
      />
      <div className="container-page relative">
        <Reveal>
          <SectionLabel tone="light">{eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display-lg mt-7 max-w-4xl text-ink-foreground">{title}</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-foreground/65">{body}</p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-11 flex flex-wrap gap-3">
            <ActionLink to={primaryTo} variant="clay">
              {primaryLabel}
            </ActionLink>
            <ActionLink to={secondaryTo} variant="ghostLight">
              {secondaryLabel}
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
