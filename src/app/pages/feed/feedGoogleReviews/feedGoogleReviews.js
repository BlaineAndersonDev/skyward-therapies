import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import "./feedGoogleReviews.css";
import hardCodedReviews from "./feedGoogleReviewsJSON.json";

const CarouselUI = ({ position, total, handleClick, children }) => (
  <div className="fGRCarouselContainer">
    <div className="fGRCarouselChildren">
      {children}
    </div>
    <div className="fGRCarouselDots">
      {Array(...Array(total)).map((val, index) =>
        <div className="fGRCarouselDot" key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ '}
        </div>
      )}
    </div>
  </div>
);
const Carousel = makeCarousel(CarouselUI);

class feedGoogleReviews extends React.Component {
  render() {
    return (
      <div className="feedGoogleReviews">
        <Carousel defaultWait={10000} maxTurns={10} swipe={true}>
          {hardCodedReviews.map((review, index) => (
            <Slide key={index} right>
              <div className="fGRItemContainer">
                <p className="fGRItemText">{review.text}</p>
                <p className="fGRItemName">-{review.author_name}</p>
              </div>
            </Slide>
          ))}
        </Carousel>
      </div>
    )
  }
}

export default feedGoogleReviews;
