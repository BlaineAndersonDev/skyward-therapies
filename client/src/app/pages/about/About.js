import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
    <div id="aboutContainer" className="comContainer">
          <h1 id="aboutSectionTitle">Skyward Therapies Founder & Therapist</h1>

            <div className="aboutContentContainer">

            <div className="aboutTextContainer">
              <div className="aboutSubSection">
                <p className="aboutText">
                  Kelli Anderson has been practicing massage therapy as a licensed professional since 2009 when she graduated from Apollo College. With a working background in both spa therapy and physical therapy clinics, she is now known for implementing the techniques of Swedish Massage into her Deep Tissue Therapy Sessions. These working experiences taught her to facilitate relaxation while also releasing the everyday stressors that are hidden within the muscle fibers. Kelli’s sessions automatically include the implementation of hot stone and aromatherapy for a truly therapeutic and rejuvenating experience. She is also extensively practiced with other massage modalities such as injury and rehabilitation massage, prenatal, and trigger point therapies. She is intuitive and attentive by nature and customizes each session to the needs of the individual that she encounters.
                </p>
              </div>
              <div className="aboutSubSection">
                <p className="aboutText">
                  In 2016, Kelli accomplished her long term goal of graduating from Arizona State University with a Bachelor’s degree in the Science of Nutrition. She went on to gain her credential with the Academy of Nutrition and Dietetics as a Nutrition and Dietetic Technician Registered (NDTR). She has first-hand experience into the struggles of gaining health prosperity and she shows great compassion and patience when helping others to reach their goals. Through Skyward Therapies LLC Kelli hopes to help others make the healthy lifestyles changes that are not only sustainable, but tangible and meaningful to them.
                </p>
              </div>
            </div>

              <div className="aboutTextContainer">
                <img src="/images/kelli_anderson_001.jpg" alt="Kelli_Anderson" id="kelliAboutImage"/>
              <div className="aboutImageSubSection">
                <p className="aboutImageText">
                  Kelli Anderson LMT, NDTR,
                </p>
              </div>
              <div className="aboutImageSubSection">
                <p className="aboutImageText">
                  Licensed Massage Therapist,
                </p>
              </div>
              <div className="aboutImageSubSection">
                <p className="aboutImageText">
                  Nutrition and Dietetic Technician Registered,
                </p>
              </div>
              <div className="aboutImageSubSection">
                <p className="aboutImageText">
                  Owner and founder of Skyward Therapies LLC
                </p>
              </div>
            </div>
          </div>

    </div>
    );
  }
}

export default About;
