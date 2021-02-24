/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useRef } from "react";
import { slide as Menu } from "react-burger-menu";
import RBN from "react-burger-nav";
import c2clogo from "../../assets/c2clogo.svg";
import register from "../../assets/register.svg";
import {Link} from 'react-router-dom'
/** Styles */
import './LandingSection.css';
import {
  Fade,
  Zoom,
  Flip,
  Rotate,
  Bounce,
  Slide,
  Roll,
  LightSpeed,
} from "react-reveal";
const LandingSection = ({scrollToFAQ, scrollToOrganizers, scrollToSponsors})=>{
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
        <a href="https://c2c.acmvit.in" className="text-white">
          <img className="acmlogo header-image" src={c2clogo} alt="C2C Logo" />
        </a>
        <div className="navigate">
          {/* <Menu right> */}
            <Link to={"/about"}>
                <div className="navigatetitle">About</div>
            </Link>
            <a onClick={() => scrollToSponsors()}>
              <div className="navigatetitle">Sponsors</div>
            </a>
            <a onClick={() => scrollToOrganizers()}>
              <div className="navigatetitle">Organisers</div>
            </a>

            <a onClick={() => scrollToFAQ()}>
              <div className="navigatetitle">FAQ</div>
            </a>
          {/* </Menu> */}
        </div>
        {/* <div
          style={{ transform: "scale(0.6)" }}
        >
          <div
            className="apply-button"
            data-hackathon-slug="acm-c2c"
            data-button-theme="dark-inverted"
            style={{ height: "18px", width: "110px", transform: "scale(0.4)" }}
          ></div>
        </div> */}
      </section>
      <section className="titlecontainer flex flex-row items-center justify-center">
        <h1 className="title">
          <span className="greentext">The Hackathon </span>everyone’s been{" "}
          <span className="greentext"> waiting for</span>
        </h1>

        <div className="subtitle">
          Experience the fifth edition of Code2Create now, right from the
          comfort of your home
        </div>

        {/* <a href="https://devfolio.co" target="_blank" rel="noreferrer noopener"> */}
        <div
          className="apply-button"
          data-hackathon-slug="acm-c2c"
          data-button-theme="dark-inverted"
          style={{ height: "18px", width: "110px" }}
        ></div>
      </section>
    </article>
  );
}

export default LandingSection