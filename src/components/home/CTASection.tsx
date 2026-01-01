import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="relative rounded-3xl bg-warm-gradient overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you want to donate, volunteer, or simply learn more about our work, 
              there are many ways to support our mission and help transform lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" asChild>
                <Link to="/contact">
                  Get Involved
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-foreground/30 hover:bg-foreground/10" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
