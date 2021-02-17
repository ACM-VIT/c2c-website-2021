import './App.css';
import LandingSection from './Components/LandingSection/LandingSection';
import MarqueeSection from './Components/MarqueeSection/MarqueeSection';
import VideoSection from './Components/VideoSection/VideoSection';

function App() {
  return (
    <div className="landing">
      <LandingSection />
      <MarqueeSection />
      <VideoSection />
    </div>
  );
}

export default App;
