import './SponsorsSection.css';
import data from './sponserdata'


const Sponser = ({name,imgsrc,info}) => {
  return(
    <div className="sponsor">
      <img className={name} src={imgsrc} alt={`${name} logo`}/>
      <p className={`${name}_p`}>{info}</p>
    </div>
  )
}



const SponsorsSection = ()=>{
  return (
    <article className="sponsorsection">
      <h1 className="sponsorhead">Previous Sponsors</h1>
        <div className="sponsorsinner">
           {data.map((sponser,key)=>(
             <Sponser key={key} name={sponser.name} imgsrc={sponser.src} info={sponser.info}/>
           ))}
        </div>
    </article>
  );
}

export default SponsorsSection