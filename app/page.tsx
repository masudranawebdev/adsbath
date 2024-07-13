"use client";

import Banner from "@/components/ui/Banner";
import Banner2 from "@/components/ui/Banner2";
import Banner3 from "@/components/ui/Banner3";
import Banner4 from "@/components/ui/Banner4";
import Banner5 from "@/components/ui/Banner5";
import Navbar from "@/components/ui/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Banner2 />
      <Banner3 />
      <Banner4 />
      <Banner5 />
    </div>
  );
}

export default page;
