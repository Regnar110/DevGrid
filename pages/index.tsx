import LandingPage from '@/components/LandingPage'
import LandingWithLogo from '@/components/LandingWithLogo/LandingWithLogo'
import Navigation from '@/components/Navigation/Navigation'


export default function Home() {
  return (
    <LandingPage>
      <Navigation/>
      <LandingWithLogo/>
    </LandingPage>
  )
}
