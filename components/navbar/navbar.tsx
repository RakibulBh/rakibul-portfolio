import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const navItems = [
  {
    title: "Technologies",
    section: "technologies",
  },
  {
    title: "Projects",
    section: "projects",
  },
  {
    title: "Experience",
    section: "experience",
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
          {navItems.map((navItem) => (
            <Link key={navItem.title} href={"#" + navItem.section}>
              <p className="text-white p-2 duration-300 ease-in-out border-b-2 border-transparent hover:text-[#00B8D9] hover:border-[#00B8D9]">
                {navItem.title}
              </p>
            </Link>
          ))}
          <Link href="mailto:rakibul.career@gmail.com">
            <p className="text-white p-2 border-2 border-white transition-all duration-300 ease-in-out hover:bg-[#00B8D9] hover:bg-opacity-45 hover:rounded-md">
              Contact me
            </p>
          </Link>
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
      <nav className="hidden md:flex justify-between absolute pt-8 md:px-14 lg:px-20 items-center w-full z-20">
        {desktopNavbar()}
      </nav>
      <nav className="md:hidden flex justify-between absolute pt-6 px-4 sm:px-8 items-center w-full z-20">
        {mobileNavbar()}
      </nav>
    </>
  );
};

export default Navbar;
