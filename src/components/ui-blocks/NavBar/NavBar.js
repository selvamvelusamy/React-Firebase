import React from 'react';
import { NavLink } from "react-router-dom";

import './NavBar.css';

const NavBar = () => {
    return (
        <div className="nav-bar-container">
            <NavLink to="/page1" activeClassName="active-navlink-class">Page 1</NavLink>
            <NavLink to="page2" activeClassName="active-navlink-class">Page 2</NavLink>
        </div>
    )
}

export default NavBar;