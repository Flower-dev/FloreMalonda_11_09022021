import React from 'react';
import {useState} from 'react';
import './LocationCard.css';

export default function LocationCard(props) {
    return <div className="location-card">
        <img src={props.location.pictures[0]}/>
        <h5>{props.location.title}</h5>
    </div>
  }
  