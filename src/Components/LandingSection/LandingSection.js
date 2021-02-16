import c2clogo from "../../assets/c2clogo.svg";
import rightArrow from "../../assets/right_arrow.png";
/** Styles */
import './LandingSection.css';
const LandingSection = ()=>{

  return (
    <article className="landsection">
      <section className="header">
        <a href="https://acmvit.in" target="_blank" rel="noreferrer noopener">
          <img className="acmLogo" src={c2clogo} alt="C2C Logo" />
          <span>Code2Create</span>
        </a>
        <nav>
          <span>About</span>
          <span>Organisers</span>
          <span>Sponsers</span>
        </nav>
        <div className="registerBtn">
        Register Now
        <img className="regBtn_rightArrow" src={rightArrow} alt="right arrow"/>
        </div>
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
          <div className="registerBtn">Register Now</div>
        </div>
      </section>
    </article>
  );
}

export default LandingSection
