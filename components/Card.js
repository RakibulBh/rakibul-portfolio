import { FaBriefcase, FaMedal } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";


export default function Card({title, description, icon}) {
  return (
    <div className='bg-[#1e293b] rounded-xl w-[13rem] h-40 p-5 flex flex-col items-center justify-between shadow-lg shadow-gray-800/[0.3]'>
        <FaBriefcase className="text-white h-6 w-6" />
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
    </div>
  )
}
