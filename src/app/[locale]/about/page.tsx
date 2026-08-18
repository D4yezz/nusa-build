import Navbar from "@/components/layout/Navbar/navbar";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/layout/Footer/footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-blue text-blue-950 dark:text-white pt-16">
      <Navbar />
      <AboutSection />
      <StatsSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
