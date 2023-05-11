import React from 'react'
import Image from 'next/image'

import rocket from '../../../public/About/Elon/rocket.svg'

import elon_face from '../../../public/About/Elon/elon_face.svg'
const ElonSubSection = () => {
  return (
    <div className='relative half_bg_color-black grid md:grid-cols-3 items-center justify-items-center w-full text-white gap-8 md:gap-0'>
      <div className='relative rocket_image  w-[200px] lg:w-[300px] xl:w-auto'>
        <Image src={rocket} alt='elons_rocket'/>
      </div>
      <div className='elon_header_text px-5 md:p-0'>
        <div className='header text-center md:text-left text-[20px] md:text-[15px] lg:text-[28px] xl:text-[35px]'>
          <span className='text-[#FF7400]'>With us</span>, your website will fly safely into the orbit of <span className='text-[#FF7400]'>success</span>!          
        </div>
        <div className='sub_text text-center md:text-left  md:text-[10px] lg:text-[12px] xl:text-[15px] mt-5'>
          <span className='text-[#FF7400]'>*</span> 
          and it will not fall apart like some Elon Musk's rockets.
        </div>
      </div>
      <div className='relative elon_face_image w-[200px] lg:w-[300px] xl:w-auto'>
        <Image src={elon_face} alt='elon_face'/>
      </div>
    </div>
  )
}

export default ElonSubSection
