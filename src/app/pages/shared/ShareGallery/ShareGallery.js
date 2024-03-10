import React, { Component } from "react";
import "./ShareGallery.css";

class ShareGallery extends Component {

  landscapeImages = []
  portraitImages = []

  render() {
    return (
      <div id="sGallery">

          <div className="sGalleryImageContainer">
            <img
              src="/images/pages/gallery/010.jpg"
              alt="Filler"
              className="sGalleryImage"
              id="sGalleryImage01"
            />
          </div>
          <div className="sGalleryImageContainer">
            <img
              src="/images/pages/gallery/007.jpg"
              alt="Filler"
              className="sGalleryImage"
              id="sGalleryImage02"
            />
          </div>
          <div className="sGalleryImageContainer">
            <img
              src="/images/pages/gallery/008.jpg"
              alt="Filler"
              className="sGalleryImage"
              id="sGalleryImage03"
            />
          </div>
          <div className="sGalleryImageContainer">
            <img
              src="/images/pages/gallery/009.jpg"
              alt="Filler"
              className="sGalleryImage"
              id="sGalleryImage04"
            />
          </div>

      </div>
    );
  }
}

export default ShareGallery;
