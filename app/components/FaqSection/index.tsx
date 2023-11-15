import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Question = [
  {
    id: 1,
    question: "How does government contracting work?",
    desc: "Government contracting involves bidding on contracts issued by federal, state, or local government agencies. If awarded the contract, the company provides goods or services to fulfill the government's needs.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    desc: "We specialize in software development and cybersecurity services for government agencies. Our team of experts ensures the security and efficiency of government systems.",
  },
  {
    id: 3,
    question: "How can I apply for government contracts?",
    desc: "To apply for government contracts, you need to register your company on the appropriate government procurement websites. You will also need to research and bid on contracts that align with your capabilities.",
  },
  {
    id: 4,
    question: "What are the benefits of government contracting?",
    desc: "Government contracting offers several benefits, including a stable source of revenue, access to government resources, and the opportunity to contribute to public sector projects.",
  },
  {
    id: 5,
    question: "How do I qualify for government contracts?",
    desc: "Qualifying for government contracts requires meeting specific criteria set by the government agency issuing the contract. This may include certifications, experience, and financial stability.",
  },
];

export default function FaqSection() {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto pt-32">
        <div className="flex flex-col gap-7 pt-5">
          <div className="flex flex-col gap-5">
            <h1 className="lg:text-5xl text-3xl font-bold">
              Frequently Asked Questions
            </h1>
            <p className="lg:text-lg text-sm">
              Find anwnser to common questions government contracting and our
              services.
            </p>
          </div>
          <div className="w-full border-b-2 border-black"></div>

          {Question.map((item) => (
            <div className="flex flex-col gap-5">
              <div className="flex justify-between items-center">
                <h5 className="lg:text-2xl text-xl font-bold">
                  {item.question}
                </h5>
                <div>
                  <IoIosArrowDown className="w-8 h-8" />
                </div>
              </div>
              <div className="w-full lg:w-6/12">
                <p>{item.desc}</p>
              </div>
              <div className="w-full border-b-2 border-black pt-5"></div>
            </div>
          ))}

          <div className="flex flex-col gap-5 pt-10">
            <h4 className="text-2xl font-bold">Still have questions?</h4>
            <p>Contact us for more information.</p>
            <button className="p-2 border border-[#000] mt-5 w-20">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
