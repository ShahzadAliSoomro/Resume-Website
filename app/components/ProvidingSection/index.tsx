import React from "react";
import Image from "next/image";

export default function ProvidingSection() {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="w-full lg:pt-20 pt-0">
          <div className="flex justify-between gap-5 lg:gap-0 lg:pt-20 pt-10 items-center flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-6/12 flex flex-col gap-5 ">
              <div className="w-full lg:w-10/12">
                <h2 className="lg:text-4xl text-2xl font-bold leading-10">
                  {`Providing Exceptional Software Development and Cybersecurity Solutions for Government Contracts`}
                </h2>
              </div>
              <p className="text-sm w-full lg:w-8/12">
                {`With a proven track record in government contracting, our team delivers innovative software development and cybersecurity solutions that meet the unique needs of government agencies.`}
              </p>
              <div className="flex flex-col lg:flex-row gap-5 pt-7">
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl font-bold">50% Success</h1>
                  <p className="text-sm w-10/12">{`Delivering Results that Exceed Expectations and Drive Mission Success`}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-4xl font-bold">50% </h1>
                  <h1 className="text-4xl font-bold">Satisfaction</h1>
                  <p className="text-sm w-10/12">{`Building Trusted Partnerships for Long-Term Success in Government Contracting`}</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12">
              <div>
                <Image
                  src="/hero2.jpg"
                  alt="resume"
                  width={1200}
                  height={1200}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
