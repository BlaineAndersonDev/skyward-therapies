import React, { Component } from 'react';
import './App.css';
// === Component Imports ===
import Landing from "./Landing/Landing.js";
import Mission from './mission/Mission.js'
import Massage from './massage/Massage.js'
import Modalities from './modalities/Modalities.js'
import Pricing from './pricing/Pricing.js'
import Nutrition from './nutrition/Nutrition.js'
import About from './about/About.js'

class App extends Component {
  render() {
    return (
    <div id="appContainer">
      <Landing />
    </div>
    );
  }
}

export default App;
