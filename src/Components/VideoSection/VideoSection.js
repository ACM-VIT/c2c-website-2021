/*import { useState, useEffect } from "react";
import Tilt from "react-tilt"
/** Styles */
/*import "./VideoSection.css";
import ReactPlayer from "react-player";
import c2c from "../../assets/c2caftermovie.mp4";
import Plyr from "react-plyr";
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
          {/* <Plyr
            source={videoSrc}
            options={{
              controls: [
                "play",
              ],
            }}
          /> *//*}
          {/* <Plyr
          className="youtubeplayer"
            type="vimeo" // or "vimeo"
            videoId="512983481"
            autoplay
            muted
            style={{display:"flex"}}
          /> *//*}
          {/* <ReactPlayer
            style={{borderRadius:"16px"}}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            playing
          /> *//*}
          <video className="flex" style={{borderRadius:"16px", overflow:"hidden" }} controls autostart="true" autoPlay loop="true" muted src={c2c} type="video/mp4" />

          {/* <video width="100%" controls autoPlay muted playsInline>
            <source
              src={c2c}
              type="video/mp4"
            />
          </video> *//*}
        /*</div>
      </Tilt>
    </article>
  );
};

export default VideoSection;*/
