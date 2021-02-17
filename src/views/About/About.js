import React from 'react';

// ACCORDION
import Accordion from "../../components/Accordion/Accordion";

// STYLE
import './About.css';


function About() {
  
    return (
    <div className="body">
        <div className="background_about">
            <div className="about_img" style={{backgroundImage:`url(eric-muhr-P_XxsdVgtpQ-unsplash.jpg)`}}>
            </div>
        </div>

        <div className="container">
            <div className="accordion-container">
                <Accordion
                title="Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
                et toutes les informations sont régulièrement vérifiées par nos équipes"
                />
            </div>

            <div className="accordion-container">
                <Accordion
                title="Respect"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
            </div>

            <div className="accordion-container">
                <Accordion
                title="Service"
                content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
                N'hésitez pas à nous contacter si vous avez la moindre question."
                />
            </div>

            <div className="accordion-container">
                <Accordion
                title="Sécurité"
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond 
                aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet 
                à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité 
                domestique pour nos hôtes."
                />
            </div>
        </div>
    </div>
    );
}

export default About;
  