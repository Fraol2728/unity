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
              A world where every newcomer—regardless of their origin—finds a welcoming community, 
              access to essential services, and the opportunity to build a safe, dignified, and 
              fulfilling life. We envision inclusive societies that embrace diversity as strength.
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
              To empower refugees, immigrants, and vulnerable individuals to achieve self-sufficiency 
              and integration through comprehensive settlement support, education, employment guidance, 
              legal assistance, and community-building programs. We believe everyone deserves the 
              chance to thrive.
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
              Our Mandate
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide holistic, culturally-sensitive services that address the unique needs of 
              newcomers. We advocate for policies that promote equity and inclusion, and partner 
              with communities to create lasting positive change in the lives of those we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
