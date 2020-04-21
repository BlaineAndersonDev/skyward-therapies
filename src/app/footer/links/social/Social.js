import React, { Component } from 'react';
import './Social.css';

class Social extends Component {

  render() {
    const facebookIcon = (
      <a href="https://www.facebook.com/SkywardTherapies/" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
        <img
          src="images/social_icons/sky_social_icon_white_facebook.png"
          alt="Skyward Facebook"
          className="socialIcon socialIconFacebook"
        />
      </a>
    )
    const instagramIcon = (
      <a href="https://www.instagram.com/skyward_therapies/" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
        <img
          src="images/social_icons/sky_social_icon_white_instagram.png"
          alt="Skyward Instagram"
          className="socialIcon socialIconInstagram"
        />
      </a>
    )
    // const  = (
    //   <a href="https://www.SkywardTherapies.com" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
    //     <img
    //       src="images/social_icons/sky_social_icon_white_snapchat.png"
    //       alt="Skyward Snapchat"
    //       className="socialIcon socialIconSnapchat"
    //     />
    //   </a>
    // )
    // const twitterIcon = (
    //   <a href="https://www.SkywardTherapies.com" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
    //     <img
    //       src="images/social_icons/sky_social_icon_white_twitter.png"
    //       alt="Skyward Twitter"
    //       className="socialIcon socialIconTwitter"
    //     />
    //   </a>
    // )
    // const linkedinIcon = (
    //   <a href="https://www.SkywardTherapies.com" target="_blank" rel="noopener noreferrer" className="socialIconContainer">
    //     <img
    //       src="images/social_icons/sky_social_icon_white_linkedin.png"
    //       alt="Skyward Linkedin"
    //       className="socialIcon socialIconLinkedin"
    //     />
    //   </a>
    // )

    return (
      <div id="footSocialContainer">
        {facebookIcon}
        {instagramIcon}
      </div>
    );
  }
}

export default Social;
