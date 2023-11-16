import React from 'react'

const data = [
    {
        id: 1,
        title: 'Award Logos List Section',
        description: 'Display awards and recognitions received for outstanding work in government contracting and cybersecurity.',
    },
    {
        id: 2,
        title: 'CTA Section',
        description: 'Include a call-to-action for government agencies to schedule a consultation or request a proposal for services.',
    },
    {
        id: 3,
        title: 'Header Section',
        description: 'Introduce the range of services offered, emphasizing dedication to government contracting in software development and cybersecurity.',
    },
    {
        id: 4,
        title: 'Services Section',
        description: 'Provide an overview of the main services such as custom software solutions, cybersecurity measures, and IT consulting specific to government agencies.',
    },
    {
        id: 5,
        title: 'Feature Section',
        description: 'Detail the software development process, from requirements analysis to maintenance and support for government systems.',
    },
    {
        id: 6,
        title: 'Feature Section',
        description: 'Explain the cybersecurity services, including risk assessments, incident response, and compliance with government security standards.',
    },
    {
        id: 7,
        title: 'How it works Section',
        description: 'Outline the step-by-step approach the company takes when working on government contracts.',
    },
    {
        id: 8,
        title: 'Review Section',
        description: 'Showcase client reviews and feedback on past projects to highlight the companys expertise and success in delivering services.',
    },
]

export default function Service() {
  return (
    <div className="w-full p-5">
        <div className='container mx-auto'>
            <div className='flex flex-col gap-20'>
                {data.map((item) => (
                    <div key={item.id} className='border-dotted border-2 border-[#16161626]'>
                <div className='w-full min-h-screen flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <h4 className='lg:text-2xl text-xl font-bold lg:font-medium'>{item.title}</h4>
                        <p className='text-lg lg:text-base w-full lg:w-9/12 text-center p-2 lg:p-0'>{item.description}</p>
                    </div>
                </div>
            </div>
                ))}
            </div>
            
        </div>
    </div>
  )
}
