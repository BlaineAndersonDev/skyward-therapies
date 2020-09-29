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

import quotes from "./Quotes.json"
const randomlySelectedQuoteId = Number(Math.floor((Math.random() * quotes.length)));

class App extends Component {
  render() {
    let randomQuote001 = [];
    let randomQuote002 = [];
    if (Number(randomlySelectedQuoteId) === 8) {
      randomQuote001 = quotes[randomlySelectedQuoteId];
      randomQuote002 = quotes[0];
    } else {
      randomQuote001 = quotes[randomlySelectedQuoteId];
      randomQuote002 = quotes[randomlySelectedQuoteId + 1];
    }
    return (
      <div id="appContainer">
        <Landing />
        <Welcome />
        <FeedGoogleReviews />
        <Nutrition />
        <ShareQuoteDivider
          quote={randomQuote001.quote}
          author={randomQuote001.author}
          imageFileName="segment.jpg"
        />
        <Massage />
        <Gallery />
        <ShareQuoteDivider
          quote={randomQuote002.quote}
          author={randomQuote002.author}
          imageFileName="segment.jpg"
        />
        <Contact />
      </div>
    );
  }
}

export default App;
