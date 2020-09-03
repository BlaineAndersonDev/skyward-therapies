import React, { Component } from 'react';
import './CMap.css';

class CMap extends Component {
  render() {
    return (
    <div id="cMap">
      <iframe 
      className="cMapMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4435811198473!2d-111.78691498421229!3d33.43774805730742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872ba577bc79efb5%3A0xea449188efc0be69!2sSkyward%20Therapies%20LLC!5e0!3m2!1sen!2sus!4v1599153356799!5m2!1sen!2sus" 
        frameborder="0" 
        allowfullscreen="" 
        aria-hidden="false" 
        tabindex="0"
        title="MapOfLocation" 
      />
    </div>
    );
  }
}

export default CMap;
