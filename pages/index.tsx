import ElonSubSection from '@/components/AboutSection/ElonSubSection/ElonSubSection'
import ShowCase from '@/components/AboutSection/ShowCase/ShowCase'
import TrumpSubSection from '@/components/AboutSection/TrumpSubSection/TrumpSubSection'
import LandingPage from '@/components/LandingPage'
import LandingWithLogo from '@/components/LandingWithLogo/LandingWithLogo'
import Navigation from '@/components/Navigation/Navigation'


export default function Home() {
  return (
    <LandingPage>
      <Navigation/>
      <LandingWithLogo/>
      <section className='about_section relative w-full mt-6 flex flex-col justify-center items-center md:items-start'>
      <span className='sub_section_header font-roboto md:text-[45px] text-[35px] lg:text-[65px] xl:text-[70px] 2xl:text-[80px] font-outline-2 text-[#00000015] font-extrabold pl-5'>ABOUT US</span>
        <TrumpSubSection/>
        <ShowCase/>
        <ElonSubSection/>
      </section>
    </LandingPage>
  )
}
