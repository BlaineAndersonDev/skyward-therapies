import React, { Component } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
    <div id="naviContainer">
      <NavLink smooth to="/#landing" className="naviLinkWrapper naviTextWrapper">
        <div className="naviLinkText"> Home </div>
      </NavLink>
      <NavLink smooth to="/#massage" className="naviLinkWrapper naviTextWrapper">
        <div className="naviLinkText"> Massage </div>
      </NavLink>
      <NavLink smooth to="/#pricing" className="naviLinkWrapper naviTextWrapper">
        <div className="naviLinkText"> Pricing </div>
      </NavLink>
      <NavLink smooth to="/#nutrition" className="naviLinkWrapper naviTextWrapper">
        <div className="naviLinkText"> Nutrition </div>
      </NavLink>
      <NavLink smooth to="/#contact" className="naviLinkWrapper naviTextWrapper">
        <div className="naviLinkText"> Schedule </div>
      </NavLink>
      <NavLink smooth to="/#about" className="naviLinkWrapper naviTextWrapper">
        <div className="naviLinkText"> About </div>
      </NavLink>
    </div>
    );
  }
}

export default Navigation;
