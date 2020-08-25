import React, { Component } from 'react';
import './Nutrition.css';

class Nutrition extends Component {
  render() {
    return (
      <div id="nutrition">

        <div id="nutBoxFirst" className="nutBox">
          <h2 className="nutBoxTitle">Initial Online Consultation: $40</h2>
          <p className="nutBoxText">
            During this session we meet and discuss where you are nutritionally,
            what questions and concerns you have, and what you need from me.
          </p>
          <p className="nutBoxText">
            This session can be used to strictly ask nutrition questions or it
            may be used as the first step in getting custom guidance.
          </p>
        </div>

        <h1 className="nutTitleDivider">Additional Services</h1>
        <div id="nutBoxSecond" className="nutBox">
          <h2 className="nutBoxTitle">A Custom Care Plan</h2>
          <p className="nutBoxText">
            Delivered to you via email after our initial meeting, the care plan
            will contain customized details for you to follow in order to
            achieve your nutritional goals.
          </p>
        </div>
        <div id="nutBoxThird" className="nutBox">
          <h2 className="nutBoxTitle">Following Up</h2>
          <p className="nutBoxText">
            A 30 minute one-on-one meeting where we discuss your progress, any
            frustrations you may be experiencing, and your intentions in moving
            forward.
          </p>
          <p className="nutBoxText">
            We can use this time to get back on track or add on further
            instructions for progressing forward. You do not need a custom care
            plan to do a follow up session.
          </p>
        </div>
        <div id="nutBoxFourth" className="nutBox">
          <h2 className="nutBoxTitle">The “ALL IN”</h2>
          <p className="nutBoxText">
            Done over the course of 3 months, includes: Initial Visit with a
            customized care plan to follow, and we follow up two more times
            (four weeks apart) to discuss your progress.
          </p>
        </div>

      </div>
    );
  }
}

export default Nutrition;
