import React from 'react'

export default function SectionTitle({title, number}) {
  return (
    <h1 className="text-xl md:text-xl"><span className="text-green-500">0{number}. </span>{title}</h1>
  )
}
