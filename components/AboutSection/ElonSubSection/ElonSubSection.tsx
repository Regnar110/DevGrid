import React from 'react'
import Image from 'next/image'
import elon_face from '../../../public/About/Elon/elon_face.svg'
import RocketIcon from '@/components/RocketIcon'
const ElonSubSection = () => {
  return (
    <div className='relative  bg-white grid md:grid-cols-3 items-center justify-items-center w-full text-white gap-8 md:gap-0 overflow-visible'>
      <div className='relative rocket_image w-fit'>
        <RocketIcon />
      </div>
      <div className='elon_header_text px-5 md:p-0 text-[#444548]'>
        <div className='header text-center md:text-left text-[17px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
          <span className='text-[#FF7400]'>With us</span>, your website will fly safely into the orbit of <span className='text-[#FF7400]'>success</span>!          
        </div>
        <div className='sub_text text-center md:text-left text-[11px] md:text-[12px] lg:text-[14px] xl:text-[16px] mt-2'>
          <span className='text-[#FF7400]'>*</span> 
          and it will not fall apart like some Elon Musk's rockets.
        </div>
      </div>
      <div className='relative elon_face_image w-[150px] md:w-[200px] lg:w-[220px] xl:w-[250px]'>
        <Image src={elon_face} alt='elon_face'/>
      </div>
    </div>
  )
}

export default ElonSubSection
