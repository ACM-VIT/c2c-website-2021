import "./AboutVITSection.css";
import { useEffect, useRef, useState } from "react";

const AboutVITSection = ({scrollAbout}) => {

  return (
    <>
      <div id="aboutLink"></div>
      <article className="aboutSection" ref={scrollAbout}>
        <div>
          <div className="aboutHead">About VIT</div>
          <p className="aboutContent lg:w-7/12 m-auto">
            Vellore Institute of Technology, Vellore is one of the most revered
            and distinguished engineering institutions. It holds the rare
            distinction of being one among the few colleges to impart
            world-class education. Furthermore, encouragement towards
            co-curricular activities helps in the overall development and
            transforms students into responsible adults with a strong ethical
            core.
          </p>
          <p className="aboutContent lg:w-7/12 m-auto">
            Vellore Institute of Technology was the birth-child of the tireless
            and relentless perseverance of our respected Chancellor, Dr. G.
            Viswanathan. The ultimate objective of this institution has been to
            provide an environment that would help foster intellectual aptitude,
            enhance human perception and create a society of extraordinary
            professionals. It moulds individuals capable of thinking new,
            out-of-the-box ideas and having the skills to implement them, to
            help the entire society as a whole.
          </p>
        </div>

        <div>
          <div className="aboutHead">About C2C</div>
          <p className="aboutContent lg:w-7/12 m-auto">
            Code2Create is ACM-VIT's flagship event, and it is among the biggest
            hackathons hosted in VIT.
            <br /> Code2Create is a platform where designers and developers
            alike collaborate to make something extraordinary. It challenges
            young minds to think on their feet and work efficiently.
            <br />
            The previous editions of Code2Create have welcomed thousands of
            participants from across the country. The 36-hour long hackathon is
            filled with intense brainstorming, creating and testing. Industry
            experts serve as guest judges for the same and host engaging spaces
            for the participants.
          </p>
        </div>
      </article>
    </>
  );
};

export default AboutVITSection;