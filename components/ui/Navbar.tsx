import { MenuIcon } from "lucide-react";
import Image from "next/image";
import NavMenu from "../nav-menu";

const Navbar = () => {
  return (
    <nav className="bg-[#040710]/80 text-white py-2 sticky top-0 shadow-2xl shadow-[#040710]">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          className="cursor-pointer h-[29px] w-[33px] lg:h-[77px] lg:w-[89px]"
          src="/adsbath-logo.png"
          alt="Logo"
          height={500}
          width={500}
        />
        <div className="flex items-center lg:gap-10 gap-3 justify-between">
          <NavMenu className="hidden lg:flex" />
          <button
            style={{
              background: "linear-gradient(90deg, #1A43A3 0%, #E025CE 100%)",
            }}
            className="uppercase h-[29px] lg:h-[52px] rounded-md text-xs px-4 lg:px-10"
          >
            get free consultation
          </button>
          <MenuIcon className="flex lg:hidden" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
