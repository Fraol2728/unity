import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Scroll, Heart, Users, Handshake, Smile, Scale, Building2, Goal, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
// import teamPhoto from "@/assets/team-photo.jpg";
import teamPhoto0 from "@/assets/1.jpg";
import teamPhoto1 from "@/assets/2.jpg";
import teamPhoto2 from "@/assets/3.jpg";
import teamPhoto3 from "@/assets/4.jpg";
import teamPhoto4 from "@/assets/5.jpg";
import teamPhoto5 from "@/assets/6.jpg";

const values = [
  { icon: Heart, title: "Inclusivity", description: "Embracing diversity and ensuring everyone feels welcomed, valued, and represented in our community." },
  { icon: Users, title: "Empowerment", description: "Enabling individuals to achieve self-sufficiency and take control of their futures with confidence." },
  { icon: Handshake, title: "Collaboration", description: "Working together with communities, partners, and stakeholders to maximize our collective impact." },
  { icon: Smile, title: "Compassion", description: "Leading with empathy and understanding in every interaction and service we provide." },
  { icon: Scale, title: "Equity", description: "Promoting fairness and ensuring equal access to opportunities and resources for all." },
  { icon: Building2, title: "Community Building", description: "Creating connections that transform strangers into neighbors and neighbors into family." },
];

const boardMembers = [
  {
    name: "Adamu Nigussie",
    // role: "Board Chair",
    // bio: "Dr. Johnson brings 25 years of experience in humanitarian development and policy advocacy. Her vision guides our strategic direction.",
    image: teamPhoto0,
  },
  {
    name: "Fasil Workeneh",
    // role: "Vice Chair",
    // bio: "With expertise in community development and nonprofit management, Marcus ensures our programs align with our mission.",
    image: teamPhoto1,
  },
  {
    name: "Daraje Leiyu",
    // role: "Secretary",
    // bio: "A former refugee herself, Fatima brings invaluable lived experience and a deep understanding of newcomer challenges.",
    image: teamPhoto2,
  },
  {
    name: "Daraje Leiyu",
    // role: "Treasurer",
    // bio: "David's financial expertise in the nonprofit sector ensures our resources are managed with integrity and transparency.",
    image: teamPhoto3,
  },
  {
    name: "Sammy Gebrael",
    // role: "Board Member",
    // bio: "Sofia specializes in education and skills development, helping shape our training and employment programs.",
    image: teamPhoto4,
  },
  {
    name: "Mesi Haileyesus",
    // role: "Board Member",
    // bio: "A mental health professional, Dr. Adeyemi oversees our wellness initiatives and trauma-informed care approaches.",
    image: teamPhoto5,
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Building an Inclusive, Compassionate Community
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unity Settlement Welcome Agency is dedicated to empowering refugees, immigrants, and 
              vulnerable communities to build new lives with dignity, opportunity, and a true sense of belonging.
            </p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-12 h-12 text-secondary mx-auto mb-6 opacity-60" />
            <blockquote className="font-display text-2xl sm:text-3xl font-medium text-primary-foreground leading-relaxed mb-6">
              "At Unity Settlement, we believe that every person deserves a welcoming community, 
              access to opportunity, and the support to thrive. Together, we are building bridges 
              that connect cultures, create hope, and transform lives."
            </blockquote>
            <p className="text-secondary font-medium">— The Unity Settlement Leadership Team</p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Goal, Mandate */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    A world where every newcomer—regardless of their origin—finds a welcoming community, 
                    access to essential services, and the opportunity to build a safe, dignified, and 
                    fulfilling life. We envision inclusive societies that embrace diversity as their 
                    greatest strength and welcome newcomers as valued members.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower refugees, immigrants, and vulnerable individuals to achieve self-sufficiency 
                    and integration through comprehensive settlement support, education, employment guidance, 
                    legal assistance, and community-building programs. We believe that with the right support, 
                    every person can thrive and contribute meaningfully to society.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Goal className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Goal</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To create lasting positive change in the lives of newcomers by providing holistic, 
                    culturally-sensitive services that address their unique needs. We aim to help every 
                    individual we serve achieve independence, build meaningful connections, and fully 
                    participate in Canadian society.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Scroll className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">Our Mandate</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide holistic, culturally-sensitive services that address the unique needs of 
                    newcomers to Canada. We advocate for policies that promote equity and inclusion, 
                    partner with communities and organizations, and work tirelessly to ensure that every 
                    person we serve receives the support they need to succeed.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* <img
                src={teamPhoto}
                alt="Unity Settlement team members working together"
                className="rounded-2xl shadow-xl w-full"
              /> */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-lg p-6">
                <div className="text-4xl font-display font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">Lives Impacted Annually</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Our Core Values
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Principles That Guide Our Work
            </h2>
            <p className="text-lg text-muted-foreground">
              These values shape every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-card border border-border card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
              Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Meet Our Board Members
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our dedicated board members bring diverse expertise and a shared commitment to 
              empowering newcomers and building inclusive communities.
            </p>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className="bg-card rounded-2xl overflow-hidden card-hover border border-border opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-section-alt">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl px-8 py-16 md:px-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you want to volunteer, donate, or partner with us, your support can change lives 
              and help build a more inclusive community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="warm" size="xl" asChild>
                <Link to="/contact">
                  Get Involved
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
