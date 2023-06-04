import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
const ContactMe = () => {
  return (
    <div className='contact_me w-full flex justify-around p-4 '>
      <div className='mail flex gap-5 justify-center items-center text-[25px]'>
        <MailIcon fontSize='large' className='text-[#444548]'/>
        <span>mateuszwrycza3@gmail.com</span>
      </div>
      <div className='mail flex gap-5 justify-center items-center text-[25px]'>
        <PermPhoneMsgIcon fontSize='large' className='text-[#444548]'/>
        <span>784 452 569</span>
      </div>
    </div>
  )
}

export default ContactMe
