import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { MissionSection } from "@/components/home/MissionSection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { BoardAnnouncementSection } from "@/components/home/BoardAnnouncementSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <BoardAnnouncementSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
