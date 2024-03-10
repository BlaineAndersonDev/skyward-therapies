import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  render() {
    return (
      <div id="profile">
        <div className="profileTextContainer">
          <h1 className="profileTitle">“Time to release stress, embrace wellness, and feel restored!”</h1>
          <p className="profileText">My name is Kelli and I am so happy you are here!</p>
          <p className="profileText">The simple action of being on this website means you are:</p>
          <ul className="profileListContainer">
            <li className="profileListText">Ready to embrace your own self care,</li>
            <li className="profileListText">Ready to invest in improving your health,</li>
            <li className="profileListText">And most importantly,</li>
            <li className="profileListText">Ready to make yourself a PRIORITY!</li>
          </ul>
          <p className="profileText">I am a Licensed Medical Massage Therapist and a Nutrition and Dietetic Technician.</p>
          <p className="profileText">My main goal is to help you in your journey of wellness!</p>
          <p className="profileText">Whether you are seeking a few hours of quiet time a week on a massage table, far away from your worries, or eating advice to improve your daily health, I am here and ready to help!</p>
        </div>
      </div>
    );
  }
}

export default Profile;
