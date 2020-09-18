import React, { Component } from 'react';
import './NutritionInfo.css';
import ShareButton from "../../shared/ShareButton/ShareButton.js";

class NutritionInfo extends Component {
  render() {
    return (
      <div id="nInfo">
        <div className="nInfoTextContainer">
          <p className="nInfoText nInfoEmphesis">Ever feel lost when it comes to “eating right?” </p>
          <p className="nInfoText">Well, you are not alone! Eating is custom to the individual.</p>
          <p className="nInfoText">Genetics, finances, living situations, work, stress, kids, and exercise all play essential roles in making “sticking to a diet” difficult!</p>
          <p className="nInfoText nInfoEmphesis">So here is a solution, let's not put you on one!</p>
          <p className="nInfoText">As a Dietetic Technician with a Bachelor's degree in Nutrition, I can tell you diets don’t work, but taking the time to learn HOW to eat, learning to UNDO unhealthy habits, and focus on listening to instinctual cues really can make a huge difference!</p>
          <p className="nInfoText nInfoEmphesis">Let’s start a conversation specific to you!</p>
          <ShareButton 
            text="Start My Nutrition Journey"
          />
        </div>
      </div>
    );
  }
}

export default NutritionInfo;
