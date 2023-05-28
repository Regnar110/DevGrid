import React from 'react'
import WebSolutionsSVG from './WebSolutonsSvg/WebSolutionsSVG'

const WebSolutions = () => {
  return (
    <div className='webdevelopment_service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
      <WebSolutionsSVG/>
      <div className='service_desc flex flex-col w-fit justify-center items-center'>
        <h3 className='w-fit h-[70px] text-center text-[15px] lg:text-[17px] 2xl:text-[19px] font-bold'>PERSONALIZED WEB <br /><span className='text-[#FF7400]'>SOLUTIONS</span></h3>
        <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] font-normal px-5'>
        I offer personalized Internet solutions that are tailored to specific customer requirements. Whether you need an online store, a website for your startup or a business card website.
        </p>
      </div>
    </div>
  )
}

export default WebSolutions
