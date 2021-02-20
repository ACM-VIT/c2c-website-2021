import insta from "../../assets/footer/instagram.svg";
import fb from "../../assets/footer/facebook.svg";
import linkedin from "../../assets/footer/linkedin.svg";
import medium from "../../assets/footer/medium.svg";
import twitter from "../../assets/footer/twitter.svg";
import ACMLogo from "../../assets/footer/ACMLogo.svg";
import VITLogo from "../../assets/footer/VITLogo.svg";
import "./FooterSection.css";

const FooterSection = () => {

  return (
      <article className="footer">
          <img src={ACMLogo} className="acmlogo"></img>
          <div className="icons">
              <img src={fb} />
              <img src={twitter} />
              <img src={insta} />
              <img src={medium} />
              <img src={linkedin} />
          </div>
          <img src={VITLogo} className="vitlogo"></img>
      </article>
  
  );
};

export default FooterSection;