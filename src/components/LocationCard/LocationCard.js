import React from 'react';
import './LocationCard.css';
import {useState} from 'react';

function LocationCard(props) {
    return <div className="background">
                <div className="location-card">
                    <img src={props.location.pictures[0]}/>
                    <h5>{props.location.title}</h5>
                </div>
            </div>
}

export default function LocationZone() {
    const [locations, setLocations] = useState([]);

    fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLocations(data)
        })


    return (
        <div className="location-card-info">
            {locations.map((location) => <LocationCard key={location.id} location={location}/>)}
            
        </div>
    );
}
  