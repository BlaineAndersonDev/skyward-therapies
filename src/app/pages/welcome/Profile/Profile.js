import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <div className="profileTextContainer">
          <h1 className="profileTitle">I am so happy you are here!</h1>
          <p className="profileText">I'm Kelli Anderson, your Licensed Massage Therapist (LMT) and Nutrition Expert.</p>
          <p className="profileText">With professional certifications as a Medical Massage Practitioner (MMP) and a Nutrition and Dietetic Technician (NDTR), I specialize in holistic health solutions.</p>
          <p className="profileText">By visiting my site, you're taking a significant step towards embracing self-care routines, investing in your health and well-being, and prioritizing your mental and physical health.</p>
          {/* <ul className="profileListContainer">
            <li className="profileListText">Ready to embrace your own self care,</li>
            <li className="profileListText">Ready to invest in improving your health,</li>
            <li className="profileListText">And most importantly,</li>
            <li className="profileListText">Ready to make yourself a PRIORITY!</li>
          </ul> */}
          <p className="profileText">I am committed to assisting you on your wellness journey.</p>
          <p className="profileText">Whether you're seeking therapeutic massage services to alleviate stress, recovering from injury, or looking for personalized nutrition advice to enhance your lifestyle, I am here to support your health goals.</p>
        </div>
      </div>
    );
  }
}

export default Profile;
