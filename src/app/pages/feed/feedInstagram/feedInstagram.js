import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import "./feedInstagram.css";

const CarouselUI = ({ position, total, handleClick, children }) => (
  <div className="fICarouselContainer">
    <div className="fICarouselChildren">
      {children}
    </div>
    <div className="fICarouselDots">
      {Array(...Array(total)).map((val, index) =>
        <div className="fICarouselDot" key={index} onClick={handleClick} data-position={index}>
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
        <h1 className="fITitle">Follow us on Instagram: <a href="https://www.instagram.com/skyward.therapies.nutrition/" target="_blank" rel="noopener noreferrer" className="fITitleButton">@skyward.therapies.nutrition</a></h1>
        <Carousel defaultWait={10000} maxTurns={10} swipe={true}>
            <Slide right>
              <a href="https://www.instagram.com/p/CECye1gJfVO/" className="fIItemContainer" target="_blank" rel="noopener noreferrer">
                <img src="/images/pages/insta_001.jpg" className="fIItem" alt="Instagram_001" />
              </a>
            </Slide>
            <Slide right>
              <a href="https://www.instagram.com/p/B5osJSAlOuu/" className="fIItemContainer" target="_blank" rel="noopener noreferrer">
                <img src="/images/pages/insta_002.jpg" className="fIItem" alt="Instagram_002" />
              </a>
            </Slide>
            <Slide right>
              <a href="https://www.instagram.com/p/B_bag3hp1lG/" className="fIItemContainer" target="_blank" rel="noopener noreferrer">
                <img src="/images/pages/insta_003.jpg" className="fIItem" alt="Instagram_003" />
              </a>
            </Slide>
            <Slide right>
              <a href="https://www.instagram.com/p/B9pXxELlsQr/" className="fIItemContainer" target="_blank" rel="noopener noreferrer">
                <img src="/images/pages/insta_004.jpg" className="fIItem" alt="Instagram_004" />
              </a>
            </Slide>
            <Slide right>
              <a href="https://www.instagram.com/p/CAMOnUYJQbL/" className="fIItemContainer" target="_blank" rel="noopener noreferrer">
                <img src="/images/pages/insta_005.jpg" className="fIItem" alt="Instagram_005" />
              </a>
            </Slide>
        </Carousel>
      </div>
    )
  }
}

export default feedInstagram;
