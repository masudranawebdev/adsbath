"use client";

import Image from "next/image";
import React from "react";
import Levis from "../../assets/AdsBath/Screenshot.png";
import { TbActivityHeartbeat } from "react-icons/tb";
import Waveform from "./waveform";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#02050e] text-white relative">
      <div className="lg:-mt-28 md:-mt-16 -mt-10 lg:mr-80 z-10">
        <div className="lg:mt-28 md:mt-0 mt-0 container flex flex-col lg:flex-row justify-center p-6 mx-auto sm:py-16 lg:py-24 lg:justify-center">
          <div className="flex items-center justify-center p-6 flex-1 relative z-10">
            <img
              src="https://via.placeholder.com/500"
              alt="logo"
              className="object-contain h-[400px] aspect-square rounded-2xl "
            />

            <div className="h-32 aspect-square  bg-[#E025CE] absolute p-5 rounded-md right-0">
              <Waveform className="p-2 rounded-full bg-[#EE46BC] w-fit" />
              <h5 className="text-2xl font-bold">20K+</h5>
              <span className="text-xs">Project Done</span>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center lg:items-start">
            <div>
              <button className="h-7 w-36 bg-white rounded-3xl text-purple-700">
                Why Choose Us
              </button>
            </div>
            <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold text-center lg:text-left">
              <p className="py-4">Choose Us to Grow </p>
              <p className="py-4">Your Business</p>
            </h1>
            <div className="text-center lg:text-left">
              <p className="py-2">
                Placerat sed enim felis arcu. Placerat aliquam amet eleifend
              </p>
              <p className="py-2">
                sollicitudin mauris. Nibh sit diam vitae velit cras elit eget.
              </p>
            </div>
            <div className="py-6">
              <p className="flex py-2 gap-3 items-center justify-center lg:justify-start">
                <span>
                  <TbActivityHeartbeat className="bg-pink-500 h-8 w-8 rounded-full my-2 -mt-1" />
                </span>
                Results-Driven Approach
              </p>
              <p className="flex py-2 gap-3 items-center justify-center lg:justify-start">
                <span>
                  <TbActivityHeartbeat className="bg-pink-500 h-8 w-8 rounded-full my-2 -mt-1" />
                </span>
                Results-Driven Approach
              </p>
              <p className="flex py-2 gap-3 items-center justify-center lg:justify-start">
                <span>
                  <TbActivityHeartbeat className="bg-pink-500 h-8 w-8 rounded-full my-2 -mt-1" />
                </span>
                Results-Driven Approach
              </p>
            </div>
            <button className=" cursor-pointer uppercase h-10 w-32 lg:h-12 lg:w-40 rounded-lg bg-gradient-to-r from-blue-800 to-pink-600 text-white flex items-center justify-center">
              <span>Contact Now</span>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full z-10">
        <Image src={Levis} alt="Levis" className="w-full h-auto" />
      </div>

      <div className="why-choose-us-pink absolute -left-10 top-20 -z-0" />
      <div className="why-choose-us-pale absolute right-0 top-0 -z-0" />
    </section>
  );
};

export default WhyChooseUs;
