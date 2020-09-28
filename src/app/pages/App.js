import React, { Component } from 'react';
import './App.css';
// === Component Imports ===
import Landing from "./landing/Landing.js";
import Welcome from './welcome/Welcome.js'
import Gallery from './gallery/Gallery.js'
import Massage from "./massage/Massage.js";
import Nutrition from './nutrition/Nutrition.js'
import Contact from './contact/Contact.js'
// === Feed Component Imports ===
import FeedGoogleReviews from "./feed/feedGoogleReviews/feedGoogleReviews.js";
// import FeedInstagram from "./feed/feedInstagram/feedInstagram.js";

class App extends Component {
  render() {
    return (
      <div id="appContainer">
        <Landing />
        <Welcome />
        <FeedGoogleReviews />
        <Nutrition />
        <Massage />
        <Gallery />
        <Contact />
      </div>
    );
  }
}

export default App;
