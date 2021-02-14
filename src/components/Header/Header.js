import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {
  return (
    <div className="header">
        <nav>
            <NavLink exact activeClassName="active" to="/">
                Accueil
            </NavLink>
            <NavLink activeClassName="active" to="/a_propos">
                A Propos
            </NavLink>
        </nav>
    </div>
  );
}
export default Header;