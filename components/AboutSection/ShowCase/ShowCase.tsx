import React from 'react'
import Image from 'next/image'

import partnership_image from '../../../public/About/Partnership/partnership.png'
const ShowCase = () => {
  return (
    <div className='showcase_subsection h-fit relative w-full   grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 font-roboto justify-items-center items-start md:items-center'>
        <div className='showcase_image relative h-fit justify-self-start md:justify-self-center col-span-1 order-1'>
            <Image src={partnership_image} alt='partnership'/>
        </div>
      <div className='showcase_header_text flex flex-col col-span-1 justify-center items-center md:items-start p-10 gap-6'>
        <h1 className='text-[15px] lg:text-[17px] 2xl:text-[19px] font-bold'>YOUR WEBSITE, YOUR SHOWCASE</h1>
        <p className='text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px]'>
        I understand that websites are often showcases of various companies, start-ups, designer, etc.
        That is why I make sure that the websites I create are always tailored to the needs and requirements of a given task. 
        All this so that the website I created was not only beautiful, but also functional and responsive.
        I treat each project as the "most important" one and each client as a partner.
        </p>
      </div>
    </div>
  )
}

export default ShowCase
