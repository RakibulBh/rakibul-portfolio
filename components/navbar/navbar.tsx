import { cn } from "@/libs/utils";
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
  return (
    <nav className="flex justify-between absolute pt-8 px-20 items-center w-full">
      {/* LOGO */}
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
    </nav>
  );
};

export default Navbar;
