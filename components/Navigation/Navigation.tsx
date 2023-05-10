import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'
import Image from 'next/image'

import logo_mini from '../../public/NavigationBar/logo_mini.svg'
import fiver_icon from '../../public/NavigationBar/fiver.svg'
import github_icon from '../../public/NavigationBar/github.svg'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navigation = () => {
  const [isMounted, setIsMounted] = useState<boolean>()
  const [isNavActive, setIsNavActive] = useState<boolean>()

  useEffect(() => {
    setIsMounted(true)
    window.addEventListener("scroll", () => window.scrollY >= 100 ? setIsNavActive(true): setIsNavActive(false))
  },[])
  return isMounted ? 
    <div className={`site_desktop_navbar fixed w-full flex justify-end flex-row-reverse md:grid grid-cols-2  md:grid-cols-5 items-center  ${isNavActive ? "h-[60px] border-[1px] shadow-xl bg-[#fff]": "h-[0px]"} overflow-hidden transition-all duration-200 `}>
      <div className='nav_mini_logo relative justify-self-start col-span-1 md:col-span-2 ml-4'>
        <Image width={200} src={logo_mini} alt='devgrid_nav_logo'/>
      </div>
      <MediaQuery minWidth={768}>
        <DesktopNav fiver_icon={fiver_icon} github_icon={github_icon}/>
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <MobileNav fiver_icon={fiver_icon} github_icon={github_icon} logo_mini={logo_mini}/>
      </MediaQuery>
    </div>
  : 
  null
}

export default Navigation
