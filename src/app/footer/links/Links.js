import React, { Component } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import './Links.css';
// === Component Imports ===
import Social from './social/Social.js';

class Links extends Component {

  render() {
    // Check if On Mobile. If so, Remove links
    let linkDisplay;
    if (window.screen.width >= 600) {
      linkDisplay = (
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
      )
    }
    return (
    <div id="footLinksContainer">

    <div id="footLinksContainerTop">
      {linkDisplay}

      <div id="footContactContainer">
        <div className="footContactBox">
          <h3 className="footContactTitle">Hours</h3>
          <p className="footContactText"><i>By Appointment Only</i></p>
          <p className="footContactText">7 Days A Week: 8am - 6pm</p>
        </div>

        <div className="footContactBox">
          <h3 className="footContactTitle">Text or Call</h3>
          <p className="footContactText">480-258-3851</p>
        </div>

        <div className="footContactBox">
          <h3 className="footContactTitle">Email</h3>
          <p className="footContactText">SkywardTherapies@gmail.com</p>
        </div>
      </div>

      <div className="footLinksSide">
        <div className="footLinksSocialWrapper">
          <Social />
        </div>
      </div>
    </div>

    </div>
    );
  }
}

export default Links;
