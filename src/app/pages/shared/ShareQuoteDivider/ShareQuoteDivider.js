import React, { Component } from "react";
import "./ShareQuoteDivider.css";

class ShareQuoteDivider extends Component {
  render() {
    return (
      <div id="shareQuoteDivider"
        style={{
          backgroundImage: `url("/images/pages/${this.props.imageFileName}")`
        }}
      >
        <div className="shareQuoteContainer">
          <h1 className="shareQuoteText">"{this.props.quote}"</h1>
          <p className="shareQuoteAuthor">-{this.props.author}</p>
        </div>
      </div>

    );
  }
}

export default ShareQuoteDivider;
