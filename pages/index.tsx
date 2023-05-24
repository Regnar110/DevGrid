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
import TechParticles from '@/components/Technologies/TechParticles'
import Technologies from '@/components/Technologies/Technologies'


export default function Home() {
  return (
    <LandingPage>
      <Navigation/>
      <LandingWithLogo/>
      <section className='about_section relative mt-6 flex flex-col justify-center items-center'>
      <div className='section_header w-full flex justify-center items-center text-[25px] md:text-[30px] lg:text-[40px] font-bold my-10'>
        <div className='header text-[#444548]'>
          OUR <span className='text-[#FF7400]'> SERVICES</span>
        </div>
      </div>
      <Services>
          <WebDevelopment/>
          <WebSolutions/>
          <DesignToCode/>
        </Services>
        <Technologies/>
        <ShowCase/>
        <ElonSubSection/>
        <TrumpSubSection/>
        <div className='section_header w-full flex justify-center items-center text-[25px] md:text-[30px] lg:text-[40px] font-bold my-10'>
          <div className='header'>
            OTHERS <span className='text-[#FF7400]'> ABOUT US</span>
          </div>
        </div>
        <Projects/>
      
        
        
    
        
      </section>
    </LandingPage>
  )
}
