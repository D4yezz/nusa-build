import Navbar from "@/components/layout/Navbar/navbar";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/layout/Footer/footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#070f1e] text-blue-950 dark:text-white pt-16">
      <Navbar />
      <BlogSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
