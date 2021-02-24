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

  useEffect(()=>{
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    if(!hamburger)
      return ;
    hamburger.addEventListener("click",(e)=>{
       console.log(menu.style.display,menu.style.opacity)
        menu.style.display = menu.style.display === "block"?"none":"block";
        menu.style.opacity = menu.style.opacity === "1" ? "0":"1";
    })


    
    const menu_items = document.querySelectorAll(".menu_items");
    for(let btn of menu_items) {
      btn.addEventListener("click",(e)=>{
        menu.style.display = menu.style.display === "block"?"none":"block";
        menu.style.opacity = menu.style.opacity === "0" ? "1":"0";
      })
    }
  });


  return (
    <article className="landsection">
      <section className="headerNav">
          <section className={header}>
                <a href="https://c2c.acmvit.in" className="text-white">
                  <img className="acmlogo header-image" src={c2clogo} alt="C2C Logo" />
                </a>
                  <div className="navigate">
                      <Link to={"/about"}>
                        <a>
                          <div className="navigatetitle">About</div>
                        </a>
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
                 <div className="hamburger">
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
           <section className="menu">
                <div className="menu_nav">
                        <Link to={"/about"}>
                          <a>
                            <div className="menu_items">About</div>
                          </a>
                        </Link>
                        <a onClick={() => scrollToSponsors()}>
                          <div className="menu_items">Sponsors</div>
                        </a>
                        <a onClick={() => scrollToOrganizers()}>
                          <div className="menu_items">Organisers</div>
                        </a>

                        <a onClick={() => scrollToFAQ()}>
                          <div className="menu_items">FAQ</div>
                        </a>
                  </div>
           </section>
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