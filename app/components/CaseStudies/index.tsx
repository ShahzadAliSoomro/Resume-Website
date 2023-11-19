import React from 'react'

const CaseStudyData = [
    {
        id: 1,
        title: 'Case Study Header Section',
        description: 'Introduce the case studies section with a compelling overview, highlighting the impact of the companys work in software development and cybersecurity within the government sector.',
    },
    {
        id: 2,
        title: 'Case Study List Section',
        description: 'List various case studies showcasing successful projects, detailing the challenges, solutions, and results of each engagement.',
    },
    {
        id: 3,
        title: 'CTA Section',
        description: 'Include a call-to-action that invites visitors to contact the company for more detailed discussions or to start a new project.',
    },
    {
        id: 4,
        title: 'FAQ Section',
        description: 'Provide answers to frequently asked questions regarding the case studies, methodologies, and the benefits of choosing the companys services for government contracts.',
    }
    
    
   
]

export default function CaseStudies() {
  return (
    <div className="w-full p-5">
        <div className='container mx-auto'>
            <div className='flex flex-col gap-20'>
                {CaseStudyData.map((item) => (
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
