import React from 'react'
import CodeToDesignSVG from './CodeToDesignSvg/CodeToDesignSVG'

const DesignToCode = () => {
  return (
    <div className='webdevelopment_service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
      <CodeToDesignSVG/>
      <div className='service_desc flex flex-col w-fit justify-center items-center'>
        <h3 className='w-fit h-[70px] text-center text-[15px] lg:text-[17px] 2xl:text-[19px] font-bold'>YOUR <span className='text-[#FF7400]'>DESIGN</span><br/> TO <span className='text-[#FF7400]'>LIVE WEBSITE</span> </h3>
        <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] font-normal px-5'>        
          I am able to perform a full translation of your graphic design into the website code.
          It will map your design, ensuring that every detail, layout and interaction is properly transferred to the code.
        </p>
      </div>
    </div>
  )
}

export default DesignToCode
