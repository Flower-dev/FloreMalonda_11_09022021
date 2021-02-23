import React from 'react'
import AccordionLocation from '../../components/AccordionLocation/AccordionLocation';
import './LocationPage.css';
import Tag from '../../components/Tag/Tag';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";



function LocationPage() {
    const [location, setLocation] = useState({tags:[], equipments:[]});

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
            <h2 className="title_locationpage">Titre de la location</h2>
            <p className="subtitle_locationpage">Localisation de la location</p>

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