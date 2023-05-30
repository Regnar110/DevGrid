import React from 'react'
import SingleBenefit from './SingleBenefit'

const Benefits = () => {
  return (
    <div className='benefits px-5 bg-[#fff] text-[#444548] flex flex-col justify-center w-full md:w-fit gap-10 md:gap-0'>
        <h1 className=' text-[20px] md:text-[25px] lg:text-[30px] font-extrabold text-[#444548]'>Key benefits</h1>
        <div className='benefits_content w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-start md:justify-items-center gap-10'>
            <SingleBenefit number={1} text='Higher conversion and greater search engine visibility, leading to more customers and profits.'/>
            <SingleBenefit number={2} text='A professional and modern look that builds trust and attracts the attention of users.'/>
            <SingleBenefit number={3} text='Optimized for mobile devices and responsive for a great user experience across devices.'/>
            <SingleBenefit number={4} text='Reducing the page load time, which translates into increased user satisfaction and a lower rate of leaving the page.'/>
            <SingleBenefit number={5} text='Easy scalability and expansion of functionality, enabling the website to be adapted to the growing needs and business development.'/>
        
        </div>
    </div>
  )
}

export default Benefits
