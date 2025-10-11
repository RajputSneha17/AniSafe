import LandingPage from '../Components/Home/LandingPage'
import FeaturesList from '../Components/Home/FeaturesList'
import FeaturesSection from '../Components/Home/FeaturesSection'
import ProfileSection from '../Layout/ProfileSection'
import AboutSection from '../Components/Home/AboutSection'

const Home = () => {
  return (
    <>
      <LandingPage/>
      <AboutSection/>
      <FeaturesList/>
      <FeaturesSection/>
      <ProfileSection/>
    </>
  )
}

export default Home
