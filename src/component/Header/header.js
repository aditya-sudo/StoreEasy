import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
function Header(){
    return(
    <div className="header" class="fixed-top">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/home">
            STOREASY
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/services">
                  Our Services
                </NavLink>
              </li>        
              <li className="nav-item">
                <NavLink className="nav-link" to="/guide">
                  Storage Guide
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login/SignUp
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

    </div>
    );
};

export default Header;