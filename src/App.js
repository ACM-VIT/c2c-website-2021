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
      <VideoSection />
    <SponsorsSection/>
    </div>
  );
}

export default App;
