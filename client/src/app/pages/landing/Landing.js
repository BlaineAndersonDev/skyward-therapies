import React, { Component } from 'react';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id="landing" className="comContainer">
        <h1 id='landingImageTitle' className='landingImageTexts'>Skyward Therapies</h1>
        <h3 id='landingImageSlogan' className='landingImageTexts'>~ Back to Balance ~</h3>
      </div>
    );
  }
}

export default Landing;
