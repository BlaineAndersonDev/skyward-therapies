import React, { Component } from "react";
import "./MPricing.css";

class MPricing extends Component {
  render() {
    return (
      <div id="mPricing">
        <ul className="mPricingList">
          <li className="mPricingListItem">30 Minute Massage: $55</li>
          <li className="mPricingListItem">60 Minute Massage: $115</li>
          <li className="mPricingListItem">90 Minute Massage: $170</li>
          <li className="mPricingListItem">120 Minute Massage: $230</li>
        </ul>
        <div className="mGratuity">~ No Gratuity Necessary ~</div>
        <a href="https://www.massagebook.com/therapists/SkywardTherapies/widget/services"><img src="http://www.massagebook.com/home/img/getbutton/button-booknow.png" alt="Book Now on MassageBook.com!" border="0"></img></a>
      </div>
    );
  }
}

export default MPricing;
