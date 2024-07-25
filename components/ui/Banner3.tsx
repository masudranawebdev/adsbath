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
    <div className="bg-[#171616] text-white">
      <div className="bg-[#171616] text-white w-full sm:w-3/5 mx-auto p-4">
        <h1 className="my-5 text-3xl sm:text-6xl text-center bg-gradient-to-r from-pink-600 to-white bg-clip-text text-transparent">
          The Service We Provide For You
        </h1>
        <p className="my-5 text-center text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed enim non
          iusto cum nemo, magnam dolore reprehenderit? Nam praesentium voluptas
          suscipit, omnis aliquam earum minima! Perspiciatis nemo illo eaque
          maxime blanditiis necessitatibus, deserunt delectus quisquam rem
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
      <div className="bg-[#171616] text-white w-full sm:w-3/5 mx-auto p-4">
        <h1 className="my-5 text-3xl sm:text-6xl text-center bg-gradient-to-r from-pink-600 to-white bg-clip-text text-transparent">
          Behind the Scenes: Our Process <br /> for Digital Dominance
        </h1>
        <p className="my-5 text-center text-sm sm:text-base">
          At [Agency Name], we specialize in meticulous digital marketing. By
          understanding your goals and exploring your brand and audience, we
          create tailored strategies integrating SEO, PPC, and cutting-edge
          techniques. Our transparent communication and measurable results
          ensure every step aligns with your vision. Choose [Agency Name] for a
          strategic partnership driving impactful growth.
        </p>
      </div>
    </div>
  );
};

export default Banner3;
