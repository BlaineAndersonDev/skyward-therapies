import React, { Component } from 'react';
import './Pricing.css';

class Pricing extends Component {
  render() {
    return (
    <div id="pricing" className="comContainer">
      <div className="comTitleContainer">
        <h1 className="comTitle">Massage Pricing</h1>
        <div className="comUnderTitle"></div>
      </div>
      <div className="pricingBoxContainer">

        <div className="pricingBox">
          <div id="pricingBoxColor1" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitlePrice">$35</p>
            <h1 className="pricingBoxTitleNumber">30</h1>
            <h1 className="pricingBoxTitleText">Minutes</h1>
          </div>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor2" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitlePrice">$65</p>
            <h1 className="pricingBoxTitleNumber">60</h1>
            <h1 className="pricingBoxTitleText">Minutes</h1>
          </div>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor3" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitlePrice">$100</p>
            <h1 className="pricingBoxTitleNumber">90</h1>
            <h1 className="pricingBoxTitleText">Minutes</h1>
          </div>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor4" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitlePrice">$130</p>
            <h1 className="pricingBoxTitleNumber">120</h1>
            <h1 className="pricingBoxTitleText">Minutes</h1>
          </div>
        </div>
      </div>

      <div className="comSectionContainer">
        <div className="comSubSectionContainer">
          <ul className="pricingIncludedContainer">
            <p className="pricingIncludedTitle">All Sessions Include:</p>
            <p className="pricingIncludedItem">Customizable Care</p>
            <p className="pricingIncludedItem">Hot Towels</p>
            <p className="pricingIncludedItem">Aromatherapy</p>
            <p className="pricingIncludedItem">Hot Stones</p>
          </ul>
        </div>
      </div>

    </div>
    );
  }
}

export default Pricing;
