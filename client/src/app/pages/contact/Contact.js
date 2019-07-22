import React, { Component } from 'react';
import './Contact.css';
import dotenv from 'dotenv';
// === Component Imports ===
import Googlemaps from '../../googlemaps/Googlemaps.js';

class Contact extends Component {
  render() {
      let googleURL = `https://www.google.com/maps/embed/v1/place?q=Skyward+Therapies+LLC,+6239+E+Brown+Rd+Suite+112+Room+7,+Mesa,+AZ+85205&key=AIzaSyDaBYVeB0VRbkU13X8NPGIdlTqXCIn5Xe4`
      // let googleURL = `https://www.google.com/maps/embed/v1/place?q=Skyward+Therapies+LLC,+6239+E+Brown+Rd+Suite+112+Room+7,+Mesa,+AZ+85205&key=${process.env.GOOGLE_API_KEY}`
    return (
    <div id="contact" className="comContainer">
      <div className="comTitleContainer">
        <h1 className="comTitle">Schedule a Massage</h1>
        <div className="comUnderTitle"></div>
      </div>

      <div className="contactTopBoxContainer">
        <div className="contactTopBox">
          <div className="contactTopBoxSide"></div>
          <div className="contactIconContainer">
            <span className="contactIconBorder">
              <img src="images/skyward_icon_contact_email.png" alt="conact_email" className="contactIcon" />
            </span>
          </div>
          <h3 className="contactBoxTitle">Email</h3>
          <p className="contactBoxText">SkywardTherapies@gmail.com</p>
        </div>

        <div className="contactTopBox">
          <div className="contactTopBoxSide"></div>
          <div className="contactIconContainer">
            <span className="contactIconBorder">
              <img src="images/skyward_icon_contact_text.png" alt="conact_text" className="contactIcon" />
            </span>
          </div>
          <h3 className="contactBoxTitle">Text or Call</h3>
          <p className="contactBoxText">480-258-3851</p>
        </div>
      </div>

      <div className="contactBottomBoxContainer">

        <div className="contactLeftBottomBox">
          <div className="contactBottomBox contactAddress">
            <h3 className="contactBoxTitle contactBoxTitle2">Address</h3>
            <p className="contactBoxText contactBoxText2">6239 E Brown Rd Suite 112,</p>
            <p className="contactBoxText contactBoxText2">Mesa, AZ 85205</p>
          </div>

          <div className="contactBottomBox contactAddress">
            <h3 className="contactBoxTitle contactBoxTitle2">Hours</h3>
            <p className="contactBoxText contactBoxText2 contactBoxText2gap">By Appointment Only</p>
            <p className="contactBoxText contactBoxText2">Monday-Saturday: </p>
            <p className="contactBoxText contactBoxText2">8am - 7pm</p>
          </div>
        </div>

        <div className="contactBottomBox contactMap">
          <div className="contactRightBottomBox">
            <iframe id="googleMap" frameborder="0"
              src={googleURL} allowfullscreen></iframe>
          </div>
        </div>

      </div>

    </div>
    );
  }
}

export default Contact;
