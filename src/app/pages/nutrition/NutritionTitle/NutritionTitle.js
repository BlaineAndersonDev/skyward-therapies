import React, { Component } from "react";
import "./NutritionTitle.css";

class NutritionTitle extends Component {
  render() {
    return (
      <div id="nutTitle">
        <h1 className="nutTitleHeader">Nutrition Services</h1>
        <img
          src="/images/pages/FancyLine.png"
          alt="Watercolor Feather"
          id="nutTitleDivider"
        />
      </div>
    );
  }
}

export default NutritionTitle;
