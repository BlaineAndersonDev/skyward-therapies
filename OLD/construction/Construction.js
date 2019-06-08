import React, { Component } from 'react';
import './Construction.css';

class Construction extends Component {
  render() {
    return (
    <div id="conContainer">
      <div id="conTextBox">

        <div className="conBox">
          Skyward Therapies is currently under construction
        </div>

        <div className="conBox">
          Please visit our Facebook or Instagram page!
        </div>

        <div className="conBox">
          <a href="https://www.facebook.com/skywardtherapies" target="_blank" className="conLink" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/skywardtherapiesllc" target="_blank" className="conLink" rel="noopener noreferrer">Instagram</a>
        </div>

      </div>
    </div>
    );
  }
}

export default Construction;
