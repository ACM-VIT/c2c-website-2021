import React, { useEffect,useRef } from 'react'
import faculty from './facultydata'

import './FacultySection.css'
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

const Organiser = ({pic,name,position})=>{
    return (
    <section className="faculty">
        <img src={pic} alt={name}/>
        <h3>{name}</h3>
        <p>{position}</p>
    </section>
    );
}
const FacultySection = ({scrollOrganizers}) => {
    const slider = useRef(null);
    useEffect(()=>{
    },[]);
    return (
      <article className="facArticle" ref={scrollOrganizers}>
          <h1 className="facTitle">Faculty Organisers</h1>
        <article className="facContainer">
          <section className="facSlider" ref={slider}>
            {faculty.map((organiser, key) => (
              <Organiser
                key={key}
                pic={organiser.pic}
                name={organiser.name}
                position={organiser.position}
              />
            ))}
          </section>
        </article>
      </article>
    );
}

export default FacultySection
