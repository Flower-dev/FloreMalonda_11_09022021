import React from 'react';
import './LocationCard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
  } from "react-router-dom";

// VIEWS

import LocationPage from '../../views/LocationPage/LocationPage';


function LocationCard(props) {
    return (
        <Router>
            <div>
                <Link to="/location">
                    <div className="location-card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                        <h5 className="location-title">{props.location.title}</h5>
                        <div className="location-bgd"></div>
                    </div>
                </Link>
            </div>
            
            <Switch>
                <Route path="/location">
                    <LocationPage/>
                </Route>
            </Switch>  
        </Router>
    
    )

}

export default LocationCard;
  