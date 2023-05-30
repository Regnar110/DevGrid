import ElonSubSection from '@/components/AboutSection/ElonSubSection/ElonSubSection'
import ShowCase from '@/components/AboutSection/ShowCase/ShowCase'
import TrumpSubSection from '@/components/AboutSection/TrumpSubSection/TrumpSubSection'
import Benefits from '@/components/Benefits/Benefits'
import HeroHeader from '@/components/HeroHeader/HeroHeader'
import LandingPage from '@/components/LandingPage'
import LandingWithLogo from '@/components/LandingWithLogo/LandingWithLogo'
import Navigation from '@/components/Navigation/Navigation'
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
      <Navigation/>
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
          {/* <Technologies/> */}
          <HeroHeader header_text='Tech-Stack'/>
          <TechStackSwiper/> 
          <Benefits/>
          <ShowCase/>
          <ElonSubSection/>
          <HeroHeader header_text='Projects'/>
          <Projects/>
      </SectionWrapper>

    </LandingPage>
  )
}
