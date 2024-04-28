import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export default function Sidebar() {
  return (
      <div className="h-full fixed flex flex-col justify-between items-center">
        <Link href='/#home'>
          <p className="text-5xl text-white mt-[1.5rem]">R</p>
        </Link>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-y-10 mb-10">
            <Link href="https://github.com/RakibulBh">
              <FiGithub className="transition-colors duration-300 ease-in-out hover:text-green-500 cursor-pointer text-white h-6 w-6"/>
            </Link>
            <Link href="https://linkedin.com/in/RakibulB">
              <FaLinkedinIn className="transition-colors duration-300 ease-in-out hover:text-green-500 cursor-pointer text-white h-6 w-6" />
            </Link>
            <Link href="https://leetcode.com/RakibulB">
              <SiLeetcode className="transition-colors duration-300 ease-in-out hover:text-green-500 cursor-pointer text-white h-6 w-6" />
            </Link>
          </div>
          <div className="h-[8rem] w-1 rounded-full bg-white"></div>
        </div>
      </div>
  )
}
