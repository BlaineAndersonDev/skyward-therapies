import React, { Component } from 'react';
import './FSocial.css';

class FSocial extends Component {
  render() {
    return (
    <div id="fSocial">
      <div className="fIconContainer fInstagramIcon">
        <img src="/images/pages/social_instagram.png" alt="Social Instagram" className="fIcon" />
      </div>
      <div className="fIconContainer fFacebookIcon">
        <img src="/images/pages/social_facebook.png" alt="Social Facebook" className="fIcon" />
      </div>
    </div>
    );
  }
}

export default FSocial;
