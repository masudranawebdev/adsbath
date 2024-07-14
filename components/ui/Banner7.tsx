import Image from "next/image";
import React from "react";

const Banner7 = () => {
  return (
    <div>
      <section className=" lg:-mt-28 md:-mt-20 -mt-10">
        <div className="lg:mt-28 md:mt-0 mt-0  container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="lg:w-[750px] md:w-[450px] w-[320px]  lg:ml-0 ml-0 md:ml-32 lg:mt-0 md:mt-8 mt-0">
              <p className="lg:text-5xl md:text-4xl text-2xl my-4 bg-gradient-to-r text-[#fff]">
                Get a Free Goggle
              </p>
              <span className="lg:text-5xl md:text-4xl text-2xl my-4 ">
                <span className="bg-gradient-to-r from-blue-800 to-pink-500 bg-clip-text text-transparent">
                  Ads Audit
                </span>
                <span> in seconds</span>
              </span>
            </div>

            <p className="my-8 lg:text-base text-sm ">
              Start exploring the world of digital art and NFTs today and take
              control of your digital assets with confidence! Copy
            </p>
            <div className="flex lg:ml-0 ml-0 md:ml-44">
              <button className=" cursor-pointer uppercase h-10 w-32 lg:h-12 lg:w-40 rounded-lg bg-gradient-to-r from-blue-600 to-pink-600 text-white flex items-center justify-center">
                <span>Adit Now</span>
              </button>
              <button className=" ml-3 cursor-pointer font-semibold h-10 w-32 lg:h-12 lg:w-40 rounded-lg text-[#fff]">
                <span>Lern More</span>
              </button>
            </div>
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

export default Banner7;
