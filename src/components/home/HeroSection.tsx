import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero.jpg";
import heroCommunityImage from "@/assets/hero-community.jpg";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = window.requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        setScrollY(currentScroll);
        setShowScrollIndicator(currentScroll <= 80);
        rafRef.current = null;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const backgroundTranslate = -scrollY * 0.4;
  const contentTranslate = -scrollY * 0.15;

  return (
    <section role="banner" className="relative min-h-screen overflow-hidden">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(var(--hero-translate, 16px)); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroScaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes heroChevronBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>

      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `translate3d(0, ${backgroundTranslate}px, 0)` }}
        >
          <img src={heroImage} alt="" className="h-full w-full object-cover object-center" />
        </div>

        <img
          src={heroCommunityImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30 mix-blend-screen"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,10,5,0.45) 0%, rgba(139,58,26,0.12) 34%, rgba(0,0,0,0.66) 70%, rgba(0,0,0,0.82) 100%)",
          }}
        />
      </div>

      <div className="relative flex min-h-screen items-center px-6 py-16 md:px-10 lg:px-16">
        <div
          className="mx-auto w-full max-w-7xl will-change-transform"
          style={{ transform: `translate3d(0, ${contentTranslate}px, 0)` }}
        >
          <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
            <div
              className="mb-5 h-0.5 w-16 bg-secondary md:mb-6 md:w-20"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? "heroFadeUp 700ms ease-out 0ms both" : "none",
                willChange: "transform, opacity",
              }}
            />

            <p
              className="mb-4 font-sans text-[13px] uppercase tracking-[0.22em] text-secondary"
              style={{
                opacity: isVisible ? 1 : 0,
                ["--hero-translate" as string]: "16px",
                animation: isVisible ? "heroFadeUp 700ms ease-out 0ms both" : "none",
                willChange: "transform, opacity",
              }}
            >
              Unity Welcome Settlement
            </p>

            <h1
              className="font-display text-4xl leading-tight text-white md:text-7xl lg:text-8xl"
              style={{
                opacity: isVisible ? 1 : 0,
                ["--hero-translate" as string]: "28px",
                animation: isVisible ? "heroFadeUp 800ms ease-out 150ms both" : "none",
                willChange: "transform, opacity",
              }}
            >
              Helping Newcomers & Multicultural Communities Thrive in Canada
            </h1>

            <p
              className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-white/75 md:text-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                ["--hero-translate" as string]: "20px",
                animation: isVisible ? "heroFadeUp 700ms ease-out 420ms both" : "none",
                willChange: "transform, opacity",
              }}
            >
              <strong className="text-secondary">Our vision:</strong> is a united and inclusive Canada where diverse communities thrive together with dignity and respect
            </p>

            <div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? "heroScaleIn 600ms ease-out 600ms both" : "none",
                willChange: "transform, opacity",
              }}
            >
              <Link
                to="/about"
                aria-label="Learn about Unity Welcome Settlement"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 font-sans text-base font-semibold text-white transition-all duration-300 hover:brightness-110"
              >
                Learn About Us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                aria-label="Contact Unity Welcome Settlement"
                className="inline-flex items-center justify-center rounded-full border border-white/50 bg-transparent px-8 py-4 font-sans text-base font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-14 px-4 sm:px-8">
        <div className="mx-auto flex max-w-5xl overflow-x-auto rounded-xl border-t border-white/10 bg-white/10 py-4 backdrop-blur-sm">
          {[
            { number: "500+", label: "Families Served" },
            { number: "6", label: "Core Services" },
            { number: "10+", label: "Years of Impact" },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`min-w-[180px] flex-1 px-6 text-center ${index < 2 ? "border-r border-white/20" : ""}`}
            >
              <p className="font-display text-2xl text-white md:text-3xl">{stat.number}</p>
              <p className="font-sans text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-x-0 bottom-4 flex justify-center text-white/50 transition-opacity duration-300"
        style={{ opacity: showScrollIndicator ? 1 : 0 }}
        aria-hidden="true"
      >
        <ChevronDown
          className="h-7 w-7"
          style={{ animation: "heroChevronBounce 1.8s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}

export { HeroSection };
