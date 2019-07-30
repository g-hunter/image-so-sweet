import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = props => {
  const handleHamBurgerClick = () => {
    props.setDropDown(!props.dropDown);
  };

  return (
    // Home, Blog, Contact, Availability, Available Locations, About
    <div className="nav-hover-wrapper">
      <div className="nav-wrapper">
        <div className="nav-link-wrapper">
          <div className="nav-link">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>
          <h1 className="divider">/</h1>
          <div className="nav-link">
            <NavLink to="/gallery" activeClassName="nav-link-active">
              Sessions{" "}
              <FontAwesomeIcon
                icon={faCaretDown}
                className="sessions-hover-arrow"
              />
            </NavLink>
          </div>
          <h1 className="divider">/</h1>
          {/* <div className="nav-link">
          <NavLink to="/availability" activeClassName="nav-link-active">
            Availability
          </NavLink>
        </div>
        <h1 className="divider">/</h1> */}
          {/* <div className="nav-link">
          <NavLink to="/available-locations" activeClassName="nav-link-active">
            Available Locations
          </NavLink>
        </div> */}
          {/* <h1 className="divider">/</h1> */}
          <div className="nav-link">
            <NavLink to="/about" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>
          <h1 className="divider">/</h1>
          <button
            onClick={() => props.scrollToContact()}
            className="contact-link"
          >
            Contact
          </button>
          <div className="hamburger-wrapper">
            <button onClick={() => handleHamBurgerClick()}>
              <FontAwesomeIcon icon={faBars} className="hamburger" />
            </button>
          </div>
        </div>
      </div>
      <div className="sessions-hover">
        <div className="hover-wrapper">
          <NavLink
            to="/gallery"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/featured"
            className="nav-link"
            activeClassName="nav-link-active"
          >
            Featured
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavBar);
