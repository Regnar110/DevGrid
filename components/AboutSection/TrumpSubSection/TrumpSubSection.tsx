import React from 'react'
import Image from 'next/image'

import trump_signature from '../../../public/About/Trump/trump_signature.svg'
import trump_face from '../../../public/About/Trump/trump_face.svg'
const TrumpSubSection = () => {
  return (
    <div className='relative half_bg_color grid grid-cols-1 grid-rows-1 md:grid-cols-7 items-center justify-items-center w-full'>
        
        <div className='trump_face justify-self-center md:justify-self-end w-[300px] md:w-auto lg:w-[350px] xl:w-[400px] 2xl:w-[500px] relative col-span-3  top-1/2 md:left-1/4 transform md:-translate-x-1/2 -translate-y-1/2 bg-white rounded-full  overflow-hidden'>
            <Image src={trump_face} alt='trump_face'/>            
        </div>
        <div className='trump_honest_opinio col-span-3 h-fit w-full md:w-[400px] lg:w-[550px] xl:w-[600px] flex flex-col p-10 md:p-0'>
            <p className='font-merienda text-[11px] lg:text-[12px] md:text-[10px] xl:text-[14px] text-center md:text-left text-white'>
                „Listen, have you heard of a web development company that can make websites that make your teeth hurt?
                Yes, I'm talking about DevGRID! These guys are more precise than plastic surgeons. 
                Their designs are so beautiful that you want to touch them, but you can't because you know it's just an image on the screen. 
                If you need a website that will knock your competition out of their shoes, then look no further, because DevGRID will help you!
                And the best part is that in addition to the beautiful side, you will also get toys, snacks and songs, and this is not a scam at all, because they just like to share the good!”
            </p>
            <span className='nynt font-roboto text-[10px] md:text-[10px] lg:text-[14px] text-right text-[#DCDCDC]'>Donald Trump for New York Not Times</span>
            <div className='relative flex justify-end'>
                <Image width={150} src={trump_signature} alt='trump_signature'/>
            </div>
        </div>
    </div>
  )
}

export default TrumpSubSection
