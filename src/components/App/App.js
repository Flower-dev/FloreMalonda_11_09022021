import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

// LOCATION CARD

import LocationZone from '../LocationCard/LocationCard';

// ACCORDION
import Accordion from "../Accordion/Accordion";


// -------------------------------------------

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a_propos">À propos</Link>
          </li>
          {/* <li>
            <Link to="/topics">Topics</Link>
          </li> */}
        </ul>

        <Switch>
          <Route path="/a_propos">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
            <h2 className="title_home">Chez vous, partout ailleurs</h2>
            {/* <img src={Image/backgroundimage.png}/> */}
            <Route>
              <div className="background">
                <LocationZone />
              </div>
            </Route>
        </div>;
}


function About() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Bienvenue sur la page à propos</h2>
      <Accordion
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements,
        et toutes les informations sont régulièrement vérifiées par nos équipes"
      />

      {/* <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:topicId`}>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch> */}
    </div>
  );
}





