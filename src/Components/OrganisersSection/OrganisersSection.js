import React, { useEffect } from 'react'
import organisers from './oragnisersdata'

import './OrganisersSection.css'

const Organiser = ({pic,name,position})=>{
    useEffect(()=>{
        console.log(pic,name,position)
    },[])
    return (
    <section className="board_member">
        <img src={pic} alt={name}/>
        <h3>{name}</h3>
        <p>{position}</p>
    </section>
    );
}
export const OrganisersSection = () => {
    return (
        <article className="orgContainer">
            <h1>Organisers</h1>
            <section className="slider">
            {organisers.map((organiser,key) => (
                <Organiser key={key} pic={organiser.pic} name={organiser.name} position={organiser.position}/>
            ))}
            </section>
        </article>
    )
}
