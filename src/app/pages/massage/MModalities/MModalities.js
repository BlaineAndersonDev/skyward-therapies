import React, { Component } from "react";
import "./MModalities.css";

class MModalities extends Component {
  render() {
    return (
      <div id="mModalities">
        <div className="mModalitiesFirstBox">
          <div className="mModalitiesContainer">
            <h3 className="modalitiesTitle">Injury and Rehabilitation</h3>
            <p className="modalitiesText">
              Injury and rehabilitation massage is typically requested after an
              auto-accident or physical incident, while undergoing physical
              therapy, or after you have been cleared from a surgical procedure.
              Tissues are often still inflamed and certain areas need a gentle
              release that is targeted on the muscles that are in their healing
              stages.
            </p>
          </div>
        </div>
        <div className="mModalitiesSecondBox"></div>
      </div>
    );
  }
}

export default MModalities;
