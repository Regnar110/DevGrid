import React from 'react'

interface Props {
    header_text:string
}

const GradientHeader = ({header_text}:Props) => <span className='text-[25px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#fff] via-[#FFA647] to-[#fff] drop-shadow-2xl'>{header_text}</span>


export default GradientHeader
