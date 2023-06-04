import ElonSubSection from '@/components/AboutSection/ElonSubSection/ElonSubSection'
import ShowCase from '@/components/AboutSection/ShowCase/ShowCase'
import Benefits from '@/components/Benefits/Benefits'
import ContactMe from '@/components/Contact/ContactMe'
import HeroHeader from '@/components/HeroHeader/HeroHeader'
import LandingPage from '@/components/LandingPage'
import LandingWithLogo from '@/components/LandingWithLogo/LandingWithLogo'
import Projects from '@/components/Projects/Projects'
import SectionWrapper from '@/components/SectionWrapper/SectionWrapper'
import DesignToCode from '@/components/Services/DesignToCode'
import Services from '@/components/Services/Services'
import WebDevelopment from '@/components/Services/WebDevelopment'
import WebSolutions from '@/components/Services/WebSolutions'
import TechStackSwiper from '@/components/TechStackSwiper/TechStackSwiper'
import { Parallax } from 'react-scroll-parallax'
export default function Home() {
  return (
    <LandingPage>
      <Parallax speed={-50}>
        <LandingWithLogo/>
      </Parallax>
      <SectionWrapper id='landing_section'>
        <HeroHeader header_text='What I do'/>
        <Services>
            <WebDevelopment/>
            <WebSolutions/>
            <DesignToCode/>
          </Services>
          <HeroHeader header_text='Tech-Stack'/>
          <TechStackSwiper/> 
          <Benefits/>
          <ShowCase/>
          <ElonSubSection/>
          <HeroHeader header_text='Projects'/>
          <Projects/>
          <HeroHeader header_text='Contact Me'/>
          <ContactMe/>
      </SectionWrapper>
    <footer className='p-3'>
      <div className='text-[#cacaca] text-[13px]'>Created by <span className='font-bold text-white'>Mateusz Wrycza</span> / @Regnar110 </div>
    </footer>
    </LandingPage>
  )
}
