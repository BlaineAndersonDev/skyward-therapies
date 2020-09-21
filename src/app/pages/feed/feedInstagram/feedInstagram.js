import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import "./feedInstagram.css";

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

class feedInstagram extends React.Component {
  render() {
    return (
      <div className="feedInstagram">
        <Carousel defaultWait={10000} maxTurns={10} swipe={true}>
            <Slide right>
              <div className="fGRItemContainer">
                <p className="fGRItemText">Ex1</p>
                <p className="fGRItemName">Ex2</p>
              </div>
            </Slide>
        </Carousel>
      </div>
    )
  }
}

export default feedInstagram;
