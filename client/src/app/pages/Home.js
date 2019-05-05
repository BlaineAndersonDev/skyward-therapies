import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">

        <h1 className="homeBox homeHeader">Hello World!</h1>
        <p className="homeBox homeText">This is the Home page.</p>

      </div>
    );
  }
}

export default Home;
