import React, { Component } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
    <div id="naviContainer">
      <NavLink smooth to="/#landing" className="naviLinkWrapper">
        <div className="naviLinkText"> Home </div>
      </NavLink>
      <NavLink smooth to="/#massage" className="naviLinkWrapper">
        <div className="naviLinkText"> Massage </div>
      </NavLink>
      <NavLink smooth to="/#pricing" className="naviLinkWrapper">
        <div className="naviLinkText"> Pricing </div>
      </NavLink>
      <NavLink smooth to="/#contact" className="naviLinkWrapper">
        <div className="naviLinkText"> Contact </div>
      </NavLink>
      <NavLink smooth to="/#about" className="naviLinkWrapper">
        <div className="naviLinkText"> About </div>
      </NavLink>
    </div>
    );
  }
}

export default Navigation;
