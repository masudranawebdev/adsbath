import Image from "next/image";
import React from "react";
import banner from "../../assets/AdsBath/Screensh.png";
import man from "../../assets/AdsBath/man/downjpeg.jpeg";
import man2 from "../../assets/AdsBath/man/downloa.jpeg";
import man3 from "../../assets/AdsBath/man/download.jpeg";
import { FaStar } from "react-icons/fa";
import { GrFormNextLink, GrLinkNext } from "react-icons/gr";

const CustomerReview = () => {
  return (
    <div className="bg-[#171616] text-white">
      <section className=" lg:-mt-28 md:-mt-20 -mt-10">
        <div className="lg:mt-28 md:mt-0 mt-0  container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <div className="lg:w-[750px]  md:w-[450px] w-[320px] lg:mb-44 md:mb-10 mb-0 lg:ml-0 ml-0 md:ml-32 lg:mt-0 md:mt-8 mt-0">
              <p className="lg:text-5xl md:text-4xl text-2xl my-4 bg-gradient-to-r text-[#fff]">
                What Our Member
              </p>
              <span className="lg:text-5xl md:text-4xl text-2xl my-4 ">
                <span>Say About Us?</span>
              </span>
            </div>

            <div className="flex lg:-ml-8 ml-14 md:ml-44 lg:-my-16 -my-0  ">
              <div className="flex flex-col items-center justify-start">
                <div className="flex -space-x-4">
                  <Image
                    alt=""
                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                    src={man}
                  />
                  <Image
                    alt=""
                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                    src={man3}
                  />
                  <Image
                    alt=""
                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-300"
                    src={man2}
                  />
                </div>
                <p className="my-5 ml-10">10K + Satisfied Customer</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  p-6 mt-12 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem]">
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto rounded-md bg-gradient-to-r from-blue-900 to-purple-900 text-white">
              <div className="flex justify-end p-4">
                <div className="flex items-end space-x-2 text-white">
                  <div className="text-yellow-600 flex gap-2 text-lg">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm text-white">
                <p>
                  Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
                  dictum lectus consequat vitae. Etiam ut dolor id justo
                  fringilla finibus.
                </p>
                <p>
                  Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus
                  eu mauris cursus venenatis. Maecenas gravida urna vitae
                  accumsan feugiat. Vestibulum commodo, ante sit urna purus
                  rutrum sem.
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex my-4 space-x-4">
                  <div>
                    <Image
                      src={man2}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Jhon Adam</h4>
                    <span className="text-xs text-white">Office worker</span>
                  </div>
                </div>
                {/*  */}
                <div className="mt-4">
                  <p>
                    <GrFormNextLink className="bg-slate-400 text-blue-600 rounded-full h-9 w-9" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;
