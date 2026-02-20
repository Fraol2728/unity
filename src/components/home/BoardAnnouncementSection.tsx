import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { boardMembers } from "@/data/boardMembers";

const featuredBoardMembers = boardMembers.slice(0, 3);

export function BoardAnnouncementSection() {
  return (
    <section className="section-padding reveal-up">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-4">
            Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Meet Our Board Members
          </h2>
          <p className="text-lg text-muted-foreground">
            Here are the first three board members who guide our mission and support our community impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredBoardMembers.map((member, index) => (
            <div
              key={member.name}
              className="bg-card rounded-2xl overflow-hidden border border-border card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" />
              <div className="p-5 text-center">
                <h3 className="font-display text-lg font-semibold text-foreground">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link to="/about#board-members">
              See more
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
