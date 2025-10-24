import React, { Component } from 'react';
import './Contact.css';
import ShareTitle from "../shared/ShareTitle/ShareTitle.js";
import CAddress from "./CAddress/CAddress.js";
import CMap from "./CMap/CMap.js";
import CSocial from "./CSocial/CSocial.js";

class Contact extends Component {
  render() {
    return (
    <div id="contact">
      <ShareTitle title="Schedule Your Session" />
      <div className="conInfoContainer">
        <CAddress />
      </div>
      {/* <div className="conInfoContainer">
        <CMap />
      </div> */}
      <div className="conInfoContainer">
        <CSocial />
      </div>
    </div>
    );
  }
}

export default Contact;
