import React from 'react';
import './Slideshow.css'

function Slideshow(props){
    return (
        <section className="slideshow">
            <div className="slideshow-container">
            {props.img.map((picture) => < img src={picture} key={picture}/>)}
            </div>
        </section>
    );
}

export default Slideshow;
