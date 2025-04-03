import Navbar from "../components/navbar";
import HeroSection from "../components/hero-section";
import FeaturesSection from "../components/features-section";
import HowItWorksSection from "../components/how-it-works-section";
import CtaSection from "../components/cta-section";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
