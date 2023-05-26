import React from 'react'

interface Props {
    tech_text:string
}
const ProjectTechIcon = ({tech_text}:Props) => {
  return <div className='tech text-white text-[11px] bg-[#444548] px-2 py-1 rounded-sm w-fit'>{tech_text}</div>
}

export default ProjectTechIcon
