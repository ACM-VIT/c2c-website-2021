import React, { useEffect,useRef } from 'react'
import organisers from './oragnisersdata'
import Ticker from 'react-ticker'

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
    const slider = useRef(null);
    useEffect(()=>{
    },[]);
    return (
        <>
        <h1 className="orgTitle">Organisers</h1>
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
