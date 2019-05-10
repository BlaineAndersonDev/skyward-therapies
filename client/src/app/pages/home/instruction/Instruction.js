import React, { Component } from 'react';
import './Instruction.css';

class Instruction extends Component {
  render() {
    return (
    <div id="instContainer">

        <h1 id="instSectionTitle">Hello World from Instruction!</h1>

        <div className="instSubSection">
          <h3 className="instSubSectionTitle">When you arrive for your appointment</h3>
          <p className="instText"></p>
        </div>

        <div className="instSubSection">
          <h3 className="instSubSectionTitle">Children Policy</h3>
          <p className="instText"></p>
        </div>

        <div className="instSubSection">
          <h3 className="instSubSectionTitle">24 Hour Cancellation Policy</h3>
          <p className="instText"></p>
        </div>

        <div className="instSubSection">
          <h3 className="instSubSectionTitle"></h3>
          <p className="instText"></p>
        </div>

    </div>
    );
  }
}

export default Instruction;
