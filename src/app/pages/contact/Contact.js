import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
    <div id="contact" className="comContainer">
      <div className="comTitleContainer">
        <h1 className="comTitle">Contact</h1>
        <div className="comUnderTitle"></div>
      </div>

      <div className="contactBottomBoxContainer">

        <div className="contactLeftBottomBox">

          <div className="contactBottomBox contactAddress">
            <h3 className="contactBoxTitle contactBoxTitle2">Hours</h3>
            <p className="contactBoxText contactBoxText2 contactBoxText2gap"><i>By Appointment Only</i></p>
            <p className="contactBoxText contactBoxText2">7 Days A Week: 8am - 6pm</p>
          </div>

          <div className="contactBottomBox contactAddress">
            <h3 className="contactBoxTitle contactBoxTitle2">Text or Call</h3>
            <p className="contactBoxText contactBoxText2">480-258-3851</p>
          </div>

          <div className="contactBottomBox contactAddress">
            <h3 className="contactBoxTitle contactBoxTitle2">Email</h3>
            <p className="contactBoxText contactBoxText2">SkywardTherapies@gmail.com</p>
          </div>

        </div>

      </div>

    </div>
    );
  }
}

export default Contact;
