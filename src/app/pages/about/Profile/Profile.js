import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <div className="profileTextContainer">
          <h1 className="profileTitle">Kelli Anderson</h1>
          <p className="profileText">
            Kelli Anderson has been practicing massage therapy as a licensed
            professional since 2009 when she graduated from Apollo College. With
            a working background in both spa therapy and physical therapy
            clinics, she is now known for implementing the techniques of Swedish
            Massage into her Deep Tissue Therapy Sessions. These working
            experiences taught her to facilitate relaxation while also releasing
            the everyday stressors that are hidden within the muscle fibers.
          </p>
          <p className="profileText">
            Kelli’s sessions automatically include the implementation of hot
            stone and aromatherapy for a truly therapeutic and rejuvenating
            experience. She is also extensively practiced with other massage
            modalities such as injury and rehabilitation massage, prenatal, and
            trigger point therapies. She is intuitive and attentive by nature
            and customizes each session to the needs of the individual that she
            encounters.
          </p>
        </div>
      </div>
    );
  }
}

export default Profile;
