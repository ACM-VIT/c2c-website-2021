import './SponsorsSection.css';
import data from './sponserdata'


const Sponser = ({name,imgsrc}) => {
  return(
    <div className="sponsor">
      <img className={name} src={imgsrc} alt={`${name} logo`}/>
    </div>
  )
}



const SponsorsSection = ()=>{
  return (
    <article className="sponsorsection">
      <h1 className="sponsorhead">Previous Sponsors</h1>
        <div className="sponsorsinner">
           {data.map((sponser,_)=>(
             <Sponser name={sponser.name} imgsrc={sponser.src}/>
           ))}
        </div>
    </article>
  );
}

export default SponsorsSection