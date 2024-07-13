"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../assets/AdsBath/navLog.png";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-2 bg-[#171616] text-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span>
          <Image className="cursor-pointer h-32 w-52" src={logo} alt="Logo" />
        </span>

        <span
          className="text-2xl cursor-pointer md:hidden block"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <RxCross2 /> : <MdOutlineMenu />}
        </span>
      </div>

      <ul
        className={`md:flex md:items-center sm:max-h-80 lg:max-h-0  ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <li className="my-6 md:my-0 mx-3 cursor-pointer hover:text-cyan-300 duration-500">
          Home
        </li>
        <li className="my-6 md:my-0 mx-3 cursor-pointer hover:text-cyan-300 duration-500">
          Service
        </li>
        <li className="my-6 md:my-0 mx-3 cursor-pointer hover:text-cyan-300 duration-500">
          Portfolio
        </li>
        <li className="my-6 md:my-0 mx-3 cursor-pointer hover:text-cyan-300 duration-500">
          Blog
        </li>
        <li className="my-6 md:my-0 mx-3 cursor-pointer hover:text-cyan-300 duration-500">
          About Us
        </li>
        <li className="my-6 md:my-0 mx-3 cursor-pointer hover:text-cyan-300 duration-500">
          Contact Us
        </li>
        <button className="mx-0 md:mx-10 cursor-pointer uppercase h-[60px] sm:h-[48px] w-[280px] rounded-lg bg-gradient-to-r from-blue-600 to-pink-600 text-white ">
          get free consultation
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
