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
        <>
            <div>
                <Link className="linklocation" to={"/locations/"+props.location.id}>
                    <div className="location-card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                        <h5 className="location-title">{props.location.title}</h5>
                        <div className="location-bgd"></div>
                    </div>
                 </Link>
            </div>
            
            {/* <Switch>
                <Route exact path={"/locations/"+props.location.id}>
                    <LocationPage/>
                </Route>
            </Switch>   */}
        </> 
    
    )

}

export default LocationCard;
  