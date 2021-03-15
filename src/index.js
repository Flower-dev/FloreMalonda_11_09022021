import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

// FOOTER -------------------------------------------

import Footer from './components/Footer/Footer';

// -------------------------------------------

const routing = (
  <Router>
    <div>
      <App />
      <Footer />
    </div>
  </Router> 
)


ReactDOM.render(
  routing, document.getElementById('root')
);

reportWebVitals();
