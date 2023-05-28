import ElonSubSection from '@/components/AboutSection/ElonSubSection/ElonSubSection'
import ShowCase from '@/components/AboutSection/ShowCase/ShowCase'
import TrumpSubSection from '@/components/AboutSection/TrumpSubSection/TrumpSubSection'
import LandingPage from '@/components/LandingPage'
import LandingWithLogo from '@/components/LandingWithLogo/LandingWithLogo'
import Navigation from '@/components/Navigation/Navigation'
import Projects from '@/components/Projects/Projects'
import DesignToCode from '@/components/Services/DesignToCode'
import Services from '@/components/Services/Services'
import WebDevelopment from '@/components/Services/WebDevelopment'
import WebSolutions from '@/components/Services/WebSolutions'

import Technologies from '@/components/Technologies/Technologies'


export default function Home() {
  return (
    <LandingPage>
      <Navigation/>
      <LandingWithLogo/>
      <section className='about_section relative mt-6 flex flex-col justify-center items-center max-w-[1536px] rounded-md  bg-white mx-5'>
      <div className='section_header w-full flex justify-center items-center text-[20px] md:text-[25px] lg:text-[30px] font-bold my-10'>
        <div className='header text-[#444548]'>
          Services
        </div>
      </div>
      <Services>
          <WebDevelopment/>
          <WebSolutions/>
          <DesignToCode/>
        </Services>
        {/* <Technologies/> */}
        <ShowCase/>
        <ElonSubSection/>
        <div className='section_header w-full flex justify-center items-center text-[20px] md:text-[25px] lg:text-[30px] font-bold my-10'>
          <div className='header text-[#444548]'>
            Projects
          </div>
        </div>
        <Projects/>
      </section>
    </LandingPage>
  )
}
