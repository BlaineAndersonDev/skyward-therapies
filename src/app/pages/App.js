import React, { Component } from 'react';
import './App.css';
// === Component Imports ===
import Landing from "./landing/Landing.js";
import About from './about/About.js'
import Gallery from './gallery/Gallery.js'
import Massage from "./massage/Massage.js";
import Nutrition from './nutrition/Nutrition.js'
import Contact from './contact/Contact.js'
// === Segway Component Imports ===
import NutritionSegway from "./segway/NutritionSegway.js";
import MassageSegway from "./segway/MassageSegway.js";

class App extends Component {
  render() {
    return (
      <div id="appContainer">
        <Landing />
        <About />
        <Nutrition />
        <Massage />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default App;
