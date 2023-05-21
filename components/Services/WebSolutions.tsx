import React from 'react'
import WebSolutionsSVG from './WebSolutonsSvg/WebSolutionsSVG'

const WebSolutions = () => {
  return (
    <div className='webdevelopment_service flex flex-col md:flex-row lg:flex-col justify-start items-center w-fit text-[#444548]'>
      <WebSolutionsSVG/>
      <div className='service_desc flex flex-col w-fit justify-center items-center'>
        <h3 className='w-fit h-[70px]  text-center text-[16px] lg:text-[20px] 2xl:text-[22px] font-bold'>PERSONALIZED WEB <br /><span className='text-[#FF7400]'>SOLUTIONS</span></h3>
        <p className='text-center max-w-[400px] lg:max-w-[330px] xl:max-w-[400px] 2xl:max-w-[500px] text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[19px] font-normal lg:font-thin p-5 md:p-0'>
            We offer personalized Internet solutions that are tailored to the specific requirements of our clients. 
            Whether you need an online store, an e-learning platform or an online wallet, we provide comprehensive solutions to help you succeed online.
        </p>
      </div>
    </div>
  )
}

export default WebSolutions
