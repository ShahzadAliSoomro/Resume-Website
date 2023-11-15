import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const FeatureCard = [
  {
    id: 1,
    src: "/hero2.jpg",
    title: "System Modernization",
    description:
      "We provide tailored software solutions to meet your unique needs.",
    text: "Learn More",
  },
  {
    id: 2,
    src: "/hero2.jpg",
    title: "Cybersecurity Solutions",
    description:
      "Project your valuable data with our advanced security measures.",
    text: "Learn More",
  },
  {
    id: 3,
    src: "/hero2.jpg",
    title: "Cloud Computing Services",
    description: "Optimize your operations with our scalable cloud solutions.",
    text: "Learn More",
  },
];

export default function FeatureSection() {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto pt-10">
        <div className="">
          <h2 className="text-4xl text-center font-bold mb-10">
            Custom Software Development
          </h2>
        </div>
        <div className="flex gap-10 justify-center items-center flex-wrap lg:flex-nowrap">
          {FeatureCard.map((item) => (
            <div key={item.id} className="flex gap-5 ">
              <div className="flex flex-col gap-5">
                <div>
                  <Image
                    src={item.src}
                    alt=""
                    width={400}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5 justify-center items-center">
                  <h4 className="text-xl font-bold">{item.title}</h4>
                  <p className="w-full lg:w-[370px] text-sm text-center">
                    {item.description}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p>{item.text}</p>
                    <IoIosArrowForward className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
