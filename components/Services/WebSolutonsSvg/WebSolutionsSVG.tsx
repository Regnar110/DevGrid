import React from 'react'
import ChatSVGPart from './ChatSVGPart';
import HearthSVGPart from './HearthSVGPart';
import SpeakerSVGPart from './SpeakerSVGPart';
import GearsOneSVGPart from './GearsOneSVGPart';
import GearsTwoSVGPart from './GearsTwoSVGPart';
import OtherGearsSVGPart from './OtherGearsSVGPart';
import PhoneSVGPart from './PhoneSVGPart';
const WebSolutionsSVG = () => {
    
  return (
<svg width="1000" height="950" viewBox="0 0 1000 950" fill="none" className='w-[250px] md:w-[320px] lg:w-[260px] xl:w-[280px] 2xl:w-[300px] h-fit lg:h-[300px]'
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
