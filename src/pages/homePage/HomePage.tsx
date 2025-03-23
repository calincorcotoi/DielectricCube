import React from "react";
import CarouselSection from "./components/CarouselSection";
import CertificationsSection from "./components/CertificationsSection";
import ColorStripe from "./components/ColorStripe";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ReviewsSection from "./components/ReviewsSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ColorStripe />
      <CertificationsSection />
      <CarouselSection />
      <PricingSection />
      <ReviewsSection />
    </>
  );
};

export default HomePage;
