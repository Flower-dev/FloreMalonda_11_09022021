import React from 'react'
import AccordionLocation from '../../components/AccordionLocation/AccordionLocation';
import './LocationPage.css';


function LocationPage() {

    return (
        <div className="test">
            <h2>Titre de la location</h2>
            <p>Localisation de la location</p>

            <div className="main-container-tag">
                
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