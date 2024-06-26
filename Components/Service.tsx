import { serviceInfo } from "@/utils/function";
import React from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        {serviceInfo.map((value, index) => (
          <ServiceCard
            title={value.title}
            description={value.description}
            color={value.color}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Service;
