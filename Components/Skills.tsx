import React from "react";
import SkillsItem from "./SkillsItem";
import { educationSkillInfo } from "@/utils/function";

const Skills = () => {
  return (
    <div className="bg-black pb-[4rem] md:pt-[8rem] mt-10 space-y-6 container mx-auto">
      <div className="flex flex-col text-center space-y-4 container mx-auto">
        <h1 className="uppercase text-[#55e6a5] font-semibold text-2xl">
          My Skills
        </h1>
        <h1 className="uppercase text-white font-bold text-6xl">
          Crafting Stories through Design and Imagination
        </h1>
      </div>
      <div className="flex flex-row justify-center space-x-10 mt-10">
        <button className="text-white font-bold text-xl bg-[#2c2c2c] p-4 rounded-xl transition-all duration-500 hover:scale-110 hover:bg-[#55e6a5] ">
          Education
        </button>
        <button className="text-white font-bold text-xl bg-[#2c2c2c] p-4 rounded-xl transition-all duration-500 hover:scale-110 hover:bg-[#55e6a5] ">
          Biography
        </button>
        <button className="text-white font-bold text-xl bg-[#2c2c2c] p-4 rounded-xl transition-all duration-500 hover:scale-110 hover:bg-[#55e6a5] ">
          Experience
        </button>
      </div>
      <div className="grid grid-cols-8 place-items-center space-y-4">
        {educationSkillInfo.map((x, index) => {
          return (
            <SkillsItem
              key={index}
              title={x.title}
              institution_name={x.institution_name}
              year={x.year}
              description={x.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
