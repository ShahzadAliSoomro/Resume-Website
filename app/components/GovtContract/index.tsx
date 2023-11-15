import React from "react";
import Image from "next/image";

export default function GovtContract() {
  return (
    <div className="w-full">
      <div className="relative pt-32">
        <div className="pt-20 absolute w-full bg-transparent opacity-30 overflow-hidden">
          <Image
            src="/hero2.jpg"
            alt="resume"
            width={1200}
            height={1200}
            className="w-full lg:h-[60vh] h-[50vh] object-center"
          />
        </div>
      </div>

      <div className="w-full container mx-auto lg:pt-32 pt-20 p-5">
        <div className="flex flex-col gap-5 pt-20 flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-8/12 ">
            <h1 className="lg:text-7xl text-5xl font-bold">
              Government Contracting Services for You
            </h1>
          </div>
          <div className="w-full lg:w-8/12">
            <div className="flex flex-col gap-10">
              <p className="w-full lg:w-9/12 text-lg">{`Unlock opportunities in government contracting with our expert software development and cybersecurity services.`}</p>
              <div className="flex gap-2">
                <div className="flex justify-center items-center">
                  <button className="bg-black flex justify-center items-center w-full h-[45px] text-white p-4 text-sm">
                    Contact
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button className="border-2 flex justify-center items-center w-full h-[45px] border-[#DBDBDB] text-black p-4 text-sm">
                    Learn More
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
