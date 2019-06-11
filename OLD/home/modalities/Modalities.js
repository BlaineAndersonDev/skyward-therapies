import React, { Component } from 'react';
import './Modalities.css';

class Modalities extends Component {
  render() {
    return (
    <div id="modeContainer">
      <h1 id="modeSectionTitle">Special Modalities</h1>

      <div className="modeSubSection">
        <h3 className="modeSubSectionTitle">Injury and Rehabilitation</h3>
        <p className="modeText">Injury and rehabilitation massage is typically requested after an auto-accident or physical incident, while undergoing physical therapy, or after you have been cleared from a surgical procedure. Tissues are often still inflamed and certain areas need a gentle release that is targeted on the muscles that are in their healing stages.</p>
      </div>

      <div className="modeSubSection">
        <h3 className="modeSubSectionTitle">Rock and Unlock Therapy</h3>
        <p className="modeText">Typically done with the clothes on, this gentle rocking method is used for people who have a hard time letting go of body holding patterns. A great modality if you are looking for an hour of quiet meditation but not too much physical tissue manipulation.</p>
      </div>

      <div className="modeSubSection">
        <h3 className="modeSubSectionTitle">5 Point Massage Session</h3>
        <p className="modeText">Unique to Skyward Therapies LLC, the 5 point massage session is designed to address the areas that cause us the most discomfort in our daily lives, that are often ignored for other parts of the body: the feet, the hands, and the scalp/head/face. These areas are responsible for the small actions we take thousands of times a day and are most often skipped so that other areas are addressed. In this session they are made the priority and you leave feeling a type of relaxed that is remarkable!</p>
      </div>

    </div>
    );
  }
}

export default Modalities;