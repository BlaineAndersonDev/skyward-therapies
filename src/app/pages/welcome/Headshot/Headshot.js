import React, { Component } from 'react';
import './Headshot.css';

class Headshot extends Component {
  render() {
    return (
      <div id="headshot">
        <img
          src="/images/pages/kelli_headshot.png"
          alt="Kelli_Anderson"
          id="headshotImage"
        />
      </div>
    );
  }
}

export default Headshot;
