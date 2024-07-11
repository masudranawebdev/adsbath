"use client";

import Image from "next/image";
import React from "react";
import levis from "../../assets/AdsBath//levis.png";

const Banner2 = () => {
  return (
    <div className="w-full">
      <Image src={levis} alt="Levis" className="w-full h-auto" />
    </div>
  );
};

export default Banner2;
