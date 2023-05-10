import React from 'react'
import Image from 'next/image'
import starter_logo from '../../public/landing/logo_big.svg'
const LandingWithLogo = () => {
  return (
    <div className='landing_starter'>
      <Image width={1200} src={starter_logo} alt="big_logo"/> 
    </div>
  )
}

export default LandingWithLogo
