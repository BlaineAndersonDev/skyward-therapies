import React, { Component } from 'react';
import './Nutrition.css';
import NutritionAccordianItem from "./NutritionAccordianItem/NutritionAccordianItem.js";
import NutritionTitle from "./NutritionTitle/NutritionTitle.js";
import NutritionImage from "./NutritionImage/NutritionImage.js";

const firstBox = [
  {
    title: "Initial Online Consultation: $40",
    paragraph:
      "During this session we meet and discuss where you are nutritionally, what questions and concerns you have, and what you need from me. This session can be used to strictly ask nutrition questions or it may be used as the first step in getting custom guidance.",
  }
];

const additionalBoxes = [
  {
    title: "A Custom Care Plan",
    paragraph:
      "Delivered to you via email after our initial meeting, the care plan will contain customized details for you to follow in order to achieve your nutritional goals.",
  },
  {
    title: "Following Up",
    paragraph:
      "A 30 minute one-on-one meeting where we discuss your progress, any frustrations you may be experiencing, and your intentions in moving forward. We can use this time to get back on track or add on further instructions for progressing forward. You do not need a custom care plan to do a follow up session.",
  },
  {
    title: "The “ALL IN“",
    paragraph:
      "Done over the course of 3 months, includes: Initial Visit with a customized care plan to follow, and we follow up two more times (four weeks apart) to discuss your progress.",
  },
];

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
            <ul {...{ className: "nutAccordion-list" }}>
              {firstBox.map((firstBox, key) => {
                return (
                  <li {...{ className: "nutAccordion-list__item", key }}>
                    <NutritionAccordianItem {...firstBox} />
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nutList">
            <h1 className="nutSectionHeader">Continuing Help</h1>
            <ul {...{ className: "nutAccordion-list" }}>
              {additionalBoxes.map((additionalBoxes, key) => {
                return (
                  <li {...{ className: "nutAccordion-list__item", key }}>
                    <NutritionAccordianItem {...additionalBoxes} />
                  </li>
                );
              })}
            </ul>
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
