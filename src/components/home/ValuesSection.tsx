import { Heart, Users, Handshake, Smile, Scale, Building2 } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Embracing diversity and ensuring everyone feels welcomed, valued, and represented.",
  },
  {
    icon: Users,
    title: "Empowerment",
    description: "Enabling individuals to achieve self-sufficiency and take control of their futures.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    description: "Working together with communities, partners, and stakeholders to maximize impact.",
  },
  {
    icon: Smile,
    title: "Compassion",
    description: "Leading with empathy and understanding in every interaction and service we provide.",
  },
  {
    icon: Scale,
    title: "Equity",
    description: "Promoting fairness and ensuring equal access to opportunities for all.",
  },
  {
    icon: Building2,
    title: "Community Building",
    description: "Creating connections that transform strangers into neighbors and neighbors into family.",
  },
];

export function ValuesSection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Our Core Values
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Principles That Guide Everything We Do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our values shape our approach to serving newcomers and building an inclusive, 
            compassionate community where everyone can thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 text-center card-hover opacity-0 animate-fade-up border border-border"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
