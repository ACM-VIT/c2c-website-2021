import { useState, useEffect } from "react";

import c2clogo from "../../assets/c2clogo.svg";

/** Styles */
import './LandingSection.css';
const LandingSection = ()=>{
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
    return () => {}
  }, [])

  return (
    <article className="landsection">
      <section className={header}>
        <a href="https://acmvit.in" target="_blank" rel="noreferrer noopener">
          <img className="acmlogo" src={c2clogo} alt="C2C Logo" />
        </a>
        <div className="button">Register Now</div>
      </section>
      <section className="titlecontainer">
        <h1 className="title">
          We are the Hackathon everyone’s been waiting for
        </h1>
        <div className="subtitle">
          Experience the fifth edition of Code2Create now, right from the
          comfort of your home
        </div>
        <div className="buttoncontainer">
          <div className="button">Register Now</div>
        </div>
      </section>
    </article>
  );
}

export default LandingSection