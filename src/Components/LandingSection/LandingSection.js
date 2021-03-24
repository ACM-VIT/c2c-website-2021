
import { useState, useEffect, useRef } from "react";
import c2clogo from "../../assets/c2clogo.svg";
import register from "../../assets/register.svg";
import discord from "../../assets/discord.svg";
import {Link} from 'react-router-dom';
import gsap from 'gsap'
/** Styles */
import './LandingSection.css';

const Menu = ({hActive,setHActive,scrollToFAQ, scrollToOrganizers, scrollToSponsors,menuTop}) => {
  const menuRef = useRef(null);

  useEffect(() => {
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
          <Link className="navigatetitle" to={"/about"}>
            <div>About</div>
          </Link>
          <a className="navigatetitle" onClick={() => scrollToSponsors()}>
            <div>Sponsors</div>
          </a>
          <a className="navigatetitle" onClick={() => scrollToOrganizers()}>
            <div>Organisers</div>
          </a>

          <a className="navigatetitle" onClick={() => scrollToFAQ()}>
            <div>FAQ</div>
          </a>
        </div>
        <div className="hamburger" onClick={() => setHActive(!hActive)}>
          <div className="hamburgerLine"></div>
          <div className="hamburgerLine"></div>
          <div className="hamburgerLine"></div>
        </div>
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
          <a
            href="https://code2create.hackerearth.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img className="registerbutton" src={register} alt="Register Now" />
          </a>
          <a
            href="https://discord.com/invite/TqmcB7Z9J6"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="registerbutton"
              src={discord}
              alt="Join our Discord"
            />
          </a>
        </div>
      </section>
    </article>
  );
}

export default LandingSection