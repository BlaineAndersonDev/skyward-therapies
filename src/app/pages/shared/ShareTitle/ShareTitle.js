import React, { Component } from "react";
import "./ShareTitle.css";

class ShareTitle extends Component {
  render() {
    return (
      <div id="shareTitle">
        <h1 className="shareTitleHeader">{this.props.title}</h1>
        <img
          src="/images/pages/FancyLine.png"
          alt="Watercolor Feather"
          id="shareTitleDivider"
        />
      </div>
    );
  }
}

export default ShareTitle;
