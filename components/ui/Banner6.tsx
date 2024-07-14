"use client";
import Image from "next/image";
import React from "react";
import logo from "../../assets/AdsBath/Screensh.png";
import { BiUpArrowCircle } from "react-icons/bi";
import { IoIosStar } from "react-icons/io";
import { FaStarHalfAlt } from "react-icons/fa";

const Banner6 = () => {
  return (
    <div className="bg-[#171616] text-white">
      <section className=" lg:-mt-28 md:-mt-20 -mt-10 ">
        <div className="lg:mt-28 md:mt-0 mt-0  container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <button className="h-6 lg:-mt-40 mt-5 w-32 uppercase bg-white rounded-3xl text-purple-700">
              Testimonial
            </button>
            <div className="lg:w-[750px] md:w-[450px] w-[320px]  lg:ml-0 ml-0 md:ml-32 lg:mt-0 md:mt-8 mt-0">
              <p className="lg:text-5xl md:text-4xl text-2xl my-4 bg-gradient-to-r text-[#fff]">
                Customer Review
              </p>
            </div>

            <div className="flex  gap-6">
              <div>
                <p className="my-6">Total Review</p>
                <div className="flex gap-2">
                  <h1 className="lg:text-5xl md:text-4xl text-2xl">122 K</h1>
                  <button className="bg-blue-800 -mt-3 my-6 w-20 h-6  text-white  font-semibold rounded-full  bg-gradient-to-r from-blue-600 to-purple-600  flex items-center justify-center space-x-2">
                    <span>24%</span>
                    <BiUpArrowCircle className="text-lg md:text-xl" />
                  </button>
                </div>
                <p className="my-6">Pulvinar commodo arcu</p>
              </div>
              <div>
                <div>
                  <p className="my-6">Average Rating</p>
                  <div className="flex gap-2">
                    <h1 className="lg:text-5xl md:text-4xl text-2xl">4.8</h1>
                    <button className=" -mt-3 my-6 text-white  font-semibold rounded-full  flex items-center justify-center space-x-2">
                      <div className="flex gap-1">
                        <IoIosStar className="text-purple-400 text-xl" />
                        <IoIosStar className="text-purple-400 text-xl" />
                        <IoIosStar className="text-purple-400 text-xl" />
                        <IoIosStar className="text-purple-400 text-xl" />
                        <FaStarHalfAlt className="text-purple-400 text-xl" />
                      </div>
                    </button>
                  </div>
                  <p className="my-6">Pulvinar commodo arcu</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
            <Image
              src={logo}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96  w-auto rounded-2xl"
            />
          </div>
        </div>
        <div className="bg-blue-600 border-b border-gray-300 h-1 "></div>
      </section>
    </div>
  );
};

export default Banner6;
