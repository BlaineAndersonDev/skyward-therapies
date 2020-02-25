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
            <p className="pricingBoxTitleNumber">30</p>
            <p className="pricingBoxTitlePrice">$35</p>
            <p className="pricingBoxTitleText">Minutes</p>
          </div>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor2" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitleNumber">60</p>
            <p className="pricingBoxTitlePrice">$65</p>
            <p className="pricingBoxTitleText">Minutes</p>
          </div>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor3" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitleNumber">90</p>
            <p className="pricingBoxTitlePrice">$100</p>
            <p className="pricingBoxTitleText">Minutes</p>
          </div>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor4" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitleNumber">120</p>
            <p className="pricingBoxTitlePrice">$130</p>
            <p className="pricingBoxTitleText">Minutes</p>
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
