import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* Buttons --------------------------------------------------------------- */

const base =
  "group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 min-h-11 disabled:opacity-60 disabled:pointer-events-none";

const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-ink hover:-translate-y-0.5",
  clay: "bg-clay text-clay-foreground hover:bg-ink hover:-translate-y-0.5",
  outline:
    "border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5",
  ghostLight:
    "border border-ink-foreground/25 text-ink-foreground hover:bg-ink-foreground hover:text-ink hover:-translate-y-0.5",
} as const;

export type ActionVariant = keyof typeof variants;

export function ActionLink({
  to,
  children,
  variant = "primary",
  className,
  hash,
  params,
}: {
  to: string;
  hash?: string;
  params?: Record<string, string>;
  children: ReactNode;
  variant?: ActionVariant;
  className?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      {...(params ? { params } : {})}
      className={cn(base, variants[variant], className)}
    >
      <span>{children}</span>
      <ArrowRight
        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      />
    </Link>
  );
}

export function ActionButton({
  children,
  variant = "primary",
  className,
  withArrow = true,
  ...props
}: ComponentProps<"button"> & { variant?: ActionVariant; withArrow?: boolean }) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      <span>{children}</span>
      {withArrow && (
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

/* Section chrome -------------------------------------------------------- */

export function SectionLabel({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "label-eyebrow inline-flex items-center gap-3",
        tone === "dark" ? "text-clay" : "text-gold",
        className,
      )}
    >
      <span aria-hidden="true" className="inline-block h-px w-8 bg-current opacity-60" />
      {children}
    </span>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <header className="container-page pt-36 pb-14 md:pt-44 md:pb-20">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h1 className="display-lg mt-6 max-w-4xl text-ink">{title}</h1>
      {lead && <p className="body-lead mt-7 max-w-2xl">{lead}</p>}
      {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
    </header>
  );
}
