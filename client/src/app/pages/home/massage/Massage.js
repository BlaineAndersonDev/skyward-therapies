import React, { Component } from 'react';
import './Massage.css';

class Massage extends Component {
  render() {
    return (
    <div id="massageContainer">
      <h1 id="massageSectionTitle">Section Title</h1>
      <div className="massageSubSection">
        <h3 className="massageSubSectionTitle">SubSection Title</h3>
        <p className="massageText">Text Text Text Text Text Text Text Text Text Text Text Text </p>
      </div>
    </div>
    );
  }
}

export default Massage;
