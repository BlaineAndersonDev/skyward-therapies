import React, { Component } from 'react';
import './Nutrition.css';

class Nutrition extends Component {
  render() {
    return (
    <div id="nutrition" className="comContainer">
      <div className="comTitleContainer">
        <h1 className="nutritionTitle">We take Nutrition Seriously</h1>
        <div className="comUnderTitle"></div>
      </div>
      <div className="nutritionBoxContainer">

        <div className="nutritionBox">
          <div className="nutritionIconContainer">
            <img src="/images/006.5_Nutrition/banana.png" alt="Kelli_Anderson" className="nutritionIcon" />
          </div>
          <div className="nutritionBoxTitleContainer">
            <h1 className="nutritionBoxTitleText">1 Hour Consultation: $75</h1>
            <h1 className="nutritionBoxTitleDesc">During this session we meet and discuss where you are nutritionally, what questions and concerns you have, and what you need from me. </h1>
            <h1 className="nutritionBoxTitleDesc">This session can be used to strictly ask nutrition questions or it may be used as the first step in getting custom guidance.</h1>
          </div>
        </div>

        <div className="nutritionBox">
          <div className="nutritionIconContainer">
            <img src="/images/006.5_Nutrition/avocado.png" alt="Kelli_Anderson" className="nutritionIcon" />
          </div>
          <div className="nutritionBoxTitleContainer">
            <h1 className="nutritionBoxTitleText">A Custom Care Plan: $100</h1>
            <h1 className="nutritionBoxTitleDesc">Delivered to you via email after our initial meeting, the care plan will contain customized details for you to follow in order to achieve your nutritional goals.</h1>
          </div>
        </div>

        <div className="nutritionBox">
          <div className="nutritionIconContainer">
            <img src="/images/006.5_Nutrition/honey.png" alt="Kelli_Anderson" className="nutritionIcon" />
          </div>
          <div className="nutritionBoxTitleContainer">
            <h1 className="nutritionBoxTitleText">Following Up: $35</h1>
            <h1 className="nutritionBoxTitleDesc">A 30 minute one-on-one meeting where we discuss your progress, any frustrations you may be experiencing, and your intentions in moving forward.</h1>
            <h1 className="nutritionBoxTitleDesc">We can use this time to get back on track or add on further instructions for progressing forward. You do not need a custom care plan to do a follow up session.</h1>
          </div>
        </div>

        <div className="nutritionBox">
          <div className="nutritionIconContainer">
            <img src="/images/006.5_Nutrition/fruits.png" alt="Kelli_Anderson" className="nutritionIcon" />
          </div>
          <div className="nutritionBoxTitleContainer">
            <h1 className="nutritionBoxTitleText">The “ALL IN”: $200</h1>
            <h1 className="nutritionBoxTitleDesc">Done over the course of 3 months, includes: Initial Visit with a customized care plan to follow, and we follow up two more times (four weeks apart) to discuss your progress.</h1>
          </div>
        </div>

      </div>

    </div>
    );
  }
}

export default Nutrition;
