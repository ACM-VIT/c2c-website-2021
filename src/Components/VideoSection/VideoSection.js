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
    <Tilt options={{ scale: 1, perspective: 1000, max: 15 }}>
      <article className="window__frame__container">
        {/* <Tilt
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
      </Tilt> */}
        {/* <Player /> */}
        <div
          className="window__frame__image"
          style={{ padding: "56.25% 0 0 0", position: "relative" }}
        >
          <video
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              boxSizing: "border-box",
              textDecoration: "none",
            }}
            className="video-border"
            controls
            autostart="true"
            autoPlay
            loop={true}
            muted
            src={c2c}
            type="video/mp4"
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js" />
      </article>
    </Tilt>
  );
};

export default VideoSection;
