"use client";

import Banner2 from "@/components/ui/Banner2";
import Banner3 from "@/components/ui/Banner3";
import Banner4 from "@/components/ui/Banner4";
import Banner5 from "@/components/ui/Banner5";
import Banner6 from "@/components/ui/Banner6";
import Banner7 from "@/components/ui/Banner7";
import Banner8 from "@/components/ui/Banner8";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import Image from "next/image";

function page() {
  return (
    <>
      <HeroSection />
      <Banner2 />
      <section className="relative">
        <div className="container mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="lg:w-[750px] md:w-[450px] w-[320px]  lg:ml-0 ml-0 md:ml-32 lg:mt-0 md:mt-8 mt-0">
              <span
                style={{
                  fontWeight: "700",
                  lineHeight: "120%",
                }}
                className="lg:text-5xl md:text-4xl text-2xl my-4 "
              >
                Get a Free Goggle
                <br />
                <span className="ads-audit">Ads Audit</span>
                <span> in seconds</span>
              </span>
            </div>

            <p className="my-8 lg:text-base text-sm ">
              Start exploring the world of digital art and NFTs today and take
              control of your digital assets with confidence! Copy
            </p>
            <div className="flex lg:ml-0 ml-0 md:ml-44 gap-5">
              <button
                style={{
                  background:
                    "linear-gradient(90deg, #1A43A3 0%, #E025CE 100%)",
                }}
                className="uppercase h-10 w-32 lg:h-12 lg:w-40 rounded-lg text-sm "
              >
                <span>Adit Now</span>
              </button>
              <button className="cursor-pointer px-10 rounded-lg text-[#fff] text-sm ">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
            <Image
              src="/section-image.png"
              alt="section-image.png"
              height={1000}
              width={1000}
              className="object-contain w-[500px] h-[500px] "
            />
          </div>
        </div>
        <div className="orient absolute -bottom-1/2"></div>
      </section>
      <Banner3 />
      <Banner4 />
      <Banner5 />
      <Banner6 />
      <Banner7 />
      <Banner8 />
      <Footer />
    </>
  );
}

export default page;
