import React, { Component } from "react";
import "./MTitle.css";

class MTitle extends Component {
  render() {
    return (
      <div id="mTitle">
        <h1 className="mTitleHeader">Massage Pricing</h1>
        <img
          src="/images/pages/FancyLine.png"
          alt="Watercolor Feather"
          id="mTitleDivider"
        />
        <p className="mTitleText">All Sessions Include:</p>
        <p className="mTitleText">Customizable Care, Hot Towels, Aromatherapy & Hot Stones.</p>
      </div>
    );
  }
}

export default MTitle;
