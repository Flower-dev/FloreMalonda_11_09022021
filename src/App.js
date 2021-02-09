import React from "react";
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function LocationCard(props) {
  return <div>
      <h1>{props.location.title}</h1>
      <img src={props.location.pictures[0]}/>
  </div>
}

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

    <div className="App">
      {locations.map((location) => <LocationCard key={location.id} location={location}/>)}
            
    </div>
  ); 
    
}

