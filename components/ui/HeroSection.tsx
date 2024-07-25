"use client";

import Image from "next/image";
import { PiArrowCircleUpRight } from "react-icons/pi";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="hero-bg h-screen">
      <Navbar />
      <div className="mt-2 container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-center ">
            <div className="relative">
              <h1 className="text-2xl lg:text-6xl  ">
                <span className="hero-text ">Amazing Website</span> <br />
                <span className="hero-text ">Create with Bantu</span> <br />
                <span className="hero-text ">Agency</span>
              </h1>
              <span className="absolute top-32 left-14">
                <Image
                  src="/hero-vector.png"
                  alt="hero-vector"
                  width={200}
                  height={200}
                  className="h-7 w-24 hidden lg:flex"
                />
              </span>
            </div>

            <p className="text-md md:text-lg">
              help you to build website company this is modern. user friendly.
            </p>

            <button className="bg-[#fff] lg:ml-0 ml-0 md:ml-52 w-full sm:w-48 md:w-56 lg:w-64 xl:w-48 h-12 font-semibold rounded-full uppercase text-black my-4 flex items-center justify-center space-x-2">
              <span>get started</span>
              <PiArrowCircleUpRight className="text-lg md:text-xl" />
            </button>
          </div>

          <div className="">
            <Image
              height={1400}
              width={1400}
              src="/hero-section-image.png"
              alt="hero-section-image"
              className="w-[249px] h-[200px] lg:w-[663px] lg:h-[646px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
