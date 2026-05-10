import { useEffect, useRef, useState } from "react";
import { Heart, Users, Handshake, Smile, Scale, Building2 } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Embracing diversity and ensuring everyone feels welcomed, valued, and represented.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "Enabling individuals to achieve self-sufficiency and take control of their futures.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Working together with communities, partners, and stakeholders to maximize impact.",
  },
  {
    icon: Smile,
    title: "Compassion",
    description: "Leading with empathy and understanding in every interaction and service we provide.",
  },
  {
    icon: Scale,
    title: "Equity",
    description: "Promoting fairness and ensuring equal access to opportunities for all.",
  },
  {
    icon: Building2,
    title: "Community Building",
    description: "Creating connections that transform strangers into neighbors and neighbors into family.",
  },
];

const getSpanClass = (index: number, total: number) => {
  if (index === 0) return "lg:col-span-2 min-h-[280px]";
  if (total >= 6 && index === 4) return "lg:col-span-2 min-h-[280px]";
  return "min-h-[220px]";
};

export function ValuesSection() {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const headerNode = headerRef.current;
    const gridNode = gridRef.current;

    if (!headerNode || !gridNode) return;

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          headerObserver.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          gridObserver.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    headerObserver.observe(headerNode);
    gridObserver.observe(gridNode);

    return () => {
      headerObserver.disconnect();
      gridObserver.disconnect();
    };
  }, []);

  return (
    <section className="bg-background py-24 md:py-32">
      <style>{`
        @keyframes valuesCascadeIn {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div
            className="text-xs tracking-widest uppercase text-accent"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 650ms cubic-bezier(0.22, 1, 0.36, 1) 100ms, transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 100ms",
            }}
          >
            Our Core Values
          </div>
          <div
            className="h-[2px] bg-accent mx-auto mt-3"
            style={{
              width: headerVisible ? "40px" : "0px",
              transition: "width 650ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
          <h2
            className="font-display text-4xl md:text-5xl text-foreground text-center max-w-2xl mx-auto mt-6"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 650ms cubic-bezier(0.22, 1, 0.36, 1) 200ms, transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 200ms",
            }}
          >
            Principles That Guide Everything We Do
          </h2>
          <p
            className="font-sans text-muted-foreground text-center text-lg max-w-xl mx-auto mt-4"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 650ms cubic-bezier(0.22, 1, 0.36, 1) 300ms, transform 650ms cubic-bezier(0.22, 1, 0.36, 1) 300ms",
            }}
          >
            Our values shape our approach to serving newcomers and building an inclusive,
            compassionate community where everyone can thrive.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {values.map((value, index) => (
            <article
              key={value.title}
              className={`group relative overflow-hidden rounded-2xl border p-8 md:p-10 flex flex-col justify-between ${getSpanClass(index, values.length)}`}
              style={{
                backgroundColor: "#1a1714",
                borderColor: "rgba(255,255,255,0.06)",
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? "translateY(0)" : "translateY(32px)",
                animation: gridVisible
                  ? `valuesCascadeIn 650ms cubic-bezier(0.22, 1, 0.36, 1) ${index * 80}ms both`
                  : "none",
                transition:
                  "border-color 300ms ease-out, box-shadow 300ms ease-out, transform 300ms ease-out",
                boxShadow: "0 0 0 0 rgba(29,158,117,0), 0 0 0 rgba(29,158,117,0)",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.borderColor = "rgba(29,158,117,0.4)";
                event.currentTarget.style.boxShadow =
                  "0 0 0 1px rgba(29,158,117,0.2), 0 8px 32px rgba(29,158,117,0.08)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                event.currentTarget.style.boxShadow = "0 0 0 0 rgba(29,158,117,0), 0 0 0 rgba(29,158,117,0)";
              }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 transition-colors duration-300 ease-out flex items-center justify-center group-hover:bg-accent/20">
                <value.icon size={22} className="text-accent" />
              </div>

              <div className="mt-6">
                <h3 className="font-display text-xl md:text-2xl text-white font-semibold leading-tight">
                  {value.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-white/60 leading-relaxed mt-3">
                  {value.description}
                </p>
              </div>

              <div
                aria-hidden
                className="pointer-events-none absolute bottom-[-60px] right-[-60px] w-48 h-48 rounded-full transition-transform duration-300 ease-out group-hover:scale-[1.15]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(29,158,117,0.04) 0%, rgba(29,158,117,0) 70%)",
                }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
