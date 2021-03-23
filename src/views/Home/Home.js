import React from 'react'
import {useState, useEffect} from 'react';
import LocationCard from './components/LocationCard/LocationCard';
import './Home.css'

// -------------------------------------------

export default function Home() {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('/locations.json')
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setLocations(data)
            })
    }, [])


    return (
        <div className="body-home">
            <div className="background_title">
                <div className="title_img">
                    <img src="../homebackgroundimg.png" alt="bgdimg"/>
                    <h2 className="title_home">Chez vous, partout et ailleurs</h2>
                </div>
                <div className="bgd"></div>
            </div>


            <div className="background">
                <div className="location-card-info">
                    {locations.map((location) => <LocationCard key={location.id} location={location}/>)}
                </div>
            </div>

        </div>
    );
}

