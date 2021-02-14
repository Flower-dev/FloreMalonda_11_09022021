import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

// Header & Footer
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const routing = (
  <Router>
    <div>
      <Header />
      {/* <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> */}
      <App />
      <Footer />
    </div>
  </Router> 
)


ReactDOM.render(
  routing, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
