import React, { Component } from 'react';
import './App.css';
// === Component Imports ===
import Landing from './landing/Landing.js'
import Mission from './mission/Mission.js'
import Massage from './massage/Massage.js'
import Modalities from './modalities/Modalities.js'
import Pricing from './pricing/Pricing.js'
import Contact from './contact/Contact.js'
import About from './about/About.js'

class App extends Component {

  holdingFunction = () => {
    return (
      <div id="appContainer">
        <Landing />
        <Mission />
        <Massage />
        <Modalities />
        <Pricing />
        <Contact />
        <About />
      </div>
    )
  }

  render() {
    return (
    <div id="appContainer">
      <Landing />
      <Mission />
    </div>
    );
  }
}

export default App;
