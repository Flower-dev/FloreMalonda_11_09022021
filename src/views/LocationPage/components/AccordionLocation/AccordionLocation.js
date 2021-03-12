import React, { useState, useRef } from "react";
import ChevronLocation from "./ChevronLocation";

// STYLE
import "./AccordionLocation.css";

// --------------------------------------------------------------

function AccordionLocation(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordionlocation__icon");

  const content = useRef(null);

  function toggleAccordionLocation() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordionlocation__icon" : "accordionlocation__icon rotate"
    );
  }

  return (
    <div className="accordionlocation__section">
      <button className={`accordionlocation ${setActive}`} onClick={toggleAccordionLocation}>
        <p className="accordionlocation__title">{props.title}</p>
        <ChevronLocation className={`${setRotate}`} width={10} fill={"white"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}`}}
        className="accordionlocation__content"
      >
        <div><p className="accordionlocation__text">{props.content}</p></div>
      </div>
    </div>
  );
}

export default AccordionLocation;
