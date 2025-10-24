import React, { Component } from "react";
import "./MTitle.css";

class MTitle extends Component {
  render() {
    return (
      <div id="mTitle">
        <h1 className="mTitleHeader">Mobile Massage Pricing</h1>
        <img
          src="/images/pages/FancyLine.png"
          alt="Watercolor Feather"
          id="mTitleDivider"
        />
      </div>
    );
  }
}

export default MTitle;
