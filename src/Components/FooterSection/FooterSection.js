
import ACMLogo from "../../assets/footer/ACMLogo.svg";
import VITLogo from "../../assets/footer/VITLogo.svg";
import "./FooterSection.css";
import icons from './footerdata'


const IconComponent = ({src,link, name}) => {
    return (
      <a className={`${name} mainIcon social-box w-inline-block`} href={link} rel="noreferrer" target="_blank">
        <img className="z-10 fimg" src={src} alt="icon" />
      </a>
    );
}

const FooterSection = () => {
  return (
    <article className="footer">
      <a
        className="logos"
        href="https://acmvit.in/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={ACMLogo} className="acmlogo" alt="logo" />
      </a>

      <div className="icons">
        {icons.map((icon, key) => (
          <IconComponent key={key} src={icon.src} name={icon.name} link={icon.link} />
        ))}
      </div>

      <a
        className="logos"
        href="https://vit.ac.in/"
        rel="noreferrer"
        target="_blank"
      >
        <img src={VITLogo} className="vitlogo" alt="logo" />
      </a>

    </article>
  );
};

export default FooterSection;