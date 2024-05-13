import { CodeBracketSquareIcon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props{
    title: string;
    description: string;
    color: string;
}

const ServiceCard = ({title, description, color}: Props) => {
    console.log(color)
  return (
    <div className="cursor-pointer">
    <div className={`bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]`}>
      <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
      <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
        {title}
      </h1>
      <p className="text-[15px] text-white font-primary">
        {description}
      </p>
    </div>
  </div>
  )
}

export default ServiceCard