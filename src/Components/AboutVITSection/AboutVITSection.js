import "./AboutVITSection.css";
import { useEffect, useRef, useState } from "react";

import c2clogo from "../../assets/c2clogo.svg";
import register from "../../assets/register.svg";
import { Link } from "react-router-dom";

import gsap from 'gsap'

const AboutVITSection = ({scrollAbout}) => {
  const [offset, setOffset] = useState(0)
  const [header, setHeader] = useState('header')


  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
      setHeader(
        window.pageYOffset === 0
          ? 'header'
          : 'shadow'
      )
    }

    const tl = gsap.timeline();
    tl.from(".aboutHead",{duration:0.4,opacity:0,delay:0.2,stagger:0.2},0);
    tl.from(".aboutSection p",{duration:0.4,opacity:0,delay:0.3,stagger:0.2},+1);

    const ele = document.querySelectorAll(".aboutHead");
    for (let span of ele) {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let letters = span.innerHTML
        .split("")
        .map((ele) => `<span class="letter">${ele}</span>`)
        .reduce(reducer);
      span.innerHTML = letters;
    }

    const l = document.getElementsByClassName("letter");
    if(!l) return;
    for(let letter of l) {
      letter.addEventListener("mouseover",(ele)=>{
        ele.target.style = `-webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: var(--color-bg);
        -webkit-text-fill-color: var(--color-highlightStroke);
        pointer-events:none;`
        setTimeout(()=>{
          ele.target.style ="";
        },2200);
      })
    }
    return () => {}
  }, [])
  return (
     <div className="page">
       <section className={header}>
         <a href="https://c2c.acmvit.in" className="text-white" target="_blank" rel="noreferrer noopener">
           <img className="acmlogo header-image" src={c2clogo} alt="C2C Logo" />
         </a>
         <div className="navigate">
           <Link to={"/about"}>
             <a> 
                <div className="navigatetitle">About</div>
             </a> 
          </Link>
          <Link to={"/"}>
          <a>
            <div className="navigatetitle">Home</div>
          </a>
          </Link>
         </div>
          <img className="registerbutton" src={register} alt="Register Now" />
      </section>

          <div className="contentContainer">
                  <article className="aboutSection">
                        <section>
                          <div className="aboutHead">About VIT</div>
                          <p className="aboutContent">
                            Vellore Institute of Technology, Vellore is one of the most revered
                            and distinguished engineering institutions. It holds the rare
                            distinction of being one among the few colleges to impart
                            world-class education. Furthermore, encouragement towards
                            co-curricular activities helps in the overall development and
                            transforms students into responsible adults with a strong ethical
                            core.
                          </p>
                          <p className="aboutContent">
                            Vellore Institute of Technology was the birth-child of the tireless
                            and relentless perseverance of our respected Chancellor, Dr. G.
                            Viswanathan. The ultimate objective of this institution has been to
                            provide an environment that would help foster intellectual aptitude,
                            enhance human perception and create a society of extraordinary
                            professionals. It moulds individuals capable of thinking new,
                            out-of-the-box ideas and having the skills to implement them, to
                            help the entire society as a whole.
                          </p>
                        </section>

                        <section>
                    <div className="aboutHead">About C2C</div>
                    <p className="aboutContent">
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
                  </section>
                  </article>
                  {/* end of contentContainer */}
          </div>
        {/* end of page container */}
      </div> 
  );
};

export default AboutVITSection;