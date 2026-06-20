import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import WorksCarousel from "@/components/works/WorksCarousel";
import AboutSection from "@/components/about/AboutSection";
import Footer from "@/components/footer/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServicesSection />
      <WorksCarousel />
      <AboutSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
