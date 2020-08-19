import React, { Component } from 'react';
import './Massage.css';

class Massage extends Component {
  render() {
    return (
    <div id="massage" className="comContainer">
      <div className="comTitleContainer">
        <div className="comUnderTitle"></div>
      </div>

      <div className="massageAllStylesContainer">

        <div className="massageIndividualStyle massageImg1">
          <div className="massageStyleTextContainer">
          </div>
        </div>

        <div className="massageIndividualStyle massageImg2">
          <div className="massageStyleTextContainer">
          </div>
        </div>


        <div className="massageIndividualStyle massageImg3">
          <div className="massageStyleTextContainer">
        </div>

        <div className="massageIndividualStyle massageImg4">
          <div className="massageStyleTextContainer">
          </div>
        </div>

        <div className="massageIndividualStyle massageImg5">
          <div className="massageStyleTextContainer">
          </div>
        </div>

      </div>
    </div>
    );
  }
}

export default Massage;
