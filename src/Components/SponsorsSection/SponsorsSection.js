import './SponsorsSection.css';
import data from './sponserdata'
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


const Sponser = ({name,imgsrc,info}) => {
  return(
    <div className="sponsor">
      <img className={name} src={imgsrc} alt={`${name} logo`}/>
      <p className={`${name}_p`}>{info}</p>
    </div>
  )
}



const SponsorsSection = ({scrollSponsors})=>{
  return (
    <article className="sponsorsection" ref={scrollSponsors}>
      <Fade left>
        <h1 className="sponsorhead">Previous Sponsors</h1>
      </Fade>
      <Fade bottom>
        <div className="sponsorsinner">
          {data.map((sponser, key) => (
            <Sponser
              key={key}
              name={sponser.name}
              imgsrc={sponser.src}
              info={sponser.info}
            />
          ))}
        </div>
      </Fade>
    </article>
  );
}

export default SponsorsSection