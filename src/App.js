import './App.css';
import LandingSection from './Components/LandingSection/LandingSection';
import SponsorsSection from './Components/SponsorsSection/SponsorsSection';
import MarqueeSection from './Components/MarqueeSection/MarqueeSection';
import VideoSection from './Components/VideoSection/VideoSection';

function App() {
  return (
    <div className="landing">
      <LandingSection/>
      
      <MarqueeSection />
    <SponsorsSection/>
      <VideoSection />
    </div>
  );
}

export default App;
