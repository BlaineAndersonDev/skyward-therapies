import React, { Component } from 'react';
import './Headshot.css';

class Headshot extends Component {
  render() {
    return (
      <div id="headshot">
        <img
          // src="/images/pages/kelli_headshot_2.jpg"
          src="/images/pages/gallery/006.jpg"
          alt="Kelli_Anderson"
          id="headshotImage"
        />
      </div>
    );
  }
}

export default Headshot;
