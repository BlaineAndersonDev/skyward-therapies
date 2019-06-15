import React, { Component } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import './Links.css';
// === Component Imports ===
import Social from './social/Social.js';

class Links extends Component {

  render() {
    return (
    <div id="footLinksContainer">

    <div id="footLinksContainerTop">
      <div className="footLinksSide">
        <div className="footLinksSection">
          <h3 className="footLinksTitle">Information:</h3>
          <NavLink smooth to="/#landing" className="footLinksNavLink">
            <div className="footLinksNavLinkText"> Home </div>
          </NavLink>
          <NavLink smooth to="/#massage" className="footLinksNavLink">
            <div className="footLinksNavLinkText"> Our Mission </div>
          </NavLink>
          <NavLink smooth to="/#massage" className="footLinksNavLink">
            <div className="footLinksNavLinkText"> Massage Styles </div>
          </NavLink>
          <NavLink smooth to="/#pricing" className="footLinksNavLink">
            <div className="footLinksNavLinkText"> Special Modalities </div>
          </NavLink>
          <NavLink smooth to="/#contact" className="footLinksNavLink">
            <div className="footLinksNavLinkText"> Pricing </div>
          </NavLink>
          <NavLink smooth to="/#contact" className="footLinksNavLink">
            <div className="footLinksNavLinkText"> Schedual a Massage </div>
          </NavLink>
          <NavLink smooth to="/#about" className="footLinksNavLink">
            <div className="footLinksNavLinkText"> About </div>
          </NavLink>
        </div>
      </div>

      <div className="footLinksSide">
        <div className="footLinksSocialWrapper">
          <Social />
        </div>
        <div className="footLinksSection footLinksAddressSection">
          <h3 className="footLinksTitle">Address:</h3>
          <p className="footLinksText">6239 E Brown Rd Suite 112,</p>
          <p className="footLinksText">Mesa, AZ 85205</p>
          <a target='_blank' rel='noopener noreferrer' href="https://goo.gl/maps/is74TL9zXkbgAbb99" className="footLinksText footLinksLink">Get Directions</a>
        </div>
      </div>
    </div>

    </div>
    );
  }
}

export default Links;
