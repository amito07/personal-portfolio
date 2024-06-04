import React from 'react'

interface Props{
  title: string;
  institution_name: string;
  description: string;
  year: string;
}

const SkillsItem = ({title, institution_name, year, description}: Props) => {
  return (
    <div className="col-span-4 p-10 border-2 border-gray-700 rounded-2xl">
    <h1 className="text-white">{title}</h1>
    <div className="h-0.5 w-14 bg-green-500 mb-4"></div>
    <div className="container mx-auto space-y-3">
      <h1 className="text-white font-bold">{institution_name}</h1>
      <h1 className="text-green-500 font-semibold">{year}</h1>
      <p className="text-white w-96">{description}</p>
    </div>
    
  </div>
  )
}

export default SkillsItem