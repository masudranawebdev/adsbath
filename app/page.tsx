"use client";

import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import TheService from "@/components/ui/the-service";
import WhyChooseUs from "@/components/ui/why-choose-us";
import SectionLogo from "@/components/ui/section-logo";
import WhatOurMember from "@/components/ui/Banner8";
import CustomerReview from "@/components/ui/customer-review";
import OurMember from "@/components/ui/our-member";

function page() {
  return (
    <>
      <HeroSection />
      <SectionLogo />
      <TheService />
      {/* <WhyChooseUs /> */}
      <CustomerReview />
      <OurMember />
      <WhatOurMember />
      <Footer />
    </>
  );
}

export default page;
