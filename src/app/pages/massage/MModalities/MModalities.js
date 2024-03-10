import React, { Component } from "react";
import "./MModalities.css";
import "./ModalitiesAccordianItem/ModalitiesAccordianItem.scss";
import AccordionItem from "./ModalitiesAccordianItem/ModalitiesAccordianItem.js";

const modalities = [
  {
    title: "Swedish",
    paragraph:
      "Swedish Massage is renowned for its gentle, flowing strokes designed to relieve tension and enhance relaxation. Picture yourself enveloped in a calming atmosphere where each stroke helps dissolve stress, promoting a state of peaceful tranquility. This therapeutic experience is your gateway to a more relaxed, rejuvenated state of being, free from the day's anxieties.",
  },
  {
    title: "Deep Tissue and Trigger Point Therapies",
    paragraph:
      "Deep Tissue and Trigger Point Therapies are specialized treatments aimed at relieving severe tension in the muscles and connective tissues. These techniques are perfect for individuals experiencing chronic pain, tightness, or deep-seated knots. This intense, invigorating experience is designed to liberate your body from restricted and immobile muscles, offering a path to improved mobility and comfort.",
  },
  {
    title: "Pre/Post Surgical Massage",
    paragraph:
      "Pre/Post Surgical Massage is tailored to assist in pain relief and accelerate healing following surgery, often complementing physical therapy or chiropractic care. This specialized treatment employs gentle Swedish and lymphatic techniques to minimize swelling and fluid retention in affected areas, facilitating a smoother and quicker recovery process. Engage in these therapeutic sessions to support your body's natural healing journey and restore your well-being",
  },
  {
    title: "Prenatal / Postpartum Sessions",
    paragraph:
      "Prenatal and Postpartum Massage sessions are designed to provide vital support during and after pregnancy, addressing the unique needs of mothers-to-be and new moms. These treatments help alleviate ligament stress, improve circulation, and reduce stress hormones, contributing significantly to maternal well-being. Engage in this nurturing experience to enhance your comfort during these transformative months, ensuring a time of peace and rejuvenation.",
  },
  {
    title: "Hot/Cold Therapies",
    paragraph:
      "Hot/Cold Therapies are integrated into every session to tailor the treatment to your body's specific needs, utilizing hot stones, cold compresses, warm towels, and essential oils. These techniques regulate blood flow, addressing areas of discomfort such as a swollen knee or a tense back, enhancing the overall effectiveness of your massage experience.",
  },
  {
    title: "CranioSacral Therapy",
    paragraph:
      "CranioSacral Therapy is a gentle approach aimed at alleviating pain and tension through soft manipulations of the skull, synchronizing with the natural rhythms of your central nervous system. This tranquil, non-invasive session promotes deep relaxation and balance without the need for disrobing.",
  },
  {
    title: "Sports Massage Therapy",
    paragraph:
      "Sports Massage Therapy is designed for active individuals, focusing on assisted stretching, relieving muscle tension, and employing brisk movements. Optimal for pre-event preparation or post-event recovery, this targeted therapy helps improve performance, reduce the likelihood of injury, and aids in faster recovery, incorporating deep tissue techniques when necessary.",
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
