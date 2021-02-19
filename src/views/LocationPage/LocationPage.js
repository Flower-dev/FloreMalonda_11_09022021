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