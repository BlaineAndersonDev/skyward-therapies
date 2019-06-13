import React, { Component } from 'react';
import './Social.css';

class Social extends Component {
  render() {
    return (
    <div id="footSocialContainer">

      <a href="https://www.facebook.com/SkywardTherapies/" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
        <img
          src="images/social_icons/sky_social_icon_white_facebook.png"
          alt="Skyward Facebook"
          className="socialIcon socialIconFacebook"
        />
      </a>

      <a href="https://www.instagram.com/skywardtherapiesllc/" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
        <img
          src="images/social_icons/sky_social_icon_white_instagram.png"
          alt="Skyward Instagram"
          className="socialIcon socialIconInstagram"
        />
      </a>

      <a href="" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
        <img
          src="images/social_icons/sky_social_icon_white_snapchat.png"
          alt="Skyward Snapchat"
          className="socialIcon socialIconSnapchat"
        />
      </a>

      <a href="" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
        <img
          src="images/social_icons/sky_social_icon_white_twitter.png"
          alt="Skyward Twitter"
          className="socialIcon socialIconTwitter"
        />
      </a>

      <a href="" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
        <img
          src="images/social_icons/sky_social_icon_white_linkedin.png"
          alt="Skyward Linkedin"
          className="socialIcon socialIconLinkedin"
        />
      </a>

    </div>
    );
  }
}

export default Social;
