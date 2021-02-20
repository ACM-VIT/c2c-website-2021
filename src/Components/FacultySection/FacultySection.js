import React, { useEffect,useRef } from 'react'
import faculty from './facultydata'

import './FacultySection.css'

const Organiser = ({pic,name,position})=>{
    useEffect(()=>{
        console.log(pic,name,position)
    },[])
    return (
    <section className="faculty">
        <img src={pic} alt={name}/>
        <h3>{name}</h3>
        <p>{position}</p>
    </section>
    );
}
const FacultySection = () => {
    const slider = useRef(null);
    useEffect(()=>{
    },[]);
    return (
        <>
        <h1 className="facTitle">Organisers</h1>
        <article className="facContainer">
           
            <section className="facSlider" ref={slider}>
            {faculty.map((organiser,key) => (
                <Organiser key={key} pic={organiser.pic} name={organiser.name} position={organiser.position}/>
            ))}
            </section>
        </article>
        </>
    )
}

export default FacultySection
