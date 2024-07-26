"use client";
import Image from "next/image";
import { PiArrowCircleUpRight } from "react-icons/pi";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import { services } from "@/lib/data";
import banner2 from "../../assets/AdsBath/product/f2.jpeg";
import banner3 from "../../assets/AdsBath/product/f3.png";
import banner4 from "../../assets/AdsBath/product/f4.jpeg";
import banner5 from "../../assets/AdsBath/product/f5.png";
import banner1 from "../../assets/AdsBath/product/fa1.jpeg";

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

  return (
    <section className="relative bg-[#0f1320] overflow-hidden">
      <div className="relative">
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

        <div className="absolute top-0 -left-20 z-0 overflow-hidden">
          <Image
            src="/ads-audit-bg-1.png"
            alt="section-image.png"
            height={1000}
            width={1000}
            className="object-contain w-[300px] h-[500px] "
          />
        </div>
        <div className="absolute -bottom-14 -right-28 z-0 overflow-hidden">
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
      </div>
      {/* section 3 */}
      <div>
        <div className="container mx-auto items-center justify-center flex flex-col">
          <h1 className="the-service ">The Service We Provide For You</h1>
          <p className="my-5 text-center text-sm sm:text-base w-3/4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim
            non iusto cum nemo, magnam dolore reprehenderit? Nam praesentium
            voluptas suscipit, omnis aliquam earum minima! Perspiciatis nemo
            illo eaque maxime blanditiis necessitatibus, deserunt delectus
            quisquam rem
          </p>
        </div>

        {/*  */}

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              width={200}
              height={200}
              className="h-[275px] w-[350px] rounded-lg object-cover"
              src={banner1}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={200}
              className="h-[275px] w-[350px] rounded-lg object-cover"
              src={banner2}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={200}
              className="h-[275px] w-[350px] rounded-lg object-cover"
              src={banner3}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={200}
              className="h-[275px] w-[350px] rounded-lg object-cover"
              src={banner4}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={200}
              height={200}
              className="h-[275px] w-[350px] rounded-lg object-cover"
              src={banner5}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
        {/* <div className="mx-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 w-full">
          {Products.map((product) => (
            <div
              key={product.id}
              className="max-w-[350px] space-y-4 rounded-lg bg-[#8F8F8F] p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]"
            >
              <Image
                width={200}
                height={200}
                className="h-[275px] w-[350px] rounded-lg object-cover"
                src={product.Url}
                alt={product.name}
              />
              <div className="grid gap-2">
                <h1 className="text-lg text-center font-semibold ">
                  {product.name}
                </h1>
                <p className="text-sm text-slate-200 font-semibold text-center">
                  {product.description}
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <p className="text-slate-200 font-semibold">Current Client</p>
                  <p className="text-center my-2">220</p>{" "}
              
                </div>
                <div>
                  <p className="text-slate-200 font-semibold">
                    Total Project Complete
                  </p>
                  <p className="text-center my-2">150</p>{" "}
              
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="flex justify-center my-7">
          <button className="bg-[#fff] lg:ml-0  ml-0 md:ml-52 w-64 sm:w-48 md:w-56 lg:w-64 xl:w-48 h-12 font-semibold rounded-full  bg-gradient-to-r from-blue-600 to-purple-600 text-white my-4 flex items-center justify-center space-x-2">
            <span>View Details</span>
            <PiArrowCircleUpRight className="text-lg md:text-xl" />
          </button>
        </div>
        {/*  */}
      </div>

      {/* service */}
      <div className="relative">
        <div className="container mx-auto items-center justify-center flex flex-col">
          <h1 className="the-service text-center">
            Behind the Scenes: Our Process <br /> for Digital Dominance
          </h1>
          <p className="my-5 text-center text-sm sm:text-base w-3/4">
            At [Agency Name], we specialize in meticulous digital marketing. By
            understanding your goals and exploring your brand and audience, we
            create tailored strategies integrating SEO, PPC, and cutting-edge
            techniques. Our transparent communication and measurable results
            ensure every step aligns with your vision. Choose [Agency Name] for
            a strategic partnership driving impactful growth.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              style={{
                boxShadow: "1px 1px 10.9px 5px rgba(86, 86, 86, 0.20)",
              }}
              className="w-[408px] rounded-2xl bg-[#100C1D] p-8   z-10"
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
      </div>
    </section>
  );
};

export default Banner3;
