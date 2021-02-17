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
            <Link to="">
                <div className="location-card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                    <h5 className="location-title">{props.location.title}</h5>
                    <div className="location-bgd"></div>
                </div>
            </Link>

            <Switch>
                <Route path={`${match.path}/:id`}>
                {/* <Topic /> */}
                </Route>
            </Switch>
            
        </Router>
    
    )

}

export default LocationCard;
  