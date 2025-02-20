import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarketStats from "../components/MarketStats";
import WhyUs from "../components/WhyUs";
import FeatureSections from "../components/FeatureSections";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
export default function Home() {
    return (
      <div>
        <Navbar />
        <HeroSection />
        <MarketStats />
        <WhyUs />
        <FeatureSections />
        <FAQ />
        <Footer />
      </div>
    );
  }