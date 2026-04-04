import React from 'react'

export const Faq = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);
    const faqsData = [
        {
            question: 'How can i access my course after payment?',
            answer: 'After payment, you will  be redirected to your course page then you can start the course from there. You can also access your course anytime from your account dashboard.'
        },
        {
            question: 'Is it a live class?',
            answer: 'yes, all our courses are live and interactive. You can ask questions and get real-time feedback from our instructors.'
        },
        {
            question: 'When and how do i get my certificate?',
            answer: 'You will receive your certificate immediately after completing the course. It will be available for download in your account dashboard.'
        },
        {
            question: 'Do you offer any discounts or promotions?',
            answer: 'Yes, we offer various discounts and promotions throughout the year. Please subscribe to our newsletter or follow us on social media to stay updated on our latest offers.'
        },
        {
            question: 'What if i have technical issues during the course?',
            answer: 'If you encounter any technical issues during the course, please contact our support team immediately. We are here to help you and ensure that you have a smooth learning experience.'
        }
    ]

  return (
    <>
        <div className='relative flex flex-col items-center mb-8 text-center px-3'>
            <h1 className='text-[16px] md:text-2xl font-semibold mt-10'>Frequently Asked Questions (FAQ)</h1>       
                <div className='max-w-7xl w-full mt-6 flex flex-col gap-4 items-start text-left'>
                    {faqsData.map((faq, index) => (
                        <div key={index} className='flex flex-col bg-white items-start w-full rounded-md'>
                            <div className='flex items-center justify-between w-full cursor-pointer p-4' onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                                <h2 className='text-sm'>{faq.question}</h2>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${openIndex === index ? "rotate-180" : ""} transition-all duration-500 ease-in-out`}>
                                    <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="#1D293D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <p className={`text-[12px] px-4 py-2 transition-all duration-500 ease-in-out ${openIndex === index ? "opacity-100 max-h-75 translate-y-0 pt-4" : "opacity-0 max-h-0 -translate-y-2"}`} >
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
        </div>
    </>
  )
}