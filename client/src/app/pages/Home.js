import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">

        <div id="homeBoxOne" className="homeBox">
          <img id="homeImage" src="/images/skyward_tree_003.jpg" alt="skywardTree"/>
          <h1 id="homeImageText">Skyward Therapies</h1>
        </div>

        <div className="homeBoxTwo" className="homeBox">
          <p></p>
        </div>

        <div className="homeBoxThree" className="homeBox"></div>

        <div className="homeBoxfour" className="homeBox"></div>

      </div>
    );
  }
}

export default Home;
