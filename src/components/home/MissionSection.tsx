import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroCommunityImage from "@/assets/hero-community.jpg";

export function MissionSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-24 md:pt-32"
      style={{
        background:
          "linear-gradient(to bottom, #0D0A08 0%, #1a1108 30%, hsl(var(--background)) 85%, hsl(var(--background)) 100%)",
      }}
    >
      <div className="grid lg:min-h-[85vh] lg:grid-cols-2 gap-0">
        <div className="relative order-first min-h-[500px] overflow-hidden lg:order-last">
          <img
            src={heroCommunityImage}
            alt="Community members gathered together"
            className="absolute inset-0 h-full w-full object-cover object-center will-change-transform"
            style={{
              transform: isVisible ? "scale(1)" : "scale(1.06)",
              transition: "transform 1200ms ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </div>

        <div className="order-last flex flex-col justify-center px-8 py-20 md:px-16 lg:order-first lg:px-20">
          <div
            className="mb-6 h-0.5 w-10 bg-accent origin-left will-change-transform"
            style={{
              transform: isVisible ? "scaleX(1)" : "scaleX(0)",
              transition: "transform 600ms ease-out 0ms",
            }}
          />

          <p
            className="mb-4 font-sans text-xs uppercase tracking-widest text-accent will-change-transform will-change-opacity"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 600ms ease-out 100ms, transform 600ms ease-out 100ms",
            }}
          >
            Our Vision
          </p>

          <h2
            className="font-display text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl will-change-transform will-change-opacity"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 700ms ease-out 200ms, transform 700ms ease-out 200ms",
            }}
          >
            Our Mission
          </h2>

          <p
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground will-change-transform will-change-opacity"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out 400ms, transform 600ms ease-out 400ms",
            }}
          >
            To empower and support multicultural communities in Canada by promoting inclusion, cultural pride, equal opportunity, and meaningful community engagement.
          </p>

          <blockquote
            className="mt-8 border-l-4 border-accent pl-6 font-display text-xl italic text-foreground/80 will-change-transform will-change-opacity"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-16px)",
              transition: "opacity 700ms ease-out 350ms, transform 700ms ease-out 350ms",
            }}
          >
            A united and inclusive Canada where diverse communities thrive together in dignity, respect, and shared success.
          </blockquote>

          <p
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground will-change-transform will-change-opacity"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 600ms ease-out 460ms, transform 600ms ease-out 460ms",
            }}
          >
            We work to strengthen community engagement, support newcomer settlement, promote education and youth development, encourage economic empowerment, and build cross-cultural understanding.
          </p>

          <a
            href="#programs"
            className="group mt-10 inline-flex items-center gap-2 font-sans font-semibold text-accent underline-offset-4 transition-colors hover:underline will-change-opacity"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 500ms ease-out 550ms",
            }}
          >
            Our Focus
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
