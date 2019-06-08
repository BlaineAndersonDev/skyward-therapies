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
      <NavLink smooth to="/#landingContainer" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> Home </div>
      </NavLink>
      <NavLink smooth to="/#missionContainer" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> Mission </div>
      </NavLink>
      <NavLink smooth to="/#massageContainer" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> Massage </div>
      </NavLink>
      <NavLink smooth to="/#contactContainer" className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText"> Contact </div>
      </NavLink>
      <NavLink smooth to="/#aboutContainer" className="naviLink naviLinkHighlightBlue">
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
