"use client";
import Image from "next/image";
import { PiArrowCircleUpRight } from "react-icons/pi";

import { config } from "react-spring";
import { services } from "@/lib/data";

import CardCarousel from "../card-carousel";

const Banner3 = () => {
  const Products = [
    {
      id: 1,
      name: "Linkedin Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/g7yJv6v/f3.png",
    },
    {
      id: 2,
      name: "Facebook Ads Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/w4PmL9P/fa.jpg",
    },
    {
      id: 3,
      name: "Search Engine Optimization",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/6gLzd07/f2.jpg",
    },
    {
      id: 4,
      name: "Google Ads Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/FKJYkyT/fa1.jpg",
    },
    {
      id: 5,
      name: "Digital Marketing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum quasi quaerat iste cupiditate ullam earum molestiae assumenda temporafacere a expedita?",
      Url: "https://i.ibb.co/pbdgr9Q/f4.jpg",
    },
  ];

  const handleTouchStart = (evt: React.TouchEvent) => {
    // Implement your touch start logic
  };

  const handleTouchMove = (evt: React.TouchEvent) => {
    // Implement your touch move logic
  };

  return (
    <section className="relative bg-[#0f1320] overflow-hidden">
      {/* The Service We ProvideFor You */}
      <div id="service">
        {/* Title  */}
        <div className="container mx-auto items-center justify-center flex flex-col">
          <h1 className="service-hading text-center lg:text-[60px] md:text-4xl text-2xl my-4">
            The Service We Provide
            <br className="md:hidden" />
            For You
          </h1>
          <p className="my-5 text-center text-sm sm:text-base   md:w-3/4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
            non iusto cum nemo, magnam dolore reprehenderit? Nam praesentium
            voluptas suscipit, omnis aliquam earum minima! Perspiciatis nemo
            illo eaque maxime blanditiis necessitatibus, deserunt delectus
            quisquam rem
          </p>
        </div>

        <CardCarousel />

        <div className="flex justify-center my-7">
          <button className="bg-[#fff] lg:ml-0  ml-0 md:ml-52 w-64 sm:w-48 md:w-56 lg:w-64 xl:w-48 h-12 font-semibold rounded-full  bg-gradient-to-r from-blue-600 to-purple-600 text-white my-4 flex items-center justify-center space-x-2">
            <span>View Details</span>
            <PiArrowCircleUpRight className="text-lg md:text-xl" />
          </button>
        </div>
        {/*  */}
      </div>

      {/* Behind the Scenes: Our Process
for Digital Dominance */}
      <div className="relative">
        <div className="container mx-auto items-center justify-center flex flex-col">
          <h1 className="service-hading text-center lg:text-[60px] md:text-4xl text-2xl my-4">
            Behind the Scenes: Our Process <br className="hidden md:block" />
            for Digital Dominance
          </h1>
          <p className="my-5 text-center text-sm sm:text-base md:w-3/4">
            At [Agency Name], we specialize in meticulous digital marketing. By
            understanding your goals and exploring your brand and audience, we
            create tailored strategies integrating SEO, PPC, and cutting-edge
            techniques. Our transparent communication and measurable results
            ensure every step aligns with your vision. Choose [Agency Name] for
            a strategic partnership driving impactful growth.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                boxShadow: "1px 1px 10.9px 5px rgba(86, 86, 86, 0.20)",
              }}
              className="w-full rounded-2xl bg-[#100C1D] p-8   z-10"
            >
              <Image
                width={1000}
                height={1000}
                className="h-[253px] w-full rounded-lg object-cover"
                src={service.url}
                alt={service.name}
              />

              <h1
                className="text-lg  font-bold pt-4"
                style={{ alignSelf: "stretch" }}
              >
                {service.name}
              </h1>
            </div>
          ))}
        </div>

        <div className="background-blur-service absolute top-[20%] -right-[20%] z-0"></div>
        <div className="background-blur-service-2 absolute top-[20%] -left-[20%] z-0"></div>

        <div className="absolute top-[70%] left-0 z-0 overflow-hidden">
          <Image
            src="/service-vector.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[60%] "
          />
        </div>
        <div className="absolute top-[30%] right-0 z-0 overflow-hidden rotate-180">
          <Image
            src="/service-vector.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[60%] "
          />
        </div>
      </div>
    </section>
  );
};

export default Banner3;

{
  /* <div className="relative">
        <div className="container z-10 mx-auto flex flex-col justify-center sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
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
              className="object-contain w-[500px] h-[500px] z-10"
            />
          </div>
        </div>

        <div className="absolute top-0 -left-32 lg:-left-20 z-0 overflow-hidden  ">
          <Image
            src="/ads-audit-bg-1.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[300px] h-[500px] "
          />
        </div>
        <div className="absolute -bottom-14 -right-28 z-0 overflow-hidden hidden lg:flex">
          <Image
            src="/ads-audit-bg-2.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[979px] h-[540px] "
          />
        </div>

        <div className="orient absolute -bottom-1/2  "></div>
        <div className="background-blur  absolute bottom-0 right-0  "></div>
      </div> */
}
