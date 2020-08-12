import React, { Component } from "react";
import "./Gallery.css";

class Gallery extends Component {
  render() {
    return (
      <div id="gallery">
        <img
          src="/images/pages/feather.jpg"
          alt="Filler"
          className="galleryImage"
          id="galleryImage01"
        />
        <img
          src="/images/pages/logo_round.png"
          alt="Filler"
          className="galleryImage"
          id="galleryImage02"
        />
        <img
          src="/images/watercolors/42.jpg"
          alt="Filler"
          className="galleryImage"
          id="galleryImage03"
        />
        <img
          src="/images/watercolors/feather-1588819_1920.jpg"
          alt="Filler"
          className="galleryImage"
          id="galleryImage04"
        />
      </div>
    );
  }
}

export default Gallery;
