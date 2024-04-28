import React from 'react'

export default function Skill({skill}) {
  return (
    <span className='text-xs md:text-sm text-white bg-[#334155] px-2 py-1 rounded-md mx-1 mb-1'>
      {skill}
    </span>
  )
}
