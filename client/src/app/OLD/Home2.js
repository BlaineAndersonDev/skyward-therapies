import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id="homeContainer">
        <div id="homeImageOne">
        </div>
        <div id="homeImageTwo">
        </div>

        <div id="homeBoxOne" className="homeBox">
          <h1 id="homeImageText">Skyward Therapies</h1>
        </div>

        <div id="homeBoxTwo" className="homeBox">

          <h1 className="homeServiceTitleText">Massage Therapy Services:</h1>

          <div className="homeServiceSection">
            <p className="homeServiceSubTitleText">Deep tissue massage:</p>
            <p className="homeServiceDescText">Deep tissue massage is a type of massage therapy that focuses on realigning deeper layers of muscles. It is used for chronic aches and pain and contracted areas such as a stiff neck and upper back, low back pain, leg muscle tightness, and sore shoulders.</p>
          </div>

          <div className="homeServiceSection">
            <p className="homeServiceSubTitleText">Hot Stone Therapy:</p>
            <p className="homeServiceDescText">Hot stone massage is a specialty massage where the therapist uses smooth, heated stones as an extension of their own hands, or by placing them on the body. The heat can be both deeply relaxing and help warm up tight muscles so the therapist can work more deeply, more quickly.</p>
          </div>

          <div className="homeServiceSection">
            <p className="homeServiceSubTitleText">Post-Injury Massage:</p>
            <p className="homeServiceDescText">Our post-injury massage focuses on increasing the blood flow to the affected area while helping the body dispose of the waste bi-products during the healing process.  It helps speed up the overall recovery of the affected area.</p>
          </div>

          <div className="homeServiceSection">
            <p className="homeServiceSubTitleText">Reflexology:</p>
            <p className="homeServiceDescText">Reflexology, also known as zone therapy, involves application of pressure to the feet and hands with specific thumb, finger, and hand techniques.  It is based on a system of zones and reflex areas that purportedly reflect an image of the body on the feet and hands, with the premise that such work effects a physical change to the body.</p>
          </div>

        </div>

        <div id="homeBoxThree" className="homeBox"></div>

        <div id="homeBoxfour" className="homeBox"></div>

      </div>
    );
  }
}

export default Home;
