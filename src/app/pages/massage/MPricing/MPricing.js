import React, { Component } from "react";
import "./MPricing.css";

class MPricing extends Component {
  render() {
    return (
      <div id="mPricing">
        <ul className="mPricingList">
          <li className="mPricingListItem">30 Minute Massage: $45</li>
          <li className="mPricingListItem">60 Minute Massage: $85</li>
          <li className="mPricingListItem">90 Minute Massage: $130</li>
          <li className="mPricingListItem">120 Minute Massage: $170</li>
        </ul>
      </div>
    );
  }
}

export default MPricing;
