import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">
        <div className="imageSection parallax bg1">
          <h1>Such Adorableness</h1>
        </div>
        <div className="betweenSection static">
          <h1>Section 2</h1>
        </div>
        <div className="imageSection parallax bg2">
          <h1>SO FWUFFY AWWW</h1>
        </div>
        <div className="betweenSection static">
          <h1>Section 4</h1>
        </div>
        <div className="imageSection parallax bg3">
          <h1>More words!</h1>
        </div>
        <div className="betweenSection static">
          <h1>Section 6 (The Footer!)</h1>
        </div>
      </div>
    );
  }
}

export default Home;
