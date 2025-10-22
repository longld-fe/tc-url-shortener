import { GettingStarted } from "../components/Home/GettingStarted";
import HeroSection from "../components/Home/HeroSection";
import { Statistic } from "../components/Home/Statistics";
import { UrlShortener } from "../components/Home/UrlShortener";
import { Footer } from "../components/ui/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <UrlShortener />
      <Statistic />
      <GettingStarted />
      <Footer />
    </div>
  );
};
