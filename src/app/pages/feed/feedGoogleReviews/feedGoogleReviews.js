import React, { Component } from "react";
import "./feedGoogleReviews.css";

const hardCodedReviews = [
  {
    "author_name": "Rebecca Rivera",
    "author_url": "https://www.google.com/maps/contrib/108758411036590999267/reviews",
    "language": "en",
    "profile_photo_url": "https://lh5.ggpht.com/-GAdHGA6vU9M/AAAAAAAAAAI/AAAAAAAAAAA/YWN29_ExfNU/s128-c0x00000000-cc-rp-mo/photo.jpg",
    "rating": 5,
    "relative_time_description": "3 weeks ago",
    "text": "Kelli was amazing! She was very Knowledgeable and accommodating. I will definitely be going back",
    "time": 1598477378
  },
  {
    "author_name": "Sasha Torrez",
    "author_url": "https://www.google.com/maps/contrib/103705903694607521505/reviews",
    "language": "en",
    "profile_photo_url": "https://lh5.ggpht.com/-G8wBQexciFA/AAAAAAAAAAI/AAAAAAAAAAA/AjJKSBM5f4Q/s128-c0x00000000-cc-rp-mo/photo.jpg",
    "rating": 5,
    "relative_time_description": "6 months ago",
    "text": "Everything was wonderful! I am so glad my finally gave in and got my first professional massage from Kelli! She has great attention to detail and you can tell she really cares about her clients! I feel so refreshed and can't wait for my next visit :)",
    "time": 1584491266
  },
  {
    "author_name": "Pat Byler",
    "author_url": "https://www.google.com/maps/contrib/116326219610507308303/reviews",
    "language": "en",
    "profile_photo_url": "https://lh6.ggpht.com/-kW9Up3XRKWo/AAAAAAAAAAI/AAAAAAAAAAA/6NqjT2sol5Q/s128-c0x00000000-cc-rp-mo/photo.jpg",
    "rating": 5,
    "relative_time_description": "6 months ago",
    "text": "Really enjoy having Kelli work on me.  She listens to what kind of massage I'd like that day, asks if the pressure is good (and it is - not too light, not too hard) and would adjust if necessary.  And she's just a lovely person.  I feel great after one of Kelli's massages!",
    "time": 1583284717
  },
  {
    "author_name": "Karen Scott",
    "author_url": "https://www.google.com/maps/contrib/112956429337903429508/reviews",
    "language": "en",
    "profile_photo_url": "https://lh4.ggpht.com/--7m69wwvLXY/AAAAAAAAAAI/AAAAAAAAAAA/AU-w1x9qhi0/s128-c0x00000000-cc-rp-mo/photo.jpg",
    "rating": 5,
    "relative_time_description": "6 months ago",
    "text": "Kelli is amazing! Whether you want to relax or have problem areas she will cater to your every need. Prices are affordable so give her a try. You will be happy you did and wished you called sooner!",
    "time": 1583199524
  },
  {
    "author_name": "Kristen Quiroz",
    "author_url": "https://www.google.com/maps/contrib/115171974644542084997/reviews",
    "language": "en",
    "profile_photo_url": "https://lh5.ggpht.com/-cFm8HJfW8cU/AAAAAAAAAAI/AAAAAAAAAAA/Y72sDGCX7MM/s128-c0x00000000-cc-rp-mo/photo.jpg",
    "rating": 5,
    "relative_time_description": "7 months ago",
    "text": "Kelli made my first massage so memorable! I’m a hair stylist so she knew exactly the areas I needed the most focus, she made me feel 1000% focused on. I have talked about it for weeks! She gave me a relaxation I never knew was possible. She made sure I was comfortable with everything start to finished. Especially being a first timer, she didn’t over work my body. I’ve heard other experiences from other places where they left sore and even more tight than when they walked in. I’ll be back for sure!",
    "time": 1580182744
  }
]

class feedGoogleReviews extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: null,
    };
  }

  // componentDidMount() {
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJte95vHelK4cRab7A74iRROo&fields=name,rating,formatted_phone_number,review&key=AIzaSyBNmx2xmdTZNcAQyseSzgljvxsWsxKcunI`;
  //   fetch(proxyurl + url)
  //     .then(response => response.json())
  //     .then(data => this.setState({ reviews: data.result.reviews }))
  // }

  determineDisplay = () => {
    if (this.state.reviews == null) {
      return this.generateDisplay(hardCodedReviews)
    } else {
      return this.generateDisplay(this.state.reviews)
    };
  };

  generateDisplay = (reviews) => {
    return (
      <div>
        <h1>feedGoogleReviews Section</h1>
        {reviews.map((review, index) => (
          <div key={index}>
            <p>{review.author_name}</p>
            <p>{review.author_url}</p>
          </div>
        ))}
      </div>
    );
  };

  render() {
    console.log(`RENDER: ${this.state.reviews}`)
    return (
      <div id="feedGoogleReviews">
        {this.determineDisplay()}
      </div>
    );
  }
}

export default feedGoogleReviews;
