import { cn } from "@/lib/utils";
import Link from "next/link";

const NavMenu = ({ className } : any) => {
  return (
    <div className={cn("flex items-center gap-9", className)}>
      <Link
        href="/"
        className="cursor-pointer text-base border-b-2 border-blue-900"
      >
        Home
      </Link>
      <Link href="/#" className="cursor-pointer text-base  ">
        Service
      </Link>
      <Link href="/#" className="cursor-pointer text-base  ">
        Portfolio
      </Link>
      <Link href="/#" className="cursor-pointer text-base ">
        Blog
      </Link>
      <Link href="/#" className="cursor-pointer text-base ">
        About Us
      </Link>
      <Link href="/#" className="cursor-pointer text-base ">
        Contact Us
      </Link>
    </div>
  );
};

export default NavMenu;
