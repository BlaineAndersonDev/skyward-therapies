import React, { Component } from 'react';
import './App.css';
// === Component Imports ===
import Landing from './landing/Landing.js'
import Mission from './mission/Mission.js'
import Massage from './massage/Massage.js'
import Contact from './contact/Contact.js'
import About from './about/About.js'

class App extends Component {
  render() {
    return (
    <div id="appContainer">
      <Landing />
      <Mission />
      <Massage />
      <Contact />
      <About />
    </div>
    );
  }
}

export default App;
