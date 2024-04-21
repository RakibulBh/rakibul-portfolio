import { FiGithub } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";


export default function Sidebar() {
  return (
    <div className='h-screen flex flex-col justify-between'>
      <div>
        <p className="hidden md:block text-5xl text-white">R</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="space-y-10 mb-10">
          <FiGithub className="text-white h-6 w-6" />
          <FaLinkedinIn className="text-white h-6 w-6" />
          <SiLeetcode className="text-white h-6 w-6" />
        </div>
        <div className="h-[8rem] w-1 rounded-full bg-white"></div>
      </div>
    </div>
  )
}
