import React, { Component } from 'react';
import './Pricing.css';

class Pricing extends Component {
  render() {
    return (
    <div id="pricingContainer" className="comContainer">
      <h1 id="pricingSectiontitle" className="comSectiontitle">Pricing</h1>
      <div className="comSubSectionContainer">
        <p className="comSubSectionText">No matter the type of massage, sessions at Skyward Therapy are always one price and always the full time:</p>
        <ul>
          <li className="comSubSectionText">30 Minutes: $35</li>
          <li className="comSubSectionText">60 Minutes: $65</li>
          <li className="comSubSectionText">90 Minutes: $100</li>
          <li className="comSubSectionText">120 Minutes: $130</li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Pricing;
