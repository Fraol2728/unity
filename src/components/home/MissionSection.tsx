import { Target, Eye, Scroll } from "lucide-react";

export function MissionSection() {
  return (
    <section className="section-padding reveal-up bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Vision */}
          <div
            className="bg-card rounded-2xl p-8 border border-border card-hover hover-lift hover-soft-shadow animate-ready slide-up"
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
            className="bg-card rounded-2xl p-8 border border-border card-hover hover-lift hover-soft-shadow animate-ready slide-up"
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
            className="bg-card rounded-2xl p-8 border border-border card-hover hover-lift hover-soft-shadow animate-ready slide-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
              <Scroll className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
             Our Focus
            </h3>
            <p className="text-muted-foreground leading-relaxed">
            We work to strengthen community engagement, support newcomer settlement, promote education and youth development, encourage economic empowerment, and build cross-cultural understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


