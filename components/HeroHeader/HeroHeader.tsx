import React from 'react'

interface Props {
    header_text:string
}

const HeroHeader = ({header_text}:Props) => {
  return (
    <div className='section_header w-full flex justify-center items-center text-[20px] md:text-[25px] lg:text-[30px] font-bold my-10'>
        <div className='header text-[#444548]'>
            {header_text}
        </div>
    </div>
  )
}

export default HeroHeader
