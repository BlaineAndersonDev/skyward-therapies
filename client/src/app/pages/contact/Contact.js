import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
    <div id="contact" className="comContainer">
      <div id="contactHeader"></div>
      <div className="comTitleContainer">
        <div className="comOverTitle pricingTitleColor"></div>
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

        <div className="contactTopBox contactTopBoxRaise">
          <div className="contactTopBoxCenter"></div>
          <div className="contactIconContainer">
            <span className="contactIconBorder">
              <img src="images/skyward_icon_contact_text.png" alt="conact_text" className="contactIcon" />
            </span>
          </div>
          <h3 className="contactBoxTitle">Text</h3>
          <p className="contactBoxText">480-258-3851</p>
        </div>

        <div className="contactTopBox">
          <div className="contactTopBoxSide"></div>
          <div className="contactIconContainer">
            <span className="contactIconBorder">
              <img src="images/skyward_icon_contact_phone.png" alt="conact_phone" className="contactIcon" />
            </span>
          </div>
          <h3 className="contactBoxTitle">Call</h3>
          <p className="contactBoxText">480-258-3851</p>
        </div>
      </div>

      <div className="contactBottomBoxContainer">

        <div className="contactLeftBottomBox">
          <div className="contactBottomBox contactAddress">
            <h3 className="contactBoxTitle">Address</h3>
            <p className="contactBoxText">6239 E Brown Rd Suite 112,</p>
            <p className="contactBoxText">Mesa, AZ 85205</p>
            <p className="contactBoxText">Get Directions</p>
          </div>

          <div className="contactBottomBox contactAddress">
            <h3 className="contactBoxTitle">Hours</h3>
            <p className="contactBoxText">By Appointment Only:</p>
            <p className="contactBoxText">Monday-Saturday 8am - 7pm</p>
          </div>
        </div>

        <div className="contactBottomBox contactMap">
          <div className="contactRightBottomBox">
            <h3 className="contactBoxTitle">MAP</h3>
          </div>
        </div>

      </div>

    </div>
    );
  }
}

export default Contact;
