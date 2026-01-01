import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Home, BookOpen, Users, FileText, Heart, Briefcase, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Settlement Assistance",
    shortDesc: "Housing support and essential resources for newcomers",
    fullDesc: "We help newcomers find safe, affordable housing and navigate the essentials of settling into a new community. Our settlement workers provide one-on-one support with finding accommodation, setting up utilities, accessing healthcare, and understanding local systems and services.",
    features: [
      "Housing search assistance and referrals",
      "Orientation to local services and resources",
      "Help with opening bank accounts",
      "Public transit navigation",
      "School registration for children",
    ],
  },
  {
    icon: BookOpen,
    title: "Language & Skills Training",
    shortDesc: "English classes and vocational programs",
    fullDesc: "Language is the key to integration. Our comprehensive language programs help newcomers gain confidence in English while also developing valuable job skills. We offer classes at all levels, from complete beginners to advanced professional English.",
    features: [
      "ESL classes for all proficiency levels",
      "Workplace language training",
      "Computer literacy programs",
      "Job-specific skills workshops",
      "Credential recognition support",
    ],
  },
  {
    icon: Users,
    title: "Community Integration Programs",
    shortDesc: "Cultural events and community building",
    fullDesc: "Building connections is essential for feeling at home. Our community programs create opportunities for newcomers to meet their neighbors, learn about local culture, and share their own traditions. We believe that integration is a two-way process that enriches everyone.",
    features: [
      "Cultural orientation workshops",
      "Community mentorship matching",
      "Social and recreational activities",
      "Multicultural festivals and events",
      "Volunteer opportunities",
    ],
  },
  {
    icon: FileText,
    title: "Legal & Documentation Support",
    shortDesc: "Immigration guidance and paperwork assistance",
    fullDesc: "Navigating immigration systems can be overwhelming. Our team provides guidance on documentation, helps with paperwork, and connects individuals with legal professionals when needed. We ensure that everyone understands their rights and options.",
    features: [
      "Immigration document assistance",
      "Status application support",
      "Legal rights education",
      "Referrals to immigration lawyers",
      "Form completion assistance",
    ],
  },
  {
    icon: Heart,
    title: "Mental Health & Wellness",
    shortDesc: "Counseling and emotional support services",
    fullDesc: "The journey of displacement can take a significant toll on mental health. Our culturally-sensitive counseling services provide a safe space for individuals and families to process their experiences, build resilience, and work toward healing.",
    features: [
      "Individual counseling sessions",
      "Family therapy services",
      "Support groups for trauma survivors",
      "Youth mental health programs",
      "Wellness workshops and activities",
    ],
  },
  {
    icon: Briefcase,
    title: "Employment Services",
    shortDesc: "Job search support and career development",
    fullDesc: "Finding meaningful employment is often a top priority for newcomers. Our employment team provides comprehensive support from resume building to job placement, helping individuals find work that matches their skills and experience.",
    features: [
      "Resume and cover letter writing",
      "Interview preparation coaching",
      "Job search strategies and resources",
      "Networking opportunities",
      "Connection with employers",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Comprehensive Support for Your Journey
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From your first day to lasting success, we provide a full range of services designed 
              to help you build a new life with confidence and dignity.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-2xl overflow-hidden card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left side - icon and title */}
                  <div className="lg:col-span-2 bg-primary/5 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Right side - details */}
                  <div className="lg:col-span-3 p-8 lg:p-12">
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.fullDesc}
                    </p>
                    <h3 className="font-semibold text-foreground mb-4">What We Offer:</h3>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link to="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Need Help Getting Started?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Our team is here to guide you through our services and help you find the support you need. 
              Reach out today for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="warm" size="xl" asChild>
                <Link to="/contact">
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
