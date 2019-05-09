import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Construction.css';

class Construction extends Component {
  render() {
    return (
    <div id="conContainer">
      <div id="conTextBox">
        <h1 className="conText">
          Skyward Therapies is currently under construction
        </h1>
      </div>
    </div>
    );
  }
}

export default Construction;
