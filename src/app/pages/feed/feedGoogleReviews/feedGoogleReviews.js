// This example is live editable
import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import "./feedGoogleReviews.css";
import hardCodedReviews from "./feedGoogleReviewsJSON.json";

const CarouselUI = ({ children }) => <div className="acontainer">{children}</div>;
const Carousel = makeCarousel(CarouselUI);

class feedGoogleReviews extends React.Component {
  render() {
    return (
      <Carousel defaultWait={2000} /*wait for 1000 milliseconds*/ >
        {hardCodedReviews.map((review, index) => (
          <Slide right>
            <div key={index} className="fGRItemContainer">
              <img src={review.profile_photo_url} className="fGRItemImage" alt="Review001" />
              <h2>{review.rating}</h2>
              <h2>{review.text}</h2>
              <p>{review.author_name}</p>
              <p>{review.author_url}</p>
            </div>
          </Slide>
        ))}
      </Carousel>
    )
  }
}

export default feedGoogleReviews;
