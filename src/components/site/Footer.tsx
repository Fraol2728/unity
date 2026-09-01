import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { nav, org, programs } from "@/data/site";
import { Reveal } from "./motion";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-ink relative overflow-hidden">
      <div className="container-page py-20 md:py-28">
        <Reveal>
          <p className="display-lg max-w-4xl text-ink-foreground">{org.closingStatement}</p>
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-ink-foreground/12 pt-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-base font-extrabold tracking-tight text-ink-foreground">
              Unity Welcome
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
              {org.mission}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="label-eyebrow text-gold">Navigate</h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-ink-foreground/75 hover:text-ink-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="label-eyebrow text-gold">Programs</h2>
            <ul className="mt-5 space-y-3">
              {programs.map((p) => (
                <li key={p.slug}>
                  <Link
                    to="/programs/$slug"
                    params={{ slug: p.slug }}
                    className="link-underline text-sm text-ink-foreground/75 hover:text-ink-foreground"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="label-eyebrow text-gold">Contact</h2>
            <ul className="mt-5 space-y-4 text-sm text-ink-foreground/75">
              <li>
                <a href={org.phoneHref} className="flex items-center gap-3 hover:text-ink-foreground">
                  <Phone className="size-4 shrink-0 text-clay" aria-hidden="true" />
                  {org.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${org.email}`}
                  className="flex items-center gap-3 hover:text-ink-foreground"
                >
                  <Mail className="size-4 shrink-0 text-clay" aria-hidden="true" />
                  {org.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-clay" aria-hidden="true" />
                <span>{org.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-foreground/12 pt-8 text-xs text-ink-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {org.name}. All rights reserved.
          </p>
          <p>{org.vision}</p>
        </div>
      </div>
    </footer>
  );
}
