/* ============================================================
   DESIGN: Neón Oscuro Futurista
   Home: ensambla todas las secciones de la landing page
   ============================================================ */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import LogosSection from "@/components/sections/LogosSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.08_0.01_270)] text-white">
      <Navbar />
      <HeroSection />
      <LogosSection />
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CtaSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
