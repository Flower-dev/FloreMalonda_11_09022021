import React from 'react';
import './LocationCard.css';


function LocationCard(props) {
    return <div className="location-card" style={{backgroundImage:`url(${props.location.pictures[0]})`}}>
                <h5 className="location-title">{props.location.title}</h5>
                <div className="location-bgd"></div>
            </div>


}

export default LocationCard;
  