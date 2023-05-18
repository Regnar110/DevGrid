import ElonSubSection from '@/components/AboutSection/ElonSubSection/ElonSubSection'
import ShowCase from '@/components/AboutSection/ShowCase/ShowCase'
import TrumpSubSection from '@/components/AboutSection/TrumpSubSection/TrumpSubSection'
import LandingPage from '@/components/LandingPage'
import LandingWithLogo from '@/components/LandingWithLogo/LandingWithLogo'
import Navigation from '@/components/Navigation/Navigation'
import WebDevelopment from '@/components/Services/WebDevelopment'
import TechParticles from '@/components/Technologies/TechParticles'
import Technologies from '@/components/Technologies/Technologies'


export default function Home() {
  return (
    <LandingPage>
      <Navigation/>
      <LandingWithLogo/>
      <section className='about_section relative w-full mt-6 flex flex-col justify-center items-center md:items-start'>
      <div className='sub_section_header_wrapper flex justify-start items-center pl-5 w-full'>
        <div className='w-[3px] h-[60px] bg-[#FF7400]'></div>
        <span className='sub_section_header font-roboto md:text-[45px] text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-[#444548] font-bold pl-1'>ABOUT US</span>        
      </div>
      
        <TrumpSubSection/>
        <ShowCase/>
       
        <div className='sub_section_header_wrapper flex justify-start items-center pl-5 w-full'>
          <div className='w-[3px] h-[60px] bg-[#FF7400]'></div>
          <span className='sub_section_header font-roboto md:text-[45px] text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-[#444548] font-bold pl-1'>TECHNOLOGIES USED</span>        
        </div>
        <Technologies/>
        <ElonSubSection/>
        <WebDevelopment/>
      </section>
    </LandingPage>
  )
}
