import { Link } from "react-router-dom";
import { ArrowRight, Home, BookOpen, Users, FileText, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Settlement Assistance",
    description: "Housing support, orientation, and essential resources to help you establish your new home.",
  },
  {
    icon: BookOpen,
    title: "Language & Skills Training",
    description: "Language classes and vocational training to boost your confidence and career prospects.",
  },
  {
    icon: Users,
    title: "Community Integration",
    description: "Cultural programs and community events that help you build meaningful connections.",
  },
  {
    icon: FileText,
    title: "Legal & Documentation",
    description: "Guidance with immigration paperwork, legal rights, and documentation processes.",
  },
  {
    icon: Heart,
    title: "Mental Health Support",
    description: "Counseling services and wellness programs to support your emotional wellbeing.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              How We Help
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Comprehensive Support Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From your first day to lasting success, we provide the resources and guidance you need at every step.
            </p>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to="/services"
              className="group bg-card border border-border rounded-2xl p-8 card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
