import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// ------- COMPONENTS -------------

import AccordionLocation from '../../components/AccordionLocation/AccordionLocation';
import Avatar from '../../components/Avatar/Avatar';
import Tag from '../../components/Tag/Tag';
import Slideshow from '../../components/Slideshow/Slideshow';

// -------- IMPORT STYLE -----------------

import './LocationPage.css';

// ----------------------------------------------------

function LocationPage() {
    const [location, setLocation] = useState({tags:[], equipments:[], pictures:[], host:{'name':'', 'picture':''}});

    let { id } = useParams();
    
    useEffect (function (){
        
        fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            for (let i=0; i<data.length; i++){
                if (data[i].id == id){
                    setLocation(data[i])
                }
            }
        })
    },[location]);

    
    return (
        <div className="body_location_page">
            <div>
                {location.pictures.map((picture) => <Slideshow img={picture} key={picture}/>)}
            </div>
            <div className="location_header">
                <div>
                    <h2 className="title_locationpage">{location.title}</h2>
                    <p className="subtitle_locationpage">{location.location}</p>
                </div>
                <div>
                
                <Avatar name={location.host.name} picture={location.host.picture}/>
                   
                </div>
            </div>
            <div className="main-container-tag">
                {location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
            </div>

            <div className="main-container-accordion">
                <div className="accordion-container">
                    <AccordionLocation
                    title="Description"
                    content={location.description}
                    />
                </div>
                <div className="accordion-container">
                    <AccordionLocation
                    title="Equipement"
                    content={location.equipments.join(',')}
                    />
                </div>
            </div>
        </div>
    );
}

export default LocationPage;

/*
DANS LA PAGE LOCATION : 

Mettre de titre de la location
Mettre un carroussel 
les tags
accordéons
localisations
notation
nom et photo de l'hote

*/