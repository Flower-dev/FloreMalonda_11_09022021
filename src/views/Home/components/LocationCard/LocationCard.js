import React from 'react';
import './LocationCard.css';
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";


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
        </> 
    )
}

export default LocationCard;
  