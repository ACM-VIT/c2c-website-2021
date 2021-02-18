import { useEffect } from "react";
import Tilt from "react-tilt"
/** Styles */
import "./VideoSection.css";
import c2c from "../../assets/c2caftermovie.mp4";
import "plyr-react/dist/plyr.css";
const VideoSection = () => {

  useEffect(() => {

  }, []);

  const videoSrc =  {
    type: 'video',
    sources: [
      {
        src:c2c,
        type: 'video/mp4',
        size: 720,
      },
    ],
  };


  return (
    <article className="videosection">
      <Tilt
        className="videoplayer"
        options={{ scale: 1, perspective: 1000, max: 15 }}
      >
        <div className="containerheader">
          <div className="flex flex-row">
            <div className="circle green"></div>
            <div className="circle yellow"></div>
            <div className="circle red"></div>
          </div>
          <div className="bar"></div>
          <div>
            <div className="circle"></div>
          </div>
        </div>
        <div className="videocontainer container">
          <video className="flex items-center justify-center" style={{borderRadius:"16px", overflow:"hidden" }} controls autostart="true" autoPlay loop={true} muted src={c2c} type="video/mp4" />
        </div>
      </Tilt>
    </article>
  );
};

export default VideoSection;
