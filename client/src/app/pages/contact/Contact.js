import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
    <div id="contactContainer" className="comContainer">
      <h1 id="contactSectiontitle" className="comSectiontitle">Contact Skyward Therapies</h1>

      <div className="comSectionContainer">

        <div className="comSubSectionContainer">
          <p className="comSubSectionTitle">Schedule an appointment or ask a question</p>
        </div>

        <div className="comSubSectionContainer">
          <h3 className="comSubSectionTitle">Text or Call</h3>
          <p className="comSubSectionText">480-258-3851</p>
        </div>

        <div className="comSubSectionContainer">
          <h3 className="comSubSectionTitle">Email</h3>
          <p className="comSubSectionText">SkywardTherapies@gmail.com</p>
        </div>

        <div className="comSubSectionContainer">
          <h3 className="comSubSectionTitle">Hours</h3>
          <p className="comSubSectionText">By Appointment Only:</p>
          <p className="comSubSectionText">Monday-Saturday 8am - 7pm</p>
        </div>

      </div>
    </div>
    );
  }
}

export default Contact;
