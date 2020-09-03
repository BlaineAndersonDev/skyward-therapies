import React, { Component } from 'react';
import './Contact.css';
import ShareTitle from "../shared/ShareTitle/ShareTitle.js";
import CAddress from "./CAddress/CAddress.js";
import CSocial from "./CSocial/CSocial.js";
import CMap from "./CMap/CMap.js";

class Contact extends Component {
  render() {
    return (
    <div id="contact">
      <ShareTitle title="Schedule Selfcare" />
      <div className="conInfoContainer">
        <CAddress />
        <CSocial />
      </div>
      <div className="conInfoContainer">
        <CMap />
      </div>
    </div>
    );
  }
}

export default Contact;
