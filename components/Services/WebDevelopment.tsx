import React from 'react'
import WebDevelopmentSVG from './WebDevelopmentSvgParts/WebDevelopmentSVG'

const WebDevelopment = () => {
  return (
    <div className='webdevelopment_service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
      <WebDevelopmentSVG/>
      <div className='service_desc flex flex-col w-fit justify-center items-center'>
        <h3 className='w-fit h-[70px] text-center text-[16px] lg:text-[20px] 2xl:text-[22px] font-bold'>CREATING <span className='text-[#FF7400]'>BEAUTIFUL</span> AND <br/><span className='text-[#FF7400]'>RESPONSIVE</span> WEBSITES </h3>
        <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] font-normal lg:font-thin p-5 md:p-0'>
          We specialize in creating unique websites tailored to the needs of our clients. 
          We use modern technologies and best design practices to ensure an attractive design, intuitive navigation and optimal user experience on all devices.
        </p>
      </div>

    </div>
  )
}

export default WebDevelopment
