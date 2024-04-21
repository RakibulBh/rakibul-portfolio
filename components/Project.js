import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Project = () => {
  return (
    <div className='h-80 w-[40%] rounded-tr-xl bg-[#112240] flex flex-col p-10 justify-between'>
      <div className='flex justify-between'>
        <FontAwesomeIcon className='h-8 w-8' icon={faCoffee}/>
        <p>github</p>
      </div>
      <div className='flex flex-col gap-y-2'>
        <p className='text-xl'>Time to have more fun</p>
        <p className='text-gray-400 text-sm md:text-md'>A single web ap for heloing me choose where to travel, built with Next.js, firebase and tailwind CSS.</p>
      </div>
      <div>
        <p>Github VsCode Linux</p>
      </div>
    </div>
  )
}

export default Project
