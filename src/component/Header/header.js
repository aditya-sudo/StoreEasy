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
          <div>
        <NavLink className="nav-link" to="/home">
          List a Space
        </NavLink>
      </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <div class="btn-group">
          <button type="button" className="btn dropdown-toggle" data-toggle="dropdown"  aria-expanded="false">
                Action
          </button>
          <div className="dropdown-menu">
          <a className="dropdown-item" href="#/">Action</a>
          <a className="dropdown-item" href="#/">Another action</a>
          <a className="dropdown-item" href="#/">Something else here</a>
          </div>
            </div>
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