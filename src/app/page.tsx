import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import WorksSection from "@/components/works/WorksSection";
import AboutSection from "@/components/about/AboutSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/footer/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WorksSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
