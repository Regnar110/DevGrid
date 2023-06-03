import React from 'react'
import { projects } from '@/utils/ProjectsArray'
import SingleProject from './SingleProject'


const Projects = () => {
    return (
        <section className='projects_section grid grid-cols-1 xl:grid-cols-2 max-w-[1536px] mb-28  gap-x-4 p-8 gap-y-10'>
            {
                projects.map(el => (
                    <SingleProject project_image={el.project_image} project_tittle={el.project_tittle} project_subtittle={el.project_subtittle} project_description={el.project_description} tech_array={el.tech_array} link={el.link} github_link={el.github_link}/>              
                ))
            }
        </section>
    )
}

export default Projects
