import React, { Component } from "react";
import "./ShareButton.css";

class ShareButton extends Component {
  handleClick = () => {
    
  };

  render() {
    return (
      <div id="sharedButton">
        <button className="sharedButtonButton" type="button" onClick={this.handleClick}>{this.props.text}</button>
      </div>
    );
  }
}

export default ShareButton;
