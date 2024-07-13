"use client";

import Image from "next/image";
import React from "react";
import banner from "../../assets/AdsBath/main.png";
import { PiArrowCircleUpRight } from "react-icons/pi";

const Banner = () => {
  return (
    <div>
      <section className="bg-[#171616] text-white lg:-mt-28 md:-mt-20 -mt-10">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="lg:w-[750px] md:w-[450px] w-[320px]  lg:ml-0 ml-0 md:ml-32">
              <p className="lg:text-6xl md:text-4xl text-2xl my-4 bg-gradient-to-r from-pink-600 to-purple-50 bg-clip-text text-transparent">
                Amazing Website
              </p>
              <p className="lg:text-6xl md:text-4xl text-2xl my-4 bg-gradient-to-r from-pink-600 to-purple-50 bg-clip-text text-transparent">
                Create with Bantu
              </p>
              <p className="lg:text-6xl md:text-4xl text-2xl my-4 bg-gradient-to-r from-pink-600 to-purple-50 bg-clip-text text-transparent">
                Agency
              </p>
            </div>

            <p className="lg:w-[600px] md:w-[350px] w-[350px] lg:my-6 md:my-3 lg:ml-0 ml-0 md:ml-40 lg:text-lg text-sm">
              help you to build website company this is modern. user friendly.
            </p>
            <button className="bg-[#fff] lg:ml-0 ml-0 md:ml-52 w-full sm:w-48 md:w-56 lg:w-64 xl:w-48 h-12 font-semibold rounded-full uppercase text-black my-4 flex items-center justify-center space-x-2">
              <span>get started</span>
              <PiArrowCircleUpRight className="text-lg md:text-xl" />
            </button>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
            <Image
              src={banner}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] w-auto "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
