"use client";

import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import TheService from "@/components/ui/the-service";
import SectionLogo from "@/components/ui/section-logo";
import OurMember from "@/components/ui/our-member";
import CustomerReview from "@/components/ui/customer-review";
import WhyChooseUs from "@/components/ui/why-choose-us";

function page() {
  return (
    <>
      <HeroSection />
      <SectionLogo />
      <TheService />
      <Footer />
    </>
  );
}

export default page;
