import React from 'react'
import ChatSVGPart from './ChatSVGPart';
import BushesOneSVGPart from './BushesOneSVGPart';
import HearthSVGPart from './HearthSVGPart';
import SpeakerSVGPart from './SpeakerSVGPart';
import GearsOneSVGPart from './GearsOneSVGPart';
import GearsTwoSVGPart from './GearsTwoSVGPart';
import OtherGearsSVGPart from './OtherGearsSVGPart';
import PhoneSVGPart from './PhoneSVGPart';
const WebSolutionsSVG = () => {
    
  return (
<svg width="1000" height="950" viewBox="0 0 1000 950" fill="none" className='w-[280px] md:w-[320px] lg:w-[380px] xl:w-[450px] 2xl:w-[500px] h-[400px]'
    xmlns="http://www.w3.org/2000/svg">
    <PhoneSVGPart/>
    <GearsOneSVGPart/>
    <GearsTwoSVGPart/>
    <OtherGearsSVGPart/>
    <ChatSVGPart />
    <HearthSVGPart/>
    <SpeakerSVGPart/>
    

</svg>

  )
}

export default WebSolutionsSVG
