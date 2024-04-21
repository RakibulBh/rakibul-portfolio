import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

export default function Buttons({ current, setCurrent }) {
  return (
    <div className='flex gap-x-2 justify-center'>
      <Button onClick={() => setCurrent('Web')} className={cn(
          'bg-[#334155] p-5 text-white hover:bg-[#94a3b8] hover:text-[#1e293b] transition-colors duration-300',
          current === 'Web' && 'bg-[#cbd5e1] text-[#1e293b]'
        )}>Web</Button>
      <Button onClick={() => setCurrent('Mobile')} className={cn(
          'bg-[#334155] p-5 text-white hover:bg-[#94a3b8] hover:text-[#1e293b] transition-colors duration-300',
          current === 'Mobile' && 'bg-[#cbd5e1] text-[#1e293b]'
        )}>Mobile</Button>
      <Button onClick={() => setCurrent('Games')} className={cn(
          'bg-[#334155] p-5 text-white hover:bg-[#94a3b8] hover:text-[#1e293b] transition-colors duration-300',
          current === 'Games' && 'bg-[#cbd5e1] text-[#1e293b]'
        )}>Games</Button>
      <Button onClick={() => setCurrent('Other')} className={cn(
          'bg-[#334155] p-5 text-white hover:bg-[#94a3b8] hover:text-[#1e293b] transition-colors duration-300',
          current === 'Other' && 'bg-[#cbd5e1] text-[#1e293b]'
        )}>Other</Button>
    </div>
  )
}

