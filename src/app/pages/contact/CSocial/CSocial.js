import React, { Component } from 'react';
import './CSocial.css';

class CSocial extends Component {
  render() {
    return (
    <div id="cSocial">
      <div className="cIconContainer cInstagramIcon">
        <img src="/images/pages/social_instagram.png" alt="Social Instagram" className="cIcon" />
      </div>
      <div className="cIconContainer cFacebookIcon">
        <img src="/images/pages/social_facebook.png" alt="Social Facebook" className="cIcon" />
      </div>
    </div>
    );
  }
}

export default CSocial;
