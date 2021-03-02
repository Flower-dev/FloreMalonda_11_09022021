import React from 'react';
import ChevronSlideshow from './ChevronSlideshow.js';
import './Slideshow.css'

function Slideshow(props){
    return (
        <div className="slideshow">
            <div className="slideshow-container">
            {props.img.map((picture) => < img src={picture} key={picture}/>)}
            </div>
            <div className="chevronslideshow-container">
                <ChevronSlideshow/>
            </div>
        </div>
    );
}

export default Slideshow;
