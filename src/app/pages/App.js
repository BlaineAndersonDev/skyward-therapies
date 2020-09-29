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
// === Segway Divider ===
import ShareQuoteDivider from "./shared/ShareQuoteDivider/ShareQuoteDivider.js";

class App extends Component {
  render() {
    return (
      <div id="appContainer">
        <Landing />
        <Welcome />
        <FeedGoogleReviews />
        <Nutrition />
        <ShareQuoteDivider
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          author="Blaine Anderson"
          imageFileName="segment.jpg"
        />
        <Massage />
        <Gallery />
        <ShareQuoteDivider
          quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          author="Blaine Anderson"
          imageFileName="segment2.jpg"
        />
        <Contact />
      </div>
    );
  }
}

export default App;
