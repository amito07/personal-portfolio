import React from "react";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  return (
    <>
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] text-white font-bold">
              HI, Im <span className="text-yellow-400">Amit !</span>
            </h1>
            <ul className="text-white">
              <li>Software Engineer</li>
              <li>Work Experience <span className="text-yellow-300">3 year</span></li>
              <li>United International University</li>
            </ul>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6">
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-lg font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                <p>Download CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
              </button>
            </div>
            <TextEffect />
          </div>
          <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
            <img
              src="/images/u1.jpg"
              alt="user"
              className="object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
