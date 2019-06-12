import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';
import './Navigation.css';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }


  render() {

    return (
    <div id="naviContainer">
      <NavLink smooth to="/#landing" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> Home </div>
      </NavLink>
      <NavLink smooth to="/#massage" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> Massage </div>
      </NavLink>
      <NavLink smooth to="/#pricing" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> Pricing </div>
      </NavLink>
      <NavLink smooth to="/#contact" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> Contact </div>
      </NavLink>
      <NavLink smooth to="/#about" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> About </div>
      </NavLink>

      <Link to={'./'} className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText">
          Photos
        </div>
      </Link>

    </div>
    );
  }
}

export default Navigation;
