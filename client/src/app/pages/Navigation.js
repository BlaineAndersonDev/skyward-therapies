import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggled: false
    };
  }

  toggle = async () => {
    // Set the state of 'toggled' to false IF it is currently TRUE.
    if (this.state.toggled) {
      this.setState({ toggled: false })
    } else {
      // Set the state of 'toggled' to true IF it is currently FALSE.
      this.setState({ toggled: true })
    }
  }


  render() {
    let navigationDisplay = ( <div></div> );
    if (this.state.toggled) {
      navigationDisplay = (
        <div>
          <div className="naviBox"></div>

          <div className="naviBox">
            <Link to={'./'} className="naviLink">
              Home
            </Link>
            <Link to={'./about'} className="naviLink">
              About
            </Link>
          </div>

          <div className="naviBox"></div>
        </div>
      )
    } else {
      navigationDisplay = (
        <div class="hamburger" onClick={this.toggle}></div>
      )
    }

    return (
    <div id="naviContainer">
      {navigationDisplay}
    </div>
    );
  }
}

export default Nav;
