import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
    <div id="contactContainer">

      <h1 id="contactSectionTitle">Contact Skyward Therapies</h1>

      <div className="contactTextContainer">

        <div className="contactSubSection">
          <p className="contactSubSectionTitle">Schedule an appointment or ask us a question</p>
        </div>

        <div className="contactSubSection">
          <h3 className="contactSubSectionTitle">Text or Call</h3>
          <p className="contactText">480-258-3851</p>
        </div>

        <div className="contactSubSection">
          <h3 className="contactSubSectionTitle">Email</h3>
          <p className="contactText">SkywardTherapies@gmail.com</p>
        </div>

        <div className="contactSubSection">
          <h3 className="contactSubSectionTitle">Hours</h3>
          <p className="contactText">By Appointment Only:</p>
          <p className="contactText">Monday-Saturday 8am - 7pm</p>
        </div>

      </div>

    </div>
    );
  }
}

export default Contact;
