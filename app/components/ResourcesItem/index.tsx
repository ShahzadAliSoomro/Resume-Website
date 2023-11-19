import React from 'react'

const ResoucesItemData = [
    {
        id: 1,
        title: 'Resource Item Header Section',
        description: 'Provide a title and brief introduction to the specific resource, which could be a whitepaper, ebook, guide, or a report relevant to government contracting in software development and cybersecurity.',
    },
    {
        id: 2,
        title: 'Resources Item Body Section',
        description: 'Include detailed information about the resource, its contents, and how it can be beneficial for the reader, especially in the context of government contracting.',
    },
    {
        id: 3,
        title: 'Testimonial Section',
        description: 'Feature testimonials that speak to the value and insights provided by the resources offered, ideally from government officials or employees who have utilized these resources.',
    },
    {
        id: 4,
        title: 'Pricing Section',
        description: 'If applicable, provide information on the cost of the resource or make it clear if the resource is available for free.',
    },
    {
        id: 5,
        title: 'CTA Section',
        description: 'Include a clear call-to-action encouraging visitors to download the resource or get in touch for further information.',
    },
    {
        id: 6,
        title: 'Newsletter Section',
        description: 'Offer an option to sign up for a newsletter to receive updates on new resources, insights, and services.',
    },
    {
        id: 7,
        title: 'FAQ Section',
        description: 'Address any frequently asked questions specifically about the resource or related topics.',
    },
    {
        id: 8,
        title: 'Contact Section',
        description: 'Provide contact details or a form for visitors to ask questions or request assistance with the resources.',
    },
    
   
]

export default function ResourcesItem() {
  return (
    <div className="w-full p-5">
        <div className='container mx-auto'>
            <div className='flex flex-col gap-20'>
                {ResoucesItemData.map((item) => (
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
