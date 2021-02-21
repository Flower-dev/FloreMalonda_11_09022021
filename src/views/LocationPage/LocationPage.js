import React from 'react'
import { useState } from 'react';
import AccordionLocation from '../../components/AccordionLocation/AccordionLocation';
import './LocationPage.css'

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
        <>
        </>
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