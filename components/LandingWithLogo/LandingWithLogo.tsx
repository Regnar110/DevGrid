import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import MediaQuery from 'react-responsive'
import starter_logo from '../../public/landing/logo_big.svg'
import starter_mobile_logo from '../../public/NavigationBar/logo_mini.svg'
import GradientHeader from '../GradientHeader/GradientHeader'
import headers_underline from '../../public/landing/headers_underline.svg'
const LandingWithLogo = () => {
  const [isMounted, setIsMounted] = useState<boolean>()
  useEffect(() => {
    setIsMounted(true)
  },[])
  return isMounted ? 
    <div className='landing_starter font-roboto grid grid-cols-1 grid-rows-2 md:grid-cols-5 md:grid-rows-1 justify-items-center items-center h-[100vh] md:p-4'>
      <MediaQuery minWidth={768}>
        <Image priority={true} className='col-span-3 h-fit justify-self-center' width={600} src={starter_logo} alt="big_logo"/>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <Image priority={true}  className='col-span-1 h-fit p-3 justify-self-center' width={500} src={starter_logo} alt="mini_logo"/>
      </MediaQuery>
      <div className='startet_headers relative box-border col-span-2 flex flex-col justify-center items-center text-center md:text-left w-full'>
        <GradientHeader header_text='INNOVATION'/>
        <GradientHeader header_text='EFFECTIVENESS'/>
        <GradientHeader header_text='PASSION'/>
        <span className='starter_header_under text-[11px] md:text-[13px] lg:text[16px] xl:text-[20px] font-normal mt-8'>Innovative solutions for your website</span>
        <div className='absolute_header_underline absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] -z-50'>
          <Image priority={true}  src={headers_underline} alt='orange_line' className=' m-0' />
        </div>
      </div>
    </div>
  :
  null
}

export default LandingWithLogo
