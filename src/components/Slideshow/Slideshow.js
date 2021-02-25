import React from 'react';
import './Slideshow.css'

function Slideshow(props){
    return (
        <section className="slideshow">
            <img src={props.img}></img>
        </section>
    );
}

export default Slideshow;
