import React, { Component } from "react";
import "./MPricing.css";

class MPricing extends Component {
  render() {
    return (
      <div id="mPricing">
        <ul className="mPricingList">
          <li className="mPricingListItem">30 Minutes - $40</li>
          <li className="mPricingListItem">60 Minutes - $75</li>
          <li className="mPricingListItem">90 Minutes - $120</li>
          <li className="mPricingListItem">120 Minutes - $150</li>
        </ul>
      </div>
    );
  }
}

export default MPricing;
