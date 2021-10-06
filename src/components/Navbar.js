import React from "react"; //Importing react
import PropTypes from "prop-types"; //Importing Proptypes for using propType and defaultProp defining at the end
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      id="navID"
      className={`navbar navbar-expand-sm 
    
    ${props.mode === "light" ? "lightNavTheme " : "darkNavTheme"} `}
    >
      <div className="container-fluid">
        <Link
          className={`navbar-brand   ${
            props.mode === "light" ? "lightNavTextColor " : "darkNavTextColor"
          } `}
          to="/"
        >
          <span className="logoSize logo-text">{props.title} </span>
        </Link>
        <button
          className="navbar-toggler togglerDesign"
          // className={`    ${props.mode === "light" ? "lightNavTextColor " : "darkNavTextColor" }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="toggleIcon navbar-toggler-icon">TU</span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link active  ${
                  props.mode === "light"
                    ? "lightNavTextColor "
                    : "darkNavTextColor"
                } `}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link   ${
                  props.mode === "light"
                    ? "lightNavTextColor "
                    : "darkNavTextColor"
                } `}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            onClick={props.toggleMode}
            id="darkModeButton"
          >
            <div className="">
              <input
                className="form-check-input btn-lg"
                type="checkbox"
                id="flexSwitchCheckDefault"
                style={{cursor:'pointer'}}
                  
              />
              <label
                className={`form-check-label  ${
                  props.mode === "light"
                    ? "lightNavTextColor "
                    : "darkNavTextColor"
                } `}
                htmlFor="flexSwitchCheckDefault"
                type="checkbox"
              >
                {/* <p> Enable {props.mode === "light" ? "dark" : "light"} Mode </p> */}
                Enable {props.mode === "light" ? "dark" : "light"} Mode
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

//PropTypes- Used for defining the datatypes of our prop used in our react component
Navbar.propTypes = {
  title: PropTypes.string,
};
