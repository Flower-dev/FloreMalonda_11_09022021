import React from 'react'
import AccordionLocation from '../../components/AccordionLocation/AccordionLocation';
import './LocationPage.css';
import Tag from '../../components/Tag/Tag';
import { useState } from 'react';


function LocationPage() {
    const [locations, setLocations] = useState([]);

    fetch('/locations.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        setLocations(data)
    })

    return (
        <div className="body_location_page">
            <h2 className="title_locationpage">Titre de la location</h2>
            <p className="subtitle_locationpage">Localisation de la location</p>

            <div className="main-container-tag">
                {locations.map((location) => <Tag key={location.id} location={tags}/>)}
            </div>

            <div className="main-container-accordion">
                <div className="accordion-container">
                    <AccordionLocation
                    title="Description"
                    content="ceci est un test pour le moment --- ajouter la partie description !!!!"
                    />
                </div>
                <div className="accordion-container">
                    <AccordionLocation
                    title="Equipement"
                    content="ceci est un test pour le moment --- ajouter la liste des équipements !!!!"
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