import React, { Component } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div id="navContainer">
        <NavLink smooth to="/#welcome" className="navLink"> Welcome </NavLink>
        <NavLink smooth to="/#nutrition" className="navLink"> Nutrition </NavLink>
        <NavLink smooth to="/#massage" className="navLink"> Massage </NavLink>
        <NavLink smooth to="/#contact" className="navLink"> Contact </NavLink>

        <NavLink smooth to="/#landing" id="backToTopButton" type="button">
          <img
            src="/images/pages/Back_To_Top_Icon.png"
            alt="Filler"
            id="backToTopIcon"
          />
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
