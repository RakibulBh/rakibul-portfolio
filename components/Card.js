
import { FaCode } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";




export default function Card({title, description, icon}) {
  return (
    <div className='text-center bg-[#1e293b] rounded-xl w-[30rem] h-[10rem] md:w-[15rem] md:h-[12rem] p-5 flex flex-col items-center justify-between '>
        {icon == 'Code' && <FaCode className="text-green-500 h-6 w-6" />}
        {icon == 'File' && <FaRegFolder className="text-green-500 h-6 w-6" />}
        {icon == 'LeetCode' && <SiLeetcode className="text-green-500 h-6 w-6" />} 
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}
