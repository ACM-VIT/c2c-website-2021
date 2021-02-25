/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect, useRef } from "react";
import RBN from "react-burger-nav";
import c2clogo from "../../assets/c2clogo.svg";
import register from "../../assets/register.svg";
import {Link} from 'react-router-dom';
import gsap from 'gsap'
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
import ApplyButton from "../applyButton";

const Menu = ({hActive,setHActive,scrollToFAQ, scrollToOrganizers, scrollToSponsors,menuTop}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    console.log(menuTop)
    menuRef.current.style = `top:${menuTop}px;position:fixed;left:0`;
    gsap.to(".menu_items",{
      opacity:1,
      stagger:0.1,
      duration:0.2,
      delay:0.1
    })
    return () => {
      return
    }
  }, [])

  return (
      <div className="menu" ref={menuRef}>
          <div className="menu_nav">
                    <div className="menu_items" onClick={()=> setHActive(!hActive)}>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </div>
                    <div className="menu_items">
                        <a onClick={() => {
                          scrollToSponsors();
                          setHActive(!hActive);
                        }}>
                        Sponsors
                        </a>
                    </div>
                    <div className="menu_items">
                    <a onClick={() => {
                          scrollToOrganizers();
                          setHActive(!hActive);
                        }}>
                    Organisers
                    </a>
                    </div>
                    <div className="menu_items">
                    <a onClick={() => {
                          scrollToFAQ();
                          setHActive(!hActive);
                        }}>
                          FAQ
                        </a>
                    </div>
          </div>
    </div>
  );

}

const LandingSection = ({scrollToFAQ, scrollToOrganizers, scrollToSponsors})=>{
  const [offset, setOffset] = useState(0)
  const [header, setHeader] = useState('header');
  const [hActive,setHActive] = useState(false);
  const [menuTop,setMenuTop] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
      setHeader(
        window.pageYOffset === 0
          ? 'header'
          : 'header'
      )
    }
    if(headerRef)
      setMenuTop(headerRef.current.getBoundingClientRect().bottom);
    return () => {}
  }, [])


  return (
    <article className="landsection">
      <section ref={headerRef} className={header}>
        <a href="https://c2c.acmvit.in" className="text-white">
          <img className="acmlogo header-image" src={c2clogo} alt="C2C Logo" />
        </a>
        <div className="navigate">
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
        </div>
        <div className="hamburger" onClick={() => setHActive(!hActive)}>
          <div className="hamburgerLine"></div>
          <div className="hamburgerLine"></div>
          <div className="hamburgerLine"></div>
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
      {hActive && (
        <Menu
          menuTop={menuTop}
          hActive={hActive}
          setHActive={setHActive}
          scrollToFAQ={scrollToFAQ}
          scrollToOrganizers={scrollToOrganizers}
          scrollToSponsors={scrollToSponsors}
        />
      )}
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
        <div className="header_buttons">
          <ApplyButton />
        </div>
      </section>
    </article>
  );
}

export default LandingSection