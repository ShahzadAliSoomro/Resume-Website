import React from 'react'

const softwareData = [
    {
        id: 1,
        title: 'Header Section',
        description: 'Introduce the software development services with a focus on government contracting needs and compliance.',
    },
    {
        id: 2,
        title: 'How It Works Section',
        description: 'Detail the process of software development from consultation to deployment, tailored for government agencies.',
    },
    {
        id: 3,
        title: 'Feature Section',
        description: 'Highlight specific software development methodologies such as Agile or DevSecOps that are used in projects.',
    },
    {
        id: 4,
        title: 'Testimonial Section',
        description: 'Feature client testimonials that speak to the success of past software development projects for government entities.',
    },
    {
        id: 5,
        title: 'Feature Section',
        description: 'Explain post-deployment support and maintenance services for government software applications.',
    },
    {
        id: 6,
        title: 'How It Works Section',
        description: 'Explain post-deployment support and maintenance services for government software applications.',
    },
    {
        id: 7,
        title: 'FAQ Section',
        description: 'Address frequently asked questions about security clearances, regulatory compliance, and customization capabilities.',
    },
    {
        id: 8,
        title: 'Team Section',
        description: 'Showcase the teams expertise and qualifications in delivering software solutions to government agencies.',
    },
    {
        id: 9,
        title: 'CTA Section',
        description: 'Include a call to action for government agencies to schedule a consultation or request a demo of the software development services.',
    }
   
]

export default function SoftWareDev() {
  return (
    <div className="w-full p-5">
        <div className='container mx-auto'>
            <div className='flex flex-col gap-20'>
                {softwareData.map((item) => (
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
