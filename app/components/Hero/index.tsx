import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full">
      <div className="">
        <Image
          src="/hero2.jpg"
          alt="resume"
          width={1200}
          height={1200}
          className="w-full lg:h-[60vh] h-[32vh] object-center"
        />
      </div>
      <div className="w-full container mx-auto p-5">
        <div className="flex justify-between gap-5 lg:pt-20 pt-10 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-6/12 ">
            <h1 className="lg:text-7xl text-5xl font-bold">
              Empowering Government Through Innovative Sooftware Solutions
            </h1>
          </div>
          <div className="w-full lg:w-6/12 lg:pl-7 pl-0">
            <div className="flex flex-col gap-10">
              <p className="w-full lg:w-9/12 text-lg">{`We specialize in delivering cutting-edge software development and cybersecurity solutions for government agencies. Our expertise ensures the highest level of security and efficiency.`}</p>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                                    <button className="bg-black flex justify-center items-center w-full h-[45px] text-white p-4 text-sm">Learn More</button>

                </div>
                <div className="flex justify-center items-center">
                    <button className="border-2 flex justify-center items-center w-full h-[45px] border-[#DBDBDB] text-black p-4 text-sm">
                  Contact Us
                </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
