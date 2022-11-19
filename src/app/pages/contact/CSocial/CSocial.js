import React, { Component } from 'react';
import './CSocial.css';

class CSocial extends Component {
  render() {
    return (
      <div id="cSocial">

        <a href="https://www.facebook.com/SkywardTherapies/" target="_blank" rel="noopener noreferrer" className="cIconContainer cFB tooltip">
          <img src="/images/pages/social_facebook.png" alt="Facebook-Icon" className="cIcon" />
          <span className="tooltiptext">Check us out on Facebook</span>
        </a>

        <a href="https://www.massagebook.com/biz/SkywardTherapies#services" target="_blank" rel="noopener noreferrer" className="cIconContainer cMassageBook tooltip">
          <img src="/images/pages/social_massagebook.png" alt="GMaps-Icon" className="cIcon" />
          <span className="tooltiptext">Book an appointment on Massagebook</span>
        </a>

        <a href="https://www.instagram.com/skyward.therapies/" target="_blank" rel="noopener noreferrer" className="cIconContainer cInsta tooltip">
          <img src="/images/pages/social_instagram.png" alt="Insta-Icon" className="cIcon" />
          <span className="tooltiptext">Follow us on Instagram</span>
        </a>

        <a href="http://yelp.com/biz/skyward-therapies-mesa?utm_medium=badge_button&amp;utm_source=biz_review_badge" target="_blank" rel="noopener noreferrer" className="cIconContainer cYelp tooltip">
          <img src="/images/pages/social_yelp.png" alt="Yelp-Icon" className="cIcon" />
          <span className="tooltiptext">Review us on Yelp</span>
        </a>

      </div>
    );
  }
}

export default CSocial;
