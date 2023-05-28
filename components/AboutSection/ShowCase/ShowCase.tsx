import React from 'react'
import Image from 'next/image'

import partnership_image from '../../../public/About/Partnership/partnership.png'
const ShowCase = () => {
  return (
    <div className='showcase_subsection h-fit relative w-full lg:w-[90%]  grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 font-roboto justify-items-center items-start md:items-center'>
        <div className='showcase_image relative h-fit justify-self-start md:justify-self-center col-span-1 order-1'>
            <Image src={partnership_image} alt='partnership'/>
        </div>
      <div className='showcase_header_text flex flex-col col-span-1 justify-center items-center md:items-start p-10 gap-6'>
        <h1 className='text-[23px] md:text-[20px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px]'>YOUR WEBSITE, YOUR SHOWCASE</h1>
        <p className='text-[13px] [md:text-[12px] lg:text-[13px] xl:text-[15px] 2xl:text-[17px]'>
            We know that your business website is your online business card. 
            That is why we make sure that the design and creation of websites is always tailored to your needs and requirements.
            All this so that the website we create is not only beautiful, but also functional and responsive. 
            We treat our clients as partners whom we are happy to help in achieving their goals.
        </p>
      </div>
    </div>
  )
}

export default ShowCase
