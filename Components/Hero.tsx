import React from "react";
import TextEffect from "./TextEffect";

const Hero = () => {
  return (
    <>
      <div className="h-[88vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
          <div>
            <h1 className="text-[35px] md:text-[50px] text-white font-bold">
              HI, Im <span className="text-yellow-400">Amit !</span>
            </h1>
            <TextEffect />
          </div>
          <div className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]">
            <img src="/images/u1.jpg" alt="user" className="object-cover rounded-full"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
