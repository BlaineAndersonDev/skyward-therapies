import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      showMenu: true
    };
  }

  toggleShowMenu = async () => {
    // Set the state of 'showMenu' to false IF it is currently TRUE.
    if (this.state.showMenu) {
      this.setState({ showMenu: false })
    } else {
      // Set the state of 'showMenu' to true IF it is currently FALSE.
      this.setState({ showMenu: true })
    }
  }

  render() {

    return (
    <div id="naviContainer">

      <div className={`naviLeafContainer ${this.state.showMenu ? "slideOutToRight" : "slideInFromRight"}`}>
        <div className="leaf">
          <div class="hamburger" onClick={this.toggleShowMenu}></div>
        </div>
      </div>

      <div className={`naviDisplayContainer ${this.state.showMenu ? "slideInFromTop" : "slideOutToTop"}`} >

        <Link to={'./'} className="naviLink2">
          <div className="naviLinkText2 borderBlue">
            Home
          </div>
        </Link>
        <Link to={'./'} className="naviLink2">
          <div className="naviLinkText2 borderBlue">
            Home
          </div>
        </Link>
        <Link to={'./'} className="naviLink2">
          <div className="naviLinkText2 borderBlue">
            Home
          </div>
        </Link>
        <Link to={'./'} className="naviLink2">
          <div className="naviLinkText2 borderBlue">
            Home
          </div>
        </Link>
        <Link to={'./'} className="naviLink2">
          <div className="naviLinkText2 borderBlue">
            Home
          </div>
        </Link>



          <div className="naviLink naviLinkHighlightWhite" onClick={this.toggleShowMenu}>
            <div className="naviArrow borderWhite"></div>
          </div>


      </div>

    </div>
    );
  }
}

export default Navigation;
