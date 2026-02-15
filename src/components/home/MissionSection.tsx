import { Target, Eye, Scroll } from "lucide-react";

export function MissionSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Vision */}
          <div
            className="bg-card rounded-2xl p-8 border border-border card-hover opacity-0 animate-fade-up"
            style={{ animationDelay: "0ms", animationFillMode: "forwards" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-muted-foreground leading-relaxed">
             A united and inclusive Canada where diverse communities thrive together in dignity, respect, and shared success.
            </p>
          </div>

          {/* Mission */}
          <div
            className="bg-card rounded-2xl p-8 border border-border card-hover opacity-0 animate-fade-up"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower and support multicultural communities in Canada by promoting inclusion, cultural pride, equal opportunity, and meaningful community engagement.
            </p>
          </div>

          {/* Mandate */}
          <div
            className="bg-card rounded-2xl p-8 border border-border card-hover opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
              <Scroll className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
             Our Core Values
            </h3>
            <p className="text-muted-foreground leading-relaxed">
             Inclusion – Welcoming and supporting people of all backgrounds
Equity – Advocating for fair access to opportunities and services
Collaboration – Working with partners to strengthen community impact
Youth Empowerment – Investing in education and leadership development
Cultural Celebration – Honoring heritage while embracing Canadian unity
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

