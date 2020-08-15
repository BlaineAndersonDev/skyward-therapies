import React, { Component } from "react";
import "./MImage.css";

class MImage extends Component {
  render() {
    return (
      <div id="mImage">
        <img
          src="/images/pages/feather.png"
          alt="Watercolor Feather"
          id="mImageImage"
        />
      </div>
    );
  }
}

export default MImage;
