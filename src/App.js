import { useRef } from "react";

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
  const scrollFAQ = useRef(null);
  const scrollOrganizers = useRef(null);
  const scrollAbout = useRef(null);
  const scrollSponsors = useRef(null);
  
    const scrollToFAQ = () => {
      if (scrollFAQ) {
        const headerOffset = 60;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = scrollFAQ.current.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - headerOffset;
        window.scrollTo({ behavior: "smooth", top: offsetPosition });
      }
    }
    const scrollToAbout = () => {
      if (scrollAbout.current) {
        console.log(scrollAbout);
        const headerOffset = 60;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = scrollAbout.current.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - headerOffset;
        window.scrollTo({ behavior: "smooth", top: offsetPosition });
      }
    }
    const scrollToSponsors = () => {
      if (scrollSponsors) {
        const headerOffset = 60;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = scrollSponsors.current.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - headerOffset;
        window.scrollTo({ behavior: "smooth", top: offsetPosition });
      }
    }
    const scrollToOrganizers = () => {
      if (scrollOrganizers) {
        const headerOffset = 60;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = scrollOrganizers.current.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - headerOffset;
        window.scrollTo({ behavior: "smooth", top: offsetPosition });
      }
    };
  return (
    <div className="landing">
      <LandingSection
        scrollToAbout={scrollToAbout}
        scrollToFAQ={scrollToFAQ}
        scrollToOrganizers={scrollToOrganizers}
        scrollToSponsors={scrollToSponsors}
      />
      <MarqueeSection />
      <AboutVITSection scrollAbout={scrollAbout} />
      <CarouselSection />
      <SponsorsSection scrollSponsors={scrollSponsors} />
      <VideoSection />
      <FacultySection scrollOrganizers={scrollOrganizers} />
      <OrganisersSection />
      <FaqSection scrollFAQ={scrollFAQ} />
      <SecondMarqueeSection />
      <FooterSection />
    </div>
  );
}

export default App;
