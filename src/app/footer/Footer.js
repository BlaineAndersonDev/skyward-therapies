import React, { Component } from 'react';
import './Footer.css';
// === Component Imports ===
import FSocial from './FSocial/FSocial.js';
import FLogo from './FLogo/FLogo.js';
// import FSubscription from './FSubscription/FSubscription.js';

class Footer extends Component {
  render() {
    return (
      <div id="footer">

        <div className="fBoxContainer">
          <div className="fBox" id="fSocialBox">
            <FSocial />
          </div>

          <div className="fBox" id="fLogoBox">
            <FLogo />
          </div>

        </div>

        <div id="fCopyrightBox">
          <p className="fCopyrightText">Copyright 2019-2020 Skyward Therapies LLC.</p>
          <p className="fCopyrightText">All Rights Reserved.</p>
          <a href="https://blaineandersondev.com/" className="fCopyrightText fCopyrightLink" target="_blank" rel="noopener noreferrer">Built by B/A Solutions </a>
        </div>

      </div>
    );
  }
}

export default Footer;
