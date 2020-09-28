import React, { Component } from "react";
import { HashLink as NavLink } from "react-router-hash-link";
import "./ShareButton.css";

class ShareButton extends Component {
  handleClick = () => {

  };

  render() {
    return (
      <div id="sharedButton">
        <NavLink smooth to="/#contact" id={this.props.buttonId} className="sharedButtonButton sharedNavButton" type="button">{this.props.text}</NavLink>
      </div>
    );
  }
}

export default ShareButton;
