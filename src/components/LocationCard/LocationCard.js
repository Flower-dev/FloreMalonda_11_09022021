import React from 'react';
import './LocationCard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";


function LocationCard(props) {
    return (
        <Router>
            <Switch path="/locationpage">
                <div className="location-card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                    <h5 className="location-title">{props.location.title}</h5>
                    <div className="location-bgd"></div>
                </div>
            </Switch>
            
        </Router>
    
    )

}

export default LocationCard;
  