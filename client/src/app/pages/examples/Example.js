import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <main id="aboutWrapper">
        <section class="imageSection parallax bg1">
          <h1>Such Adorableness</h1>
        </section>
        <section class="betweenSection static">
          <h1>Section 2</h1>
        </section>
        <section class="imageSection parallax bg2">
          <h1>SO FWUFFY AWWW</h1>
        </section>
        <section class="betweenSection static">
          <h1>Section 4</h1>
        </section>
        <section class="imageSection parallax bg3">
          <h1>More words!</h1>
        </section>
      </main>
    );
  }
}

export default About;
