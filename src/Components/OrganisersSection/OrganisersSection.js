import React, { useEffect,useRef } from 'react'
import organisers from './oragnisersdata'

import './OrganisersSection.css'

const Organiser = ({pic,name,position})=>{
    return (
    <section className="board_member">
        <img src={pic} alt={name}/>
        <h3>{name}</h3>
        <p>{position}</p>
    </section>
    );
}
const OrganisersSection = () => {
    const slider = useRef(null);
    useEffect(()=>{
    },[]);
    return (
        <>
        <h1 className="orgTitle">Student Organisers</h1>
        <article className="orgContainer">
           
            <section className="slider" ref={slider}>
            {organisers.map((organiser,key) => (
                <Organiser key={key} pic={organiser.pic} name={organiser.name} position={organiser.position}/>
            ))}
            </section>
        </article>
        </>
    )
}

export default OrganisersSection;
