"use client";

import { IoCalendarSharp } from "react-icons/io5";

const Banner8 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-black text-white">
      <div className="p-6 py-12 shadow-2xl ">
        <div className="container mx-auto bg-purple-950 text-white rounded-xl shadow-lg">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl mt-5">
                Schedule a Free Consultation
              </h1>
              <p className="my-6">
                Lorem Ipsum is simply dummy text of the printing
              </p>
            </div>
            <div className="flex justify-center lg:justify-end my-7 lg:my-0">
              <button className="w-full md:w-72 lg:w-80 h-12 font-semibold rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center space-x-3">
                <IoCalendarSharp className="text-lg md:text-xl" />
                <span>GET FREE CONSULTATION</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner8;
