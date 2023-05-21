import React from 'react'
import CodeToDesignSVG from './CodeToDesignSvg/CodeToDesignSVG'

const DesignToCode = () => {
  return (
    <div className='webdevelopment_service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
      <CodeToDesignSVG/>
      <div className='service_desc flex flex-col w-fit justify-center items-center'>
        <h3 className=' h-[70px] w-fit flex justify-center items-center text-center text-[16px] lg:text-[20px] 2xl:text-[22px] font-bold'><span className='text-[#FF7400]'>DESIGN</span> TO <span className='text-[#FF7400]'>CODE</span> </h3>
        <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] font-normal lg:font-thin p-5 md:p-0'>
        We are able to carry out a full translation of your graphic design into the website code. 
        Our experience will allow us to map your design, ensuring that every detail, layout and interaction will be properly transferred to the code. 
        </p>
      </div>
    </div>
  )
}

export default DesignToCode
