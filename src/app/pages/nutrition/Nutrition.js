import React, { Component } from 'react';
import './Nutrition.css';
import NutritionImage from "./NutritionImage/NutritionImage.js";
import NutritionTitle from "./NutritionTitle/NutritionTitle.js";
import NutritionInfo from "./NutritionInfo/NutritionInfo.js";

class Nutrition extends Component {
  render() {
    return (
      <div id="nutrition">
        <div id="nutBoxFirst" className="nutBox">
          <NutritionImage />
        </div>

        <div id="nutBoxSecond" className="nutBox">
          <div className="nutList">
            <NutritionTitle />
            <NutritionInfo />
          </div>
        </div>

        <div id="nutBoxThird" className="nutBox">
          <NutritionImage />
        </div>

      </div>
    );
  }
}

export default Nutrition;
