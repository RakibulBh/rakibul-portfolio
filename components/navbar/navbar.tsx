import { cn } from "@/libs/utils";
import { Menu } from "lucide-react";
import React from "react";

const navItems = [
  {
    title: "Home",
  },
  {
    title: "About",
  },
  {
    title: "Services",
  },
  {
    title: "Contact me",
  },
];

const Navbar = () => {
  const desktopNavbar = () => {
    return (
      <>
        <div className="flex gap-x-4 items-center">
          <div className="rounded-full h-10 w-10 bg-transparent border-2 border-white flex justify-center items-center">
            <p className="text-white">R</p>
          </div>
          <p className="text-white">Rakibul Bhuiyan</p>
        </div>

        {/* Links */}
        <div className="flex gap-x-4">
          {navItems.map((navItem, i) => (
            <p
              key={navItem.title}
              className={cn(
                "text-white  p-2",
                i === 3 && "border-2 border-white"
              )}
            >
              {navItem.title}
            </p>
          ))}
        </div>
      </>
    );
  };

  const mobileNavbar = () => {
    return (
      <>
        <div className="flex gap-x-2 items-center">
          <div className="rounded-full h-10 w-10  bg-transparent border-2 border-white flex justify-center items-center">
            <p className="text-white text-sm sm:text-md">R</p>
          </div>
          <p className="text-white text-sm sm:text-md">Rakibul Bhuiyan</p>
        </div>

        <Menu className="text-white hover:cursor-pointer w-8 h-8 sm:w-12 sm:h-12" />
      </>
    );
  };

  return (
    <>
      <nav className="hidden md:flex justify-between absolute pt-8 md:px-14 lg:px-20 items-center w-full">
        {desktopNavbar()}
      </nav>
      <nav className="md:hidden flex justify-between absolute pt-6 px-4 sm:px-8 items-center w-full">
        {mobileNavbar()}
      </nav>
    </>
  );
};

export default Navbar;
