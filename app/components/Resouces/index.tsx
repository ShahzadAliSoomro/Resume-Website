import React from "react";

const ResoucesData = [
  {
    id: 1,
    title: "Header Section",
    description:
      "Introduce the Resources page with a clear, informative heading that reflects the availability of valuable content for visitors.",
  },
  {
    id: 2,
    title: "Resources List Section",
    description:
      "Present a comprehensive list of resources such as whitepapers, ebooks, guides, and reports that visitors can access.",
  },
  
  {
    id: 3,
    title: "Featured Resources List Header Section",
    description:
      "Highlight featured resources that are particularly beneficial for understanding government contracting in software development and cybersecurity.",
  },
  {
    id: 4,
    title: "FAQ Section",
    description:
      "Provide answers to frequently asked questions about software development and cybersecurity in the context of government contracting.",
  },
  {
    id: 5,
    title: "Newsletter Section",
    description:
      "Offer visitors the option to subscribe to a newsletter for updates on the latest resources and insights in the industry.",
  },
  {
    id: 6,
    title: "CTA Section",
    description:
      "Include a call-to-action encouraging visitors to reach out for personalized advice or additional information on resources.",
  },
];

export default function Resources() {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20">
          {ResoucesData.map((item) => (
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
