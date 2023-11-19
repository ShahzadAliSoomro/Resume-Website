import React from "react";

const CaseStudyData = [
  {
    id: 1,
    title: "Case Study Header Section",
    description:
      "Introduce the case study with a compelling headline that summarizes the project's success.",
  },
  {
    id: 2,
    title: "Case Study Body Section",
    description:
      "Detail the client's challenges, the solutions provided, and the outcomes of the project, including specific benefits and improvements.",
  },
  {
    id: 3,
    title: "Testimonial Section",
    description:
      "Include a testimonial from the client featured in the case study to add authenticity and trust.",
  },
  {
    id: 4,
    title: "Stats Section",
    description:
      "Showcase measurable results from the case study with relevant statistics and data visualizations.",
  },
  {
    id: 5,
    title: "CTA Section",
    description:
      "Prompt readers to contact the company for similar solutions or to learn more about their services in software development and cybersecurity.",
  },
];

export default function CaseStudy() {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20">
          {CaseStudyData.map((item) => (
            <div
              key={item.id}
              className="border-dotted border-2 border-[#16161626]"
            >
              <div className="w-full min-h-screen flex justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <h4 className="lg:text-2xl text-xl font-bold lg:font-medium">
                    {item.title}
                  </h4>
                  <p className="text-lg lg:text-base w-full lg:w-9/12 text-center p-2 lg:p-0">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
