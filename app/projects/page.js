import Link from "next/link";
import { AiOutlineExport } from "react-icons/ai";
import { IoMdBrowsers } from "react-icons/io";
import { allProjectsData } from "@/lib/data";

export default function Achive() {
  return (
    <>
      <div className='h-full w-full text-white gap-y-10 flex flex-col items-center justify-center'>
        <p className='hidden lg:block text-white text-3xl text-left'>All projects.</p>
        <table className="text-sm">
          <thead className='text-gray-500 py-10'>
            <tr className="text-left">
              <th className="pl-[2rem] p-[1rem]">Date</th>
              <th className="">Title</th>
              <th className="">Where</th>
              <th className="text-center">Tech</th>
              <th className="pr-[2rem] p-[1rem]">Link</th>
            </tr>
          </thead>
          <tbody className="">
            {allProjectsData && allProjectsData.map((project) => (
              <tr key={project.githubUrl} className="py-10 hover:bg-[#1e293b]">
                <td className="rounded-l-lg pl-[2rem] p-[10px] text-left py-5 text-green-500 whitespace-normal break-words">{project.date}</td>
                <td className="p-[1rem] text-left py-5 font-extrabold">{project.title}</td>
                <td className="p-[1rem] text-left py-5 font-extrabold">{project.madeAt ? project.madeAt : "-" }</td>
                <td className="flex flex-wrap items-center p-[1rem] text-left py-5 font-gray-500 text-xs whitespace-normal break-words">
                  {project.technologies.map((technology, i) => (
                    <span key={i}>{technology}{''}{i !== project.technologies.length - 1 && <span className="font-extrabold mx-[5px]">&middot;</span>}</span>
                  ))}
                </td>
                <td className="rounded-r-lg pr-[2rem] p-[1rem]">
                  <div className="flex gap-x-2">
                    <Link className="hover:text-green-500 transition-colors duration-300 ease-in-out" href={project.githubUrl}>
                      <AiOutlineExport />
                    </Link>
                    {project.productionUrl && <Link className="hover:text-green-500 transition-colors duration-300 ease-in-out" href={project.productionUrl}><IoMdBrowsers /></Link>}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className="text-sm text-white underline underline-offset-8  text-center hover:text-green-500 transition-colors duration-300 ease-in-out" href='/'>
          Back to the home page
        </Link>
      </div>
    </>
  )
}
