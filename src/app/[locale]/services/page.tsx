import Navbar from "@/components/layout/Navbar/navbar";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import Footer from "@/components/layout/Footer/footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#070f1e] text-blue-950 dark:text-white pt-16">
      <Navbar />
      <ServicesSection />
      <FeaturesSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
