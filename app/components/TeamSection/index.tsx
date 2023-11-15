import React from "react";
import Image from "next/image";
import {
  TiSocialLinkedin,
  TiSocialTwitterCircular,
  TiSocialDribbble,
} from "react-icons/ti";

const TeamCard = [
  {
    id: 1,
    src: "/hero2.jpg",
    name: "John Doe",
    title: "Software Developer",
    description:
      "John is a highly skilled software developer with extensive experience in government contracting.",
  },
  {
    id: 2,
    src: "/hero2.jpg",
    name: "Jane Smith",
    title: "Cybersecurity Specialist",
    description:
      "Jane is a cybersecurity specialist who has successfully protected government agencies from cyber threats.",
  },
  {
    id: 3,
    src: "/hero2.jpg",
    name: "Michael Johnson",
    title: "Project Manager",
    description:
      "Michael is a highly organized project manager who ensures successful software development projects for government clients.",
  },
  {
    id: 4,
    src: "/hero2.jpg",
    name: "Sarah Davis",
    title: "Quality Assurance Analyst",
    description:
      "Sarah is a meticulous quality assurance analyst who ensures the delivery of high-quality software solutions.",
  },
  {
    id: 5,
    src: "/hero2.jpg",
    name: "David Wilson",
    title: "Network Engineer",
    description:
      "David is a skilled network engineer who designs and maintains secure networks for government agencies.",
  },
  {
    id: 6,
    src: "/hero2.jpg",
    name: "We're hiring!",
    title: "Join our team of experts and make a difference.",
    description: "Open positions.",
  },
  {
    id: 7,
    src: "/hero2.jpg",
    name: "Full name",
    title: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
  {
    id: 8,
    src: "/hero2.jpg",
    name: "Full name",
    title: "Job title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  },
];

export default function TeamSection() {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto pt-10">
        <div className="flex flex-col gap-5 justify-center items-center pb-10">
          <p>Excellence</p>
          <h2 className="text-4xl text-center font-bold ">Meet Our Team</h2>
          <p className="w-full lg:w-4/12 text-center">
            We are a team of experts specializing in software development and
            cybersecurity for governments agencies.
          </p>
        </div>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-14 justify-center items-center flex-wrap lg:flex-nowrap">
          {TeamCard.map((item) => (
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
                  <div className="flex flex-col justify-center items-center">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <h4 className="text-xl font-light">{item.title}</h4>
                  </div>

                  <p className="w-full lg:w-[300px] text-sm text-center">
                    {item.description}
                  </p>
                  <div className="flex gap-5 items-center pt-3">
                    <TiSocialLinkedin className="w-8 h-8 bg-black text-white rounded-full" />
                    <TiSocialTwitterCircular className="w-8 h-8 bg-black text-white rounded-full" />
                    <TiSocialDribbble className="w-8 h-8 bg-black text-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center pt-20">
          <h3 className="w-full lg:w-4/12 text-center text-2xl font-bold">
            We are hiring!
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="w-full lg:w-[200px] border-black text-center border-2 p-3">
            Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
