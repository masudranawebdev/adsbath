import { cn } from "@/lib/utils";
import Link from "next/link";

const navlist = [
  { href: "/", label: "Home" },
  { href: "/#service", label: "Service" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#blog", label: "Blog" },
  { href: "/#about-us", label: "About Us" },
  { href: "/#contact-us", label: "Contact Us" },
];

const NavMenu = ({ className }: any) => {
  return (
    <div className={cn("flex items-center gap-9", className)}>
      {navlist.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="cursor-pointer text-base group relative"
        >
          {item.label}
          <span className="absolute left-0 bottom-[-10px] h-1 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
