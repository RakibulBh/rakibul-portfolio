import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-full fixed flex flex-col justify-end items-center">
      <div className="flex flex-col gap-y-10 mb-10">
        <Link href="https://github.com/RakibulBh">
          <FiGithub className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer text-white hover:text-green-500 h-6 w-6" />
        </Link>
        <Link href="https://linkedin.com/in/RakibulB">
          <FaLinkedinIn className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer text-white hover:text-green-500 h-6 w-6" />
        </Link>
        <Link href="https://leetcode.com/RakibulB">
          <SiLeetcode className="transition-transform duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer text-white hover:text-green-500 h-6 w-6" />
        </Link>
      </div>
      <div className="h-[8rem] w-1 rounded-full bg-white"></div>
    </div>
  );
}
