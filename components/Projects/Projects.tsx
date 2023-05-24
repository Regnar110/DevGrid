import React from 'react'
import Image from 'next/image'
import apart from '../../public/projects/apart.png'
const Projects = () => {
    return (
        <section className='projects_section flex flex-col max-w-[2000px] mb-28'>
            <div className='single_project relative overflow-hidden max-h-[100px] max-w-[1500px]'>
                <div className='project_image_container relative'>
                    <Image className=' scale-150' src={apart} alt='apart_project'/>                    
                </div>
                <div className='absolute top-0 w-full h-full project_absolute_wrapper bg-[#000000d0]'>
                    <div className='absolute left-1/2 top-7 transform -translate-x-1/2 translate-y-7 text-white'>X</div>
                    <h1 className='project_header p-8 text-[30px] font-bold text-[#FFF]'> Apart shop</h1>
                </div>
            </div>
        </section>
    )
}

export default Projects
