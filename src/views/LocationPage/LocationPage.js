import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

// ------- COMPONENTS -------------

import AccordionLocation from './components/AccordionLocation/AccordionLocation';
import Avatar from './components/Avatar/Avatar';
import Tag from './components/Tag/Tag';
import Slideshow from './components/Slideshow/Slideshow';
import Stars from './components/Stars/Stars';

// -------- IMPORT STYLE -----------------

import './LocationPage.css';

// ----------------------------------------------------

export default function LocationPage() {
    const [location, setLocation] = useState({tags:[], equipments:[], pictures:[], rating:'', host:{'name':'', 'picture':''}});

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
    },[]);


    return (
        <div className="body_location_page">
            <div className="slideshow_location">
                <Slideshow img={location.pictures}/>
            </div>

            <div className="presentation">
                <div className="location_header">
                    <div>
                        <h2 className="title_locationpage">{location.title}</h2>
                        <p className="subtitle_locationpage">{location.location}</p>
                    </div>

                    <div className="main-container-tag">
                        {location.tags.map((tag) => <Tag content={tag} key={tag}/>)}
                    </div>
                </div>

                <div className="location_subheader">
                    <div>
                        <Avatar name={location.host.name} picture={location.host.picture}/>
                    </div>

                    <div className="main-container-stars">
                        <Stars rating={location.rating} key={location.id}/>
                    </div>
                </div>
            </div>

            <div className="main-container-accordion">
                <div className="accordion-container-left">
                    <AccordionLocation
                        title="Description"
                        content={location.description}
                    />
                </div>
                <div className="accordion-container-right">
                    <AccordionLocation
                        title="Equipement"
                        content={
                            <ul>
                                {location.equipments.map((equipment) => <li key={equipment}>{equipment}</li>)}
                            </ul>
                        }
                    />

                </div>
            </div>

        </div>
    );
}


