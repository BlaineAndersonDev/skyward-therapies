import React, { Component } from 'react';
import './CSocial.css';

class CSocial extends Component {
  render() {
    return (
      <div id="cSocial">
        
        <a href="https://www.facebook.com/SkywardTherapies/" target="_blank" rel="noopener noreferrer" className="cIconContainer cFB">
          <img src="/images/pages/social_facebook.png" alt="Facebook-Icon" className="cIcon" />
        </a>

        <a href="https://www.massagebook.com/biz/SkywardTherapies#services" target="_blank" rel="noopener noreferrer" className="cIconContainer cMassageBook">
          <img src="/images/pages/social_massagebook.png" alt="GMaps-Icon" className="cIcon" />
        </a>

        <a href="https://www.instagram.com/skyward.therapies.nutrition/" target="_blank" rel="noopener noreferrer" className="cIconContainer cInsta">
          <img src="/images/pages/social_instagram.png" alt="Insta-Icon" className="cIcon" />
        </a>

      </div>
    );
  }
}

export default CSocial;
