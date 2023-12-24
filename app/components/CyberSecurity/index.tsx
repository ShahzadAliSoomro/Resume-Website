import React from "react";

const CyberData = [
  {
    id: 1,
    title: "CTA Section",
    description:
      "Include a call-to-action for agencies to schedule a cybersecurity assessment or consultation.",
  },
  {
    id: 2,
    title: "Feature Section",
    description:
      "Discuss advanced cybersecurity technologies employed, like AI-driven threat analysis or zero-trust architectures.",
  },
  {
    id: 3,
    title: "Header Section",
    description:
      "Introduce the Cybersecurity services with a strong headline reflecting the company’s expertise in protecting government information systems.",
  },
  {
    id: 4,
    title: "Feature Section",
    description:
      "Detail the approach taken to cybersecurity, emphasizing methodologies like threat assessment and risk management.",
  },
  {
    id: 5,
    title: "Feature List Section",
    description:
      "List specific cybersecurity services such as intrusion detection, data encryption, and incident response.",
  },
  {
    id: 6,
    title: "Benefits Section",
    description:
      "Elaborate on the benefits of choosing the company for cybersecurity needs, such as compliance with government standards and improved data security.",
  },
  {
    id: 7,
    title: "How It Works Section",
    description:
      "Provide a step-by-step guide on how the company implements cybersecurity measures for government contracts.",
  },
  {
    id: 8,
    title: "Testimonial Section",
    description:
      "Showcase client testimonials that speak to the effectiveness and reliability of the cybersecurity services.",
  },
  {
    id: 9,
    title: "FAQ Section",
    description:
      "Answer frequently asked questions about cybersecurity practices and how they cater to government agencies.",
  },
];

export default function CyberSecurity() {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex flex-col gap-20">
          {CyberData.map((item) => (
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
