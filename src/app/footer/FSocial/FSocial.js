import React, { Component } from 'react';
import './FSocial.css';

class FSocial extends Component {
  render() {
    return (
    <div id="fSocial">
      <a href="https://www.instagram.com/skyward.therapies.nutrition/" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
        <div className="fIconContainer fInstagramIcon">
          <img src="/images/pages/social_instagram.png" alt="Social Instagram" className="fIcon" />
       </div>
      </a>
      <a href="https://www.facebook.com/SkywardTherapies/" target="_blank" rel="noopener noreferrer">
       <div className="fIconContainer fFacebookIcon">
          <img src="/images/pages/social_facebook.png" alt="Social Facebook" className="fIcon" />
        </div>
      </a>
    </div>
    );
  }
}

export default FSocial;
