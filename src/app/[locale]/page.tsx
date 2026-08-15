import Navbar from "@/components/layout/Navbar/navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CareersSection from "@/components/sections/CareersSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer/footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-blue text-blue-950 dark:text-white transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <CareersSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
