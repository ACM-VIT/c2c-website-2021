import './App.css';
import LandingSection from './Components/LandingSection/LandingSection';
import CarouselSection from './Components/CarouselSection/CarouselSection';
import SponsorsSection from './Components/SponsorsSection/SponsorsSection';
import MarqueeSection from './Components/MarqueeSection/MarqueeSection';
import VideoSection from './Components/VideoSection/VideoSection';
import SecondMarqueeSection from './Components/2MarqueeSection/2MarqueeSection'
import OrganisersSection from './Components/OrganisersSection/OrganisersSection';
import FacultySection from './Components/FacultySection/FacultySection';
import FooterSection from './Components/FooterSection/FooterSection';
import AboutVITSection from './Components/AboutVITSection/AboutVITSection'
import FaqSection from './Components/FaqSection/FaqSection'

function App() {
  return (
    <div className="landing">
      <LandingSection/>
      <MarqueeSection />
      <AboutVITSection />
      <CarouselSection/>
      <SponsorsSection/>
      <FacultySection/>
      <VideoSection />
      <FaqSection />
      <OrganisersSection/>
      <SecondMarqueeSection /> 
      <FooterSection />
    </div>
  );
}

export default App;
