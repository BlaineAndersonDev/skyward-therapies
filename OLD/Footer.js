import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  realLeft = () => {
    return (
      <div className="footBox">
        <p className="footTextTitle">Navigation</p>
        <p className="footText">Types of Massage</p>
        <p className="footText">Special Modalities</p>
        <p className="footText">Contact Us</p>
        <p className="footText">Arrival Instructions</p>
        <p className="footText">About</p>
        <p className="footText">Nutritional Consultation</p>
      </div>
    )
  }



  render() {
    return (
    <div id="footContainer">
      <div className="footAboveBox">


        <div className="footBox">
          <h1 className="footTextTitle">Like us on Facebook</h1>
          <a href="https://www.facebook.com/skywardtherapies" target="_blank" rel="noopener noreferrer">
            <img src="/images/skyward_photo_002.jpg" alt="massage_table" id="skywardMassageTable" />
          </a>
        </div>

        <div className="footBox">
          <h1 className="footTextTitle">Follow us on Instagram</h1>
          <a href="https://www.instagram.com/skywardtherapiesllc" target="_blank" rel="noopener noreferrer">
            <img src="/images/skyward_photo_001.jpg" alt="massage_table" id="skywardMassageTable" />
          </a>
        </div>

        <div className="footBox footRightAboveBox">
          <h1 className="footTextTitle">Our Location</h1>
          <h1 className="footText">6239 E Brown Rd Suite 112,</h1>
          <h1 className="footText">Mesa, AZ 85205</h1>
          <h1 className="footText">Call or Text: 480-258-3851</h1>
          <a href="https://www.google.com/maps/place/Desert+Lotus+Healing+Sanctuary,+Inc./@33.4369298,-111.6964651,19z/data=!3m1!4b1!4m5!3m4!1s0x872ba565d7fb2071:0x2a5f3d343d50800b!8m2!3d33.4369287!4d-111.6959179"
          target="_blank"
          className="footLink"
          rel="noopener noreferrer">Get Directions</a>
        </div>

      </div>
      <div className="footBelowBox">
        <div className="footBox">
          <h1 className="footText">Copyright 2019 Skyward Therapies LLC.</h1>
        </div>
        <div className="footBox">
          <h1 className="footText">All Rights Reserved.</h1>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;
