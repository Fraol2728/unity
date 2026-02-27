import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";
import communityVolunteersImage from "@/assets/Welcome-Refugees-Sign-at-Rally.webp";
import settlementSupportImage from "@/assets/team-photo.jpg";

const heroSlides = [
  {
    src: heroImage,
    alt: "Diverse community members coming together in unity",
  },
  {
    src: communityVolunteersImage,
    alt: "Multicultural community volunteers supporting newcomer families",
  },
  {
    src: settlementSupportImage,
    alt: "Newcomer families receiving settlement support and guidance",
  },
];

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container-custom section-padding reveal-up">
        <div className="max-w-5xl animate-ready slide-up">
          <span className="inline-block px-5 py-2.5 rounded-full bg-secondary text-secondary-foreground font-bold text-base sm:text-lg shadow-lg mb-6 animate-ready fade-in animation-delay-100">
            Unity Welcome Settlement
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-ready slide-up animation-delay-200">
           Helping Newcomers & Multicultural Communities Thrive in Canada
          </h1>
          {/* <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-4">
            We walk alongside refugees, immigrants, and diverse communities — offering the support, resources, and connections you need to feel at home and build a brighter future
          </p> */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8 animate-ready fade-in animation-delay-300">
            <strong className="text-secondary">Our vision:</strong>  is a united and inclusive Canada where diverse communities thrive together with dignity and respect
          </p>
          <div className="flex flex-wrap gap-4 animate-ready scale-in animation-delay-400">

            <Button variant="hero-outline" size="xl" className="hover-lift hover-soft-shadow" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
            <Button variant="hero-outline" size="xl" className="hover-lift hover-soft-shadow" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="mt-8 flex gap-2" aria-hidden="true">
            {heroSlides.map((slide, index) => (
              <span
                key={slide.alt}
                className={`h-1.5 w-8 rounded-full transition-colors ${
                  activeSlide === index ? "bg-secondary" : "bg-primary-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}




