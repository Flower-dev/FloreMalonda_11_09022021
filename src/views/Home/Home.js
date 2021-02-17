import React from 'react'
import {useState} from 'react';
import LocationCard from '../../components/LocationCard/LocationCard';
import './Home.css'

function Home() {
    const [locations, setLocations] = useState([]);

    fetch('/locations.json')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        setLocations(data)
    })

    return <div className="body">
                <div className="background_title">
                    <div className="title_img" style={{backgroundImage:`url(eric-muhr-P_XxsdVgtpQ-unsplash.jpg)`}}>
                        <h2 className="title_home">Chez vous, partout ailleurs</h2>
                    </div>
                </div>
                
            
                <div className="background">
                    <div className="location-card-info">
                        {locations.map((location) => <LocationCard key={location.id} location={location}/>)}
                    </div>
                </div>
                
          </div>;
}

export default Home;
  