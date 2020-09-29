import React, { Component } from "react";
import "./Gallery.css";

class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <div className="galleryImageContainer">
          <img
            src="/images/pages/Gallery01.jpg"
            alt="Filler"
            className="galleryImage"
            id="galleryImage01"
          />
        </div>

        <div className="galleryImageContainer">
          <img
            src="/images/pages/Gallery02.jpg"
            alt="Filler"
            className="galleryImage"
            id="galleryImage02"
          />
        </div>
      </div>
    );
  }
}

export default Gallery;
