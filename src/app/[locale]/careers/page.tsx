import Navbar from "@/components/layout/Navbar/navbar";
import CareersSection from "@/components/sections/CareersSection";
import Footer from "@/components/layout/Footer/footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-blue text-blue-950 dark:text-white pt-16">
      <Navbar />
      <CareersSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
