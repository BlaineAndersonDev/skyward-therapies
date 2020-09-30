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
              src="/images/pages/gallery/001.jpg"
              alt="Filler"
              className="sGalleryImage"
              id="sGalleryImage01"
            />
          </div>
          <div className="sGalleryImageContainer">
            <img
              src="/images/pages/gallery/002.jpg"
              alt="Filler"
              className="sGalleryImage"
              id="sGalleryImage02"
            />
          </div>
          <div className="sGalleryImageContainer">
            <img
              src="/images/pages/gallery/003.jpg"
              alt="Filler"
              className="sGalleryImage"
              id="sGalleryImage03"
            />
          </div>
          <div className="sGalleryImageContainer">
            <img
              src="/images/pages/gallery/004.jpg"
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
