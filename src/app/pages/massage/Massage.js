import React, { Component } from 'react';
import './Massage.css';
import MImage from "./MImage/MImage.js";
import MTitle from "./MTitle/MTitle.js";
import MPricing from "./MPricing/MPricing.js";
import MText from "./MText/MText.js";
import MModalities from "./MModalities/MModalities.js";

class Massage extends Component {
  render() {
    return (
      <div id="massage">
        <div className="massageFirstBox massagebox">
          <MImage />
        </div>
        <div className="massageSecondBox massagebox">
          <MTitle />
          <MPricing />
          <MText />
          <MModalities />
        </div>
      </div>
    );
  }
}

export default Massage;
