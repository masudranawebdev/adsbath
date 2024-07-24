const NavMenu = () => {
  return (
    <ul className={`flex items-center gap-9`}>
      <li className="cursor-pointer text-base border-b-2 border-blue-900">
        Home
      </li>
      <li className="cursor-pointer text-base  ">Service</li>
      <li className="cursor-pointer text-base  ">Portfolio</li>
      <li className="cursor-pointer text-base ">Blog</li>
      <li className="cursor-pointer text-base ">About Us</li>
      <li className="cursor-pointer text-base ">Contact Us</li>
    </ul>
  );
};

export default NavMenu;
