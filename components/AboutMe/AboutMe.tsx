import React, {useEffect} from 'react'
import DeveloperSvg from './DeveloperSvg'
import Image from 'next/image'
import { animateSVG } from '../../utils/AnimateDeveloperSVG'
const AboutMe = () => {

  useEffect(() => {
    animateSVG()
    const animatedElement = document.getElementById('efQ2oiR3sqF1')
    console.log(animatedElement)
  
  },[])
  return (
    <div className='about_me bg-black'>
      <DeveloperSvg/>
    </div>

  )
}

export default AboutMe
