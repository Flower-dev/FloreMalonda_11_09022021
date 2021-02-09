import React from "react";
import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

// Location card 

import LocationCard from '../LocationCard/LocationCard.js';



export default function App() {
  
  const [locations, setLocations] = useState([]);

    fetch('/locations.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setLocations(data)
        })

  return (

    <div className="App-location-card">
      {locations.map((location) => <LocationCard key={location.id} location={location}/>)}
            
    </div>
  ); 
    
}

 

