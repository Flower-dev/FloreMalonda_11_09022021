import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

// VIEWS -------------------------------------------

import Home from '../views/Home/Home'
import About from '../views/About/About'
import LocationPage from '../views/LocationPage/LocationPage'
import NoMatch from '../components/NoMatch/NoMatch'

// -------------------------------------------

export default function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="logo">
          <Link className="nav" to="/">
            <img src="../LOGO.svg" alt="logo application"/>
          </Link>
        </div>
        <div className="list-menu">
          <div className="navli">
            <Link className="nav" to="/">Accueil</Link>
          </div>
          <div className="navli">
            <Link className="nav" to="/a_propos">À propos</Link>
          </div>    
        </div>
      </div>

      <Switch>
        <Route exact path="/a_propos">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/locations/:id">
          <LocationPage />
        </Route>
        <Route render={() => <NoMatch/>}/>
      </Switch>
    </Router>
  );
}





