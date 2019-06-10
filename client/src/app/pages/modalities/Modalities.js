import React, { Component } from 'react';
import './Modalities.css';

class Modalities extends Component {
  render() {
    return (
    <div id="modalitiesContainer" className="comContainer">
      <div id="modalitiesHeader"></div>
      <div className="comTitleContainer">
        <div className="comOverTitle modalitiesTitleColor"></div>
        <h1 className="comTitle">Special Modalities</h1>
        <div className="comUnderTitle"></div>
      </div>

      <div className="modalitiesAllStyleContainer">

        <div className="modalitiesIndividualStyle">
          <div className="modalitiesOverSubTitle modalitiesTitleColor1"></div>
          <h3 className="modalitiesTitle">Injury and Rehabilitation</h3>
          <p className="modalitiesText">Injury and rehabilitation massage is typically requested after an auto-accident or physical incident, while undergoing physical therapy, or after you have been cleared from a surgical procedure. Tissues are often still inflamed and certain areas need a gentle release that is targeted on the muscles that are in their healing stages.</p>
        </div>

        <div className="modalitiesIndividualStyle modalitiesCenterStyle">
          <div className="modalitiesOverSubTitle modalitiesTitleColor2"></div>
          <h3 className="modalitiesTitle">5 Point Massage Session</h3>
          <p className="modalitiesText">Unique to Skyward Therapies LLC, the 5 point massage session is designed to address the areas that cause us the most discomfort in our daily lives, that are often ignored for other parts of the body: the feet, the hands, and the scalp/head/face. These areas are responsible for the small actions we take thousands of times a day and are most often skipped so that other areas are addressed. In this session they are made the priority and you leave feeling a type of relaxed that is remarkable!</p>
        </div>

        <div className="modalitiesIndividualStyle">
          <div className="modalitiesOverSubTitle modalitiesTitleColor3"></div>
          <h3 className="modalitiesTitle">Rock and Unlock Therapy</h3>
          <p className="modalitiesText">Typically done with the clothes on, this gentle rocking method is used for people who have a hard time letting go of body holding patterns. A great modality if you are looking for an hour of quiet meditation but not too much physical tissue manipulation.</p>
        </div>

      </div>
    </div>
    );
  }
}

export default Modalities;
