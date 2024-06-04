import React from "react";

const Contacts = () => {
  return (
    <div className="bg-black pb-[4rem] md:pt-[8rem] container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-white">
            <span className="font-bold text-6xl md:text-9xl">Design</span>{" "}
            <span className="font-semibold text-4xl">and Innovation</span>
          </h1>
          <p className="text-[15px] text-slate-300 w-[80%] mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            aperiam, numquam excepturi eos molestias iste autem odio quasi
            necessitatibus amet earum labore iure exercitationem corrupti atque
            non unde sunt blanditiis!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="text-white bg-[#09101a] grid place-items-center p-10 rounded-lg cursor-pointer hover:bg-gradient-to-r from-cyan-500 to-blue-500">
              <img src="/images/project-management.png" className="w-20" />
              <h1 className="font-bold text-4xl">10K+</h1>
              <p className="text-xl font-bold">Complete Project</p>
            </div>
            <div className="text-white bg-[#09101a] grid place-items-center p-10 rounded-lg gap-y-1 cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              <img src="/images/rating.png" className="w-20" />
              <h1 className="font-bold text-4xl">800+</h1>
              <p className="text-xl font-bold">Client review</p>
            </div>
          </div>
        </div>
        <div className="p-10 bg-[#09101a] rounded-lg">
          <h1 className="uppercase text-white text-4xl">Get touch me ?</h1>
          <p className="text-white text-lg text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            reiciendis tempora magnam veritatis sapiente sed, officiis cumque
            debitis consequatur sequi ullam minima fuga ipsum voluptatem omnis
            esse nostrum mollitia rem!
          </p>
          <div className="grid grid-cols-1 gap-y-6 mt-6">
            <input type="text" placeholder="Your Name" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"/>
            <input type="text" placeholder="Your Email" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"/>
            <input type="text" placeholder="Phone Number" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"/>
            <textarea rows={6} placeholder="Message" name="" id="" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
