import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Navigation.js'
import Mission from './mission/Mission.js'
import Massage from './massage/Massage.js'
import Modalities from './modalities/Modalities.js'
import Contact from './contact/Contact.js'
import Instruction from './instruction/Instruction.js'
import About from './about/About.js'
import Footer from '../Footer.js'

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">

        <div className="imageSection parallax bgImg1 homeBoxImg">
          <h1 id="homeImageText">Skyward Therapies</h1>
        </div>

        <div id="heightMission" className="betweenSection homeBoxGradientOne homeBox">
          <Mission />
        </div>

        <div id="heightMassage" className="imageSection parallax bgImg2 homeBoxImg">
          <Massage />
        </div>

        <div id="heightModalities" className="betweenSection homeBoxGradientOne homeBox">
          <Modalities />
        </div>

        <div id="heightContact" className="imageSection parallax bgImg3 homeBoxImg">
          <Contact />
        </div>

        <div id="heightInstruction" className="betweenSection homeBox homeBoxGradientTwo">
          <Instruction />
        </div>

        <div id="heightAbout" className="imageSection parallax bgImg4 homeBoxImg">
          <About />
        </div>

        <div id="heightFooter" className="betweenSection homeBox homeBoxGradientOne">
          <Footer />
        </div>

      </div>
    );
  }
}

export default Home;
