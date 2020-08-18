import React, { Component } from "react";
import "./MText.css";

class MText extends Component {
  render() {
    return (
      <div id="mText">
        <p className="mTextText">All Sessions Include:</p>
        <p className="mTextText">
          Customizable Care, Hot Towels, Aromatherapy, and Hot Stones.
        </p>
      </div>
    );
  }
}

export default MText;
