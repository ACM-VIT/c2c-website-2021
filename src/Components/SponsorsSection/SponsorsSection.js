import './SponsorsSection.css';
import data from './sponserdata'


const Sponser = ({name,imgsrc}) => {
  return(
    <div className="sponser">
      <img src={imgsrc} alt={`${name} logo`}/>
    </div>
  )
}



const SponsorsSection = ()=>{
  return (
    <div className="sponsorsection">
      <div className="sponsorhead">Previous Sponsors</div>
        <div className="sponsorsinner">
           {data.map((sponser,_)=>(
             <Sponser name={sponser.name} imgsrc={sponser.src}/>
           ))}
        </div>
    </div>
  );
}

export default SponsorsSection