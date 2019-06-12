import React, { Component } from 'react';
import './Footer.css';
// === Component Imports ===
import Messages from './messages/Messages.js';
import Links from './links/Links.js';

class Footer extends Component {
  render() {
    return (
    <div id="footContainer">

      <div id="footTopWrapper">
        footTopWrapper
      </div>

      <div id="footCenterWrapper">
        <Links />
        <Messages />
      </div>

      <div id="footBottomWrapper">
        <p className="footCopyrightText">Copyright 2019 Skyward Therapies LLC.</p>
        <p className="footCopyrightText">All Rights Reserved.</p>
      </div>

    </div>
    );
  }
}

export default Footer;
