import React, { Component } from 'react';
import './Footer.css';
// === Component Imports ===
// import FSubscription from './FSubscription/FSubscription.js';

class Footer extends Component {
  render() {
    return (
      <div id="footer">

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
