import React, { Component } from 'react';
import './Home.css';
import Navigation from '../Navigation.js'
import Massage from './massage/Massage.js'
import Contact from './contact/Contact.js'
import Instruction from './instruction/Instruction.js'
import About from './about/About.js'
import Footer from '../Footer.js'

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">
        <Navigation />

        <div className="imageSection parallax bgImg1 homeBoxImg">
          <h1 id="homeImageText">Skyward Therapies</h1>
        </div>


        <div className="betweenSection homeBoxGradientOne homeBox">
          <Massage />
        </div>

        <div className="imageSection parallax bgImg2 homeBoxImg">
          <Contact />
        </div>

        <div className="betweenSection homeBox homeBoxGradientTwo">
          <Instruction />
        </div>

        <div className="imageSection parallax bgImg3 homeBoxImg">
          <About />
        </div>

        <div className="betweenSection homeBox homeBoxGradientOne">
          <Footer />
        </div>

      </div>
    );
  }
}

export default Home;
