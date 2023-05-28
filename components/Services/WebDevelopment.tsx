import React from 'react'
import WebDevelopmentSVG from './WebDevelopmentSvgParts/WebDevelopmentSVG'

const WebDevelopment = () => {
  return (
    <div className='webdevelopment_service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
      <WebDevelopmentSVG/>
      <div className='service_desc flex flex-col w-fit justify-center items-center'>
        <h3 className='w-fit h-[70px] text-center text-[15px] lg:text-[17px] 2xl:text-[19px] font-bold'>CREATING <span className='text-[#FF7400]'>BEAUTIFUL</span> AND <br/><span className='text-[#FF7400]'>RESPONSIVE</span> WEBSITES </h3>
        <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[16px] font-normal px-5'>
        I specialize in creating unique websites tailored to the needs of my clients. 
        I use modern technologies and apply the best programming practices to be able to create responsive, intuitive in navigation and optimal user experience on all devices.
        </p>
      </div>

    </div>
  )
}

export default WebDevelopment
