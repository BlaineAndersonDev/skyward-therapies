import React, { Component } from 'react';
import './Pricing.css';

class Pricing extends Component {
  render() {
    return (
    <div id="pricing" className="comContainer">
      <div className="comTitleContainer">
        <h1 className="comTitle">Pricing</h1>
        <div className="comUnderTitle"></div>
      </div>
      <div className="pricingBoxContainer">

        <div className="pricingBox">
          <div id="pricingBoxColor1" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitlePrice">$35</p>
            <h1 className="pricingBoxTitleNumber">30</h1>
            <h1 className="pricingBoxTitleText">Minutes</h1>
          </div>
          <div className="pricingIconContainer">
            <img src="images/skyward_tree_cycle_01.png" alt="tree_cycle_01" className="pricingIcon" />
          </div>
          <ul className="pricingIncludedContainer">
            <li className="pricingIncludedTitle">Includes:</li>
            <li className="pricingIncludedItem pricingTextColor1">Customizable Care</li>
            <li className="pricingIncludedItem pricingTextColor1">Hot Towels</li>
            <li className="pricingIncludedItem pricingTextColor1">Aromatherapy</li>
            <li className="pricingIncludedItem pricingTextColor1">Hot Stones</li>
          </ul>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor2" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitlePrice">$65</p>
            <h1 className="pricingBoxTitleNumber">60</h1>
            <h1 className="pricingBoxTitleText">Minutes</h1>
          </div>
          <div className="pricingIconContainer">
            <img src="images/skyward_tree_cycle_02.png" alt="tree_cycle_02" className="pricingIcon" />
          </div>
          <ul className="pricingIncludedContainer">
            <li className="pricingIncludedTitle">Includes:</li>
            <li className="pricingIncludedItem pricingTextColor2">Customizable Care</li>
            <li className="pricingIncludedItem pricingTextColor2">Hot Towels</li>
            <li className="pricingIncludedItem pricingTextColor2">Aromatherapy</li>
            <li className="pricingIncludedItem pricingTextColor2">Hot Stones</li>
          </ul>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor3" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitlePrice">$100</p>
            <h1 className="pricingBoxTitleNumber">90</h1>
            <h1 className="pricingBoxTitleText">Minutes</h1>
          </div>
          <div className="pricingIconContainer">
            <img src="images/skyward_tree_cycle_03.png" alt="tree_cycle_03" className="pricingIcon" />
          </div>
          <ul className="pricingIncludedContainer">
            <li className="pricingIncludedTitle">Includes:</li>
            <li className="pricingIncludedItem pricingTextColor3">Customizable Care</li>
            <li className="pricingIncludedItem pricingTextColor3">Hot Towels</li>
            <li className="pricingIncludedItem pricingTextColor3">Aromatherapy</li>
            <li className="pricingIncludedItem pricingTextColor3">Hot Stones</li>
          </ul>
        </div>

        <div className="pricingBox">
          <div id="pricingBoxColor4" className="pricingBoxTitleContainer">
            <p className="pricingBoxTitlePrice">$130</p>
            <h1 className="pricingBoxTitleNumber">120</h1>
            <h1 className="pricingBoxTitleText">Minutes</h1>
          </div>
          <div className="pricingIconContainer">
            <img src="images/skyward_tree_cycle_04.png" alt="tree_cycle_04" className="pricingIcon" />
          </div>
          <ul className="pricingIncludedContainer">
            <li className="pricingIncludedTitle">Includes:</li>
            <li className="pricingIncludedItem pricingTextColor4">Customizable Care</li>
            <li className="pricingIncludedItem pricingTextColor4">Hot Towels</li>
            <li className="pricingIncludedItem pricingTextColor4">Aromatherapy</li>
            <li className="pricingIncludedItem pricingTextColor4">Hot Stones</li>
          </ul>
        </div>
      </div>

      <div className="comSectionContainer">
        <div className="comSubSectionContainer">
          <p className="comSubSectionText">Skyward Therapy proudly provides all listed services to our clients for any length of massage!</p>
        </div>
      </div>

    </div>
    );
  }
}

export default Pricing;
