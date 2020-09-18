import React, { Component } from "react";
import "./ShareButton.css";

class ShareButton extends Component {

  render() {
    return (
      <div id="sharedButton">
        <button className="sharedButtonButton" type="button">{this.props.text}</button>
      </div>
    );
  }
}

export default ShareButton;
