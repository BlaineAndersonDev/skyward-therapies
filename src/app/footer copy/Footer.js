import React, { Component } from 'react';
import './Footer.css';
// === Component Imports ===
import Links from './links/Links.js';

class Footer extends Component {
  render() {
    return (
    <div id="footContainer">

      <div id="footCenterWrapper">
        <Links />
      </div>

      <div id="footBottomWrapper">
        <p className="footCopyrightText">Copyright 2019-2020 Skyward Therapies LLC.</p>
        <p className="footCopyrightText">All Rights Reserved.</p>
      </div>

    </div>
    );
  }
}

export default Footer;
