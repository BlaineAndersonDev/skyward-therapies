import React, { Component } from 'react';
import './CAddress.css';

class CAddress extends Component {
  render() {
    return (
    <div id="cAddress">
      <div className="cAddressLocation cAddressSection">
        <h3 className="cAddTitle">Address</h3>
        <p className="cAddText">2150 E Brown Rd Suite 4,</p>
        <p className="cAddText">Mesa, AZ 85205</p>
      </div>
      <div className="cAddressHours cAddressSection">
        <h3 className="cAddTitle">Text or Call</h3>
        <p className="cAddText">480-258-3851</p>
      </div>
      <div className="cAddressPhone cAddressSection">
        <h3 className="cAddTitle">By Appointment Only</h3>
        <p className="cAddText">Tuesday-Saturday: 8am - 5pm</p>
      </div>
      <div className="cAddressEmail cAddressSection">
        <h3 className="cAddTitle">Email</h3>
        <p className="cAddText">SkywardTherapies@gmail.com</p>
      </div>
    </div>
    );
  }
}

export default CAddress;
