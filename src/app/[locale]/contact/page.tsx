import Navbar from "@/components/layout/Navbar/navbar";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer/footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-blue text-blue-950 dark:text-white pt-16">
      <Navbar />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
