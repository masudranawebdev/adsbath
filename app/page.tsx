"use client";

import Banner6 from "@/components/ui/Banner6";
import Banner8 from "@/components/ui/Banner8";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import TheService from "@/components/ui/the-service";
import WhyChooseUs from "@/components/ui/why-choose-us";
import SectionLogo from "@/components/ui/section-logo";
import CustomerReview from "@/components/ui/customer-review";
import WhatOurMember from "@/components/ui/Banner8";
 

function page() {
  return (
    <>
      <HeroSection />
      <SectionLogo />
      <TheService />
      <WhyChooseUs />
      <Banner6 />
      <CustomerReview />
      <WhatOurMember />
      <Footer />
    </>
  );
}

export default page;
