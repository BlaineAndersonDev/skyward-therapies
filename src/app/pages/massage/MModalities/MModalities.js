import React, { Component } from "react";
import "./MModalities.css";
import "./ModalitiesAccordianItem/ModalitiesAccordianItem.scss";
import AccordionItem from "./ModalitiesAccordianItem/ModalitiesAccordianItem.js";

const modalities = [
  {
    title: "Swedish",
    paragraph:
      "Characterized by long flowing medium/light connective strokes, this is the “original” type of massage! This will surely relax you into a nap and help you forget about whatever is worrying you.",
  },
  {
    title: "Deep Tissue and Trigger Point Therapies",
    paragraph:
      "As the names imply, these are the therapies that target the deeper tissues and are more focused on pinning down locked muscles and frictioning out stubborn clustered muscle tissues. A word of caution, it’s INTENSE!",
  },
  {
    title: "Pre/Post Surgical Massage",
    paragraph:
      "This treatments focus is to help alleviate pain and expedite healing. Typically performed in tandem with your physical therapy and or chiropractic care plans. These sessions utilize light Swedish and or lymphatic techniques that help reduce swelling and fluid retention in affected areas. ",
  },
  {
    title: "Prenatal / Postpartum Sessions",
    paragraph:
      "There is no more imperative time in a woman's life to receive the best care than when she is carrying and or caring for a new baby (or babies). Massages helps relieve ligament stress during pregnancy, helps increase milk supply, increases blood circulation, and helps reduce the stress hormones that can be triggered in these essential months. When in doubt, a time out for mom- never hurts!",
  },
  {
    title: "Hot/Cold Therapies",
    paragraph:
      "As mentioned above, hot and cold therapies are included in every session. These include hot stones, cold compresses, warm towels, and essential oils. These methods are used to assist in allowing blood flow to increase or decrease in an area. Imagine a swollen knee needing ice or tight back needing heat, and you now have a better understanding as to why these therapies drastically increase improved results by the end of your massage.",
  },
  {
    title: "CranioSacral Therapy",
    paragraph:
      "A type of massage therapy intended to relieve pain and tension by gentle manipulations of the skull often regarded as harmonizing with a natural rhythm in the central nervous system. This is a meditative type of session that is very gentle, with very little manipulation and no need to undress. ",
  },
  {
    title: "Sports Massage Therapy",
    paragraph:
      "This type of massage is typically indicative of assisted stretching, pinning of muscle tension, and brisk movements. This therapy is best performed a day before, or early in the day 2 hours before a sporting event. For recovery from an event, it is suggested to receive a deep tissue with stretching incorporated.",
  }
];

class MModalities extends Component {
  render() {
    
    return (
      <div id="mModalities">
        <p className="mModalitiesText">Don’t know what to ask for at your massage session? </p>
        <p className="mModalitiesText">Below is what is offered at Skyward Therapies:</p>

        <div className="mModalitiesBox">
          <h1 className="mModalitiesBoxHeader">Medical Massage Modalities</h1>
          <ul {...{ className: "modAccordion-list" }}>
            {modalities.map((modalities, key) => {
              return (
                <li {...{ className: "modAccordion-list__item", key }}>
                  <AccordionItem {...modalities} />
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    );
  }
}

export default MModalities;
