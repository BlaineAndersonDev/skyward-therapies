import React, { Component } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import "./Title.css";

class Title extends Component {
  render() {
    return (
      <div id="titleContainer">
        <NavLink smooth to="/#landing" className="navLinkTitle"> Skyward Therapies </NavLink>
      </div>
    );
  }
}

export default Title;
