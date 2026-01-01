import { Link } from "react-router-dom";
import { CalendarDays, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BoardAnnouncementSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-warm-gradient rounded-3xl px-8 py-12 md:px-16 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-full bg-background/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-10 h-10 text-foreground" />
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 text-sm font-medium text-foreground mb-4">
                <CalendarDays className="w-4 h-4" />
                Upcoming Meeting
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Meet Our Amazing Board Members
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We are excited to introduce our amazing Board Members! A meeting is scheduled on{" "}
                <strong className="text-foreground">February 3rd at 9:00 AM</strong> to discuss 
                the company logo and future plans. We invite all stakeholders to join us in shaping 
                our vision together.
              </p>
            </div>

            <Button variant="outline" size="lg" className="border-foreground/30 hover:bg-foreground/10" asChild>
              <Link to="/about">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
