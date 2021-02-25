import { useEffect } from "react";
import Tilt from "react-tilt"
/** Styles */
import "./VideoSection.css";
import c2c from "../../assets/c2caftermovie.mp4";
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
              textDecoration: "none",
              border:"none",
              outline: "none"

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
        <div id="orgLink"></div>
        <script src="https://player.vimeo.com/api/player.js" />
      </article>
    </Tilt>
  );
};

export default VideoSection;
