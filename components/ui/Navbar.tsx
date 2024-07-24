import Image from "next/image";
import NavMenu from "../nav-menu";

const Navbar = () => {
  return (
    <nav className="container mx-auto bg-transparent text-white ">
      <div className="flex justify-between items-center">
        <Image
          className="cursor-pointer h-[77px] w-[89px]"
          src="/adsbath-logo.png"
          alt="Logo"
          height={500}
          width={500}
        />
        <div className="flex items-center">
          <NavMenu />
          <button className="mx-0 md:mx-10 cursor-pointer uppercase h-[60px] sm:h-[48px] w-[280px] rounded-lg bg-gradient-to-r from-blue-600 to-pink-600 text-white ">
            get free consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
