import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

// VIEWS

import Home from '../../views/Home/Home'
import About from '../../views/About/About'
import LocationPage from '../../views/LocationPage/LocationPage'


// -------------------------------------------

export default function App() {
  return (
    <Router>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a_propos">À propos</Link>
          </li>    
        </ul>

        <Switch>
          <Route path="/a_propos">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/locations/:id">
            <LocationPage />
          </Route>
          <Route 
          render={() => 
            <div className="nomatch">
              <h1>404</h1>
              <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
          } 
          />
        </Switch>
      </div>
    </Router>
  );
}





