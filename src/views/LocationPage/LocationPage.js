import React from 'react'
import { useState } from 'react';
import AccordionLocation from '../../components/AccordionLocation/AccordionLocation';
import './LocationPage.css';


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
        <div className="test">
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