import React from "react";
import Image from "next/image";

export default function SpecializingGovt() {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="w-full pt-20">
          <div className="flex justify-between gap-5 lg:gap-0 items-center pt-20 flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-6/12 flex flex-col gap-5">
              <div className="w-full lg:w-10/12">
                <h2 className="text-4xl font-bold leading-10">
                  Specializing in Government Software Development and
                  Cybersecurity
                </h2>
              </div>
              <p className="text-sm w-full lg:w-8/12">
                Our expertise in government contracting ensures secure and
                efficient software development for public sector organizations.
              </p>
            </div>
            <div className="w-full lg:w-6/12">
              <div>
                <Image
                  src="/hero2.jpg"
                  alt="resume"
                  width={1200}
                  height={1200}
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
