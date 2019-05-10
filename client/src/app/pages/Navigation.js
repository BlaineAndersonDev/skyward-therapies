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
        <div className="naviLinkText borderBlue">
          Home
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightGreen">
        <div className="naviLinkText borderGreen">
          Home
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightYellow">
        <div className="naviLinkText borderYellow">
          Home
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightRed">
        <div className="naviLinkText borderRed">
          Home
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightPurple">
        <div className="naviLinkText borderPurple">
          Home
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightBrown">
        <div className="naviLinkText borderBrown">
          Home
        </div>
      </Link>
      <Link to={'./'} className="naviLink naviLinkHighlightWhite">
        <div className="naviLinkText borderWhite">
          Home
        </div>
      </Link>

    </div>
    );
  }
}

export default Navigation;
