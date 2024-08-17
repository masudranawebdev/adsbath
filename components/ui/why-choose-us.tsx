"use client";

import Image from "next/image";
import React from "react";
import logo from "../../assets/AdsBath/product/Scre.png";
import Levis from "../../assets/AdsBath/Screenshot.png";
import { TbActivityHeartbeat } from "react-icons/tb";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#171616] text-white ">
      <section className="lg:-mt-28 md:-mt-16 -mt-10 lg:mr-80 ">
        <div className="lg:mt-28 md:mt-0 mt-0 container flex flex-col lg:flex-row justify-center p-6 mx-auto sm:py-16 lg:py-24 lg:justify-center">
          <div className="flex items-center justify-center p-6 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] flex-1">
            <Image
              src={logo}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] w-auto"
            />
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
      </section>
      <div className="w-full">
        <Image src={Levis} alt="Levis" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
