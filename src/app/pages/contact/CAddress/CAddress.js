import React, { Component } from 'react';
import './CAddress.css';

class CAddress extends Component {
  render() {
    return (
    <div id="cAddress">
      <div className="cAddressLocation cAddressSection">
        <h3 className="cAddTitle">Mobile Service Areas</h3>
        <p className="cAddText">Mesa, Gilbert, Chandler,</p>
        <p className="cAddText">Queen Creek, South Scottsdale</p>
      </div>
      <div className="cAddressHours cAddressSection">
        <h3 className="cAddTitle">Text or Call</h3>
        <p className="cAddText">480-258-3851</p>
      </div>
      <div className="cAddressPhone cAddressSection">
        <h3 className="cAddTitle">By Appointment Only</h3>
        <p className="cAddText">Tuesday-Friday: 9am - 630pm</p>
        <p className="cAddText">Saturday: 9am - 3pm</p>
        <p className="cAddText">Sunday-Monday: Closed</p>
      </div>
      <div className="cAddressEmail cAddressSection">
        <h3 className="cAddTitle">Email</h3>
        <p className="cAddText"></p>
        <a className="cAddText cAddLink"
          href="mailto:SkywardTherapies@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          SkywardTherapies@Gmail.com
      </a>
      </div>
    </div>
    );
  }
}

export default CAddress;
