import { useRef, Component } from "react";

import './App.css';
import LandingSection from './Components/LandingSection/LandingSection';
import CarouselSection from './Components/CarouselSection/CarouselSection';
import SponsorsSection from './Components/SponsorsSection/SponsorsSection';
import MarqueeSection from './Components/MarqueeSection/MarqueeSection';
import VideoSection from './Components/VideoSection/VideoSection';
import SecondMarqueeSection from './Components/2MarqueeSection/2MarqueeSection'
import OrganisersSection from './Components/OrganisersSection/OrganisersSection';
// import FacultySection from './Components/FacultySection/FacultySection';
import FooterSection from './Components/FooterSection/FooterSection';
import FaqSection from './Components/FaqSection/FaqSection'
import DownloadAppSection from "./Components/DownloadAppSection";
function App() {
  const scrollFAQ = useRef(null);
  const scrollOrganizers = useRef(null);
  // const scrollAbout = useRef(null);
  const scrollSponsors = useRef(null);
  const scrollFooter = useRef(null);
  
    const scrollToFAQ = () => {
      if (scrollFAQ) {
        const headerOffset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = scrollFAQ.current.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - headerOffset;
        window.scrollTo({ behavior: "smooth", top: offsetPosition });
      }
    }
    const scrollToSponsors = () => {
      if (scrollSponsors) {
        const headerOffset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = scrollSponsors.current.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - headerOffset;
        window.scrollTo({ behavior: "smooth", top: offsetPosition });
      }
    }
    const scrollToOrganizers = () => {
      if (scrollOrganizers) {
        const headerOffset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = scrollOrganizers.current.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - headerOffset;
        window.scrollTo({ behavior: "smooth", top: offsetPosition });
      }
    };
    const scrollToFooter = () => {
      if (scrollFooter) {
        const headerOffset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elemRect = scrollFooter.current.getBoundingClientRect().top;
        const elemPosition = elemRect - bodyRect;
        const offsetPosition = elemPosition - headerOffset;
        window.scrollTo({ behavior: "smooth", top: offsetPosition });
      }
    };
  return (
    <div className="landing">
      <LandingSection
        scrollToFAQ={scrollToFAQ}
        scrollToOrganizers={scrollToOrganizers}
        scrollToSponsors={scrollToSponsors}
      />
      <MarqueeSection />
      <DownloadAppSection />
      <CarouselSection />
      <SponsorsSection scrollSponsors={scrollSponsors} />
      <VideoSection />
      <OrganisersSection scrollOrganizers={scrollOrganizers} />
      <FaqSection scrollToFooter={scrollToFooter} scrollFAQ={scrollFAQ} />
      <SecondMarqueeSection />
      <FooterSection scrollFooter={scrollFooter} />
    </div>
  );
}

export default App;
