import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Unity Settlement helped my family find not just a home, but a community. After fleeing our country, we thought we had lost everything. They showed us that hope and kindness still exist.",
    name: "Amara K.",
    role: "Refugee from Syria",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "The language training program changed my life. Within a year, I went from knowing no English to landing my first job. The staff treated me like family every step of the way.",
    name: "Miguel R.",
    role: "Immigrant from Venezuela",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "When I needed legal help with my documentation, they were there. When I needed someone to talk to, they listened. This organization truly cares about the whole person.",
    name: "Fatima A.",
    role: "Refugee from Afghanistan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-secondary font-medium text-sm mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            Voices from Our Community
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Every story is a testament to resilience, courage, and the power of community support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: "forwards" }}
            >
              <Quote className="w-10 h-10 text-secondary mb-6" />
              <p className="text-primary-foreground/90 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
