import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-community.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Diverse community members coming together in unity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative container-custom section-padding">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
            Building an Inclusive, Compassionate Community
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Where Everyone is Welcomed, Valued, and Empowered
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-4">
            <strong className="text-secondary">Our Vision:</strong> A world where every newcomer 
            finds belonging, support, and opportunity to thrive.
          </p>
          <p className="text-lg sm:text-xl text-primary-foreground/90 leading-relaxed mb-8">
            <strong className="text-secondary">Our Mission:</strong> To empower refugees, immigrants, 
            and vulnerable communities through comprehensive settlement services, education, employment 
            guidance, and community integration programs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="warm" size="xl" asChild>
              <Link to="/contact">
                Donate Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/about">Learn About Us</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
