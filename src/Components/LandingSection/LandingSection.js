/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useRef } from "react";

import c2clogo from "../../assets/c2clogo.svg";
import register from "../../assets/register.svg";
/** Styles */
import './LandingSection.css';
const LandingSection = ({scrollToAbout, scrollToFAQ, scrollToOrganizers, scrollToSponsors})=>{
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
        <a
          href="https://c2c.acmvit.in"
          className="text-white"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="acmlogo header-image" src={c2clogo} alt="C2C Logo" />
        </a>
        <div className="navigate">
          <a onClick={() => scrollToAbout()}>
            <div className="navigatetitle">About</div>
          </a>
          <a onClick={() => scrollToSponsors()}>
            <div className="navigatetitle">Sponsors</div>
          </a>
          <a onClick={() => scrollToOrganizers()}>
            <div className="navigatetitle">Organisers</div>
          </a>

          <a onClick={() => scrollToFAQ()}>
            <div className="navigatetitle">FAQ</div>
          </a>
        </div>
        <a
          href="https://devfolio.co"
          className="text-white disabled"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="registerbutton" src={register} alt="Register Now" />
        </a>
      </section>
      <section className="titlecontainer">
        <h1 className="title">
          <span className="greentext">The Hackathon </span>everyone’s been{" "}
          <span className="greentext"> waiting for</span>
        </h1>
        <div className="subtitle">
          Experience the fifth edition of Code2Create now, right from the
          comfort of your home
        </div>
        {/* <a href="https://devfolio.co" target="_blank" rel="noreferrer noopener"> */}
        <a
          className="disabled"
          href="#"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="registerbutton" src={register} alt="Register Now" />
        </a>
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
        <div
          className="apply-button"
          data-hackathon-slug="YOUR-HACKATHON-SLUG"
          data-button-theme="light"
          style={{"height": "44px", "width": "312px"}}
        ></div>
      </section>
    </article>
  );
}

export default LandingSection