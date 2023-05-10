import React from 'react'
import Image, { StaticImageData } from "next/image"
interface Props {
    fiver_icon:StaticImageData;
    github_icon:StaticImageData;
}
const DesktopNav = ({fiver_icon, github_icon}:Props) => {
  return (
    <>
    
        <div className={`navbar_links font-roboto font-normal text-[17px] lg:text-[20px] overflow-hidden justify-self-end col-span-2 flex gap-6`}>
          <span className='nav_link cursor-pointer'>HOME</span>
          <span className='nav_link cursor-pointer'>ABOUT</span>
          <span className='nav_link cursor-pointer'>SERVICES</span>
          <span className='nav_link cursor-pointer'>CONTACT</span>
        </div>
        <div className='nav_social_icons flex justify-self-center text-[15px] gap-4'>
          <div className='icon relative flex flex-col justify-center items-center cursor-pointer'>
            <Image width={30} src={fiver_icon} alt="fiver_icon"/>
            <span>Fiver</span>
          </div>
          <div className='icon relative flex flex-col justify-center items-center cursor-pointer'>
            <Image width={30} src={github_icon} alt="fiver_icon"/>
            <span>Github</span>
          </div>
        </div>
    </>
  )
}

export default DesktopNav
