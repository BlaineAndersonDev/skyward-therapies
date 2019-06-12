import React, { Component } from 'react';
import './Massage.css';

class Massage extends Component {
  render() {
    return (
    <div id="massage" className="comContainer">
      <div id="massageHeader"></div>
      <div className="comTitleContainer">
        <h1 className="comTitle">Massage Styles</h1>
        <div className="comUnderTitle"></div>
      </div>

      <div className="massageAllStylesContainer">

        <div className="massageIndividualStyle massageImg1">
          <div className="massageStyleTextContainer">
            <h3 className="massageStyleTitle">Hot Stone Massage</h3>
            <p className="massageStyleText">Gently heated stones are used in this massage style to increase blood circulation and calmly release tension stricken muscle fibers.</p>
          </div>
        </div>

        <div className="massageIndividualStyle massageImg2">
          <div className="massageStyleTextContainer">
            <h3 className="massageStyleTitle">Prenatal</h3>
            <p className="massageStyleText">Moms-to-be need special care and specific techniques. Primarily this type of massage is performed in the 2nd and 3rd trimesters when ligaments are stretching and more discomfort is overcoming the body.</p>
          </div>
        </div>


        <div className="massageIndividualStyle massageImg3">
          <div className="massageStyleTextContainer">
            <h3 className="massageStyleTitle">Trigger Point</h3>
            <p className="massageStyleText">A targeted therapy, similar in discomfort to deep tissue, trigger point therapy is best utilized for someone who is experiencing referring pain that is coming from another part of the body. Example: A pinched sciatic nerve causing shooting pains down the legs.</p>
          </div>
        </div>

        <div className="massageIndividualStyle massageImg4">
          <div className="massageStyleTextContainer">
            <h3 className="massageStyleTitle">Swedish Relaxation</h3>
            <p className="massageStyleText">When most people think of massage, swedish massage is often times what comes to mind first. Made famous in spas, swedish is relaxing, quiet, and soothing. Usually performed over the course of an hour it utilizes long even strokes to calm the mind and gently release surface tension in muscles.</p>
          </div>
        </div>

        <div className="massageIndividualStyle massageImg5">
          <div className="massageStyleTextContainer">
            <h3 className="massageStyleTitle">Deep Tissue</h3>
            <p className="massageStyleText">Infamously known as the “work the knots out” massage type. Many people ask for this modality, specifically seeking the release of the deeper layers of muscle that can hold the most tension. This can be an uncomfortable therapy session and typically is performed on targeted areas of the body that “pull” on one another.</p>
          </div>
        </div>

      </div>
    </div>
    );
  }
}

export default Massage;
