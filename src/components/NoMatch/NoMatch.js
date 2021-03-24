import React from "react";
import './NoMatch.css';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

// -------------------------------

export default function NoMatch () {
    return (
        <div className="nomatch">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link className="backhome" to="/">Retourner sur la page d'accueil</Link>
        </div>
    );
}