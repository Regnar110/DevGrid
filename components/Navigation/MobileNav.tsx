import React from 'react'
import Image, { StaticImageData } from "next/image"
import { slide as Menu } from 'react-burger-menu'

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
interface Props {
    fiver_icon:StaticImageData;
    github_icon:StaticImageData;
    logo_mini:StaticImageData;
}

const MobileNav = ({fiver_icon, github_icon, logo_mini}:Props) => {
  return (
    <div className='relative'>
        <Menu width={280} customBurgerIcon={<MenuOpenIcon/>} customCrossIcon={<CloseIcon/>} noOverlay burgerButtonClassName='w-[35px] ml-[20px]' crossClassName='w-[35px]' menuClassName='bg-white relative top-[-60px] flex flex-col justify-center items-center' >
        <div className="mobile_menu_content relative top-[35px]">
            <div className='nav_mini_logo relative flex justify-center my-6'>
            <Image width={200} src={logo_mini} alt='devgrid_nav_logo'/>
            </div>
            <div className='mobile_nav_links flex flex-col font-roboto font-normal text-[22px] gap-y-8 justify-center items-center'>
            <span className='nav_link'>HOME</span>
            <span className='nav_link'>ABOUT</span>
            <span className='nav_link'>SERVICES</span>
            <span className='nav_link'>CONTACT</span>
            </div>
            <div className='mobile_nav_social_icons flex items-center justify-center gap-6 mt-10 text-[19px]'>
            <div className='icon relative flex flex-col justify-center items-center'>
                <Image width={50} src={fiver_icon} alt="fiver_icon"/>
                <span>Fiver</span>
            </div>
            <div className='icon relative flex flex-col justify-center items-center'>
                <Image width={50} src={github_icon} alt="fiver_icon"/>
                <span>Github</span>
            </div>
            </div>
        </div>
        </Menu>
    </div>
  )
}

export default MobileNav
