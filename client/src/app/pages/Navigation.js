import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

      <Link to={'./'} className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText">
          Home
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText">
          Massage
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText">
          Contact
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText">
          About
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightBlue">
        <div className="naviLinkText">
          Blog
        </div>
      </Link>
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
