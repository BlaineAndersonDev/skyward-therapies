import React, { Component } from "react";
import "./MModalities.css";
import "./AccordianItem/AccordianItem.scss";
import AccordionItem from "./AccordianItem/AccordionItem.js";

const modalities = [
  {
    title: "Hot Stone Massage",
    paragraph:
      "Gently heated stones are used in this massage style to increase blood circulation and calmly release tension stricken muscle fibers.",
  },
  {
    title: "Prenatal",
    paragraph:
      "Moms-to-be need special care and specific techniques. Primarily this type of massage is performed in the 2nd and 3rd trimesters when ligaments are stretching and more discomfort is overcoming the body.",
  },
  {
    title: "Trigger Point",
    paragraph:
      "A targeted therapy, similar in discomfort to deep tissue, trigger point therapy is best utilized for someone who is experiencing referring pain that is coming from another part of the body. Example: A pinched sciatic nerve causing shooting pains down the legs.",
  },
  {
    title: "Swedish Relaxation",
    paragraph:
      "When most people think of massage, swedish massage is often times what comes to mind first. Made famous in spas, swedish is relaxing, quiet, and soothing. Usually performed over the course of an hour it utilizes long even strokes to calm the mind and gently release surface tension in muscles.",
  },
  {
    title: "Deep Tissue",
    paragraph:
      "Infamously known as the “work the knots out” massage type. Many people ask for this modality, specifically seeking the release of the deeper layers of muscle that can hold the most tension. This can be an uncomfortable therapy session and typically is performed on targeted areas of the body that “pull” on one another.",
  }
];

const specialties = [
  {
    title: "Injury and Rehabilitation",
    paragraph:
      "Injury and rehabilitation massage is typically requested after an auto accident or physical incident, while undergoing physical therapy, or after you have been cleared from a surgical procedure. Tissues are often still inflamed and certain areas need a gentle release that is targeted on the muscles that are in their healing stages.",
  },
  {
    title: "5 Point Massage Session",
    paragraph:
      "Unique to Skyward Therapies LLC, the 5 point massage session is designed to address the areas that cause us the most discomfort in our daily lives, that are often ignored for other parts of the body: the feet, the hands, and the scalp/head/face. These areas are responsible for the small actions we take thousands of times a day and are most often skipped so that other areas are addressed. In this session they are made the priority and you leave feeling a type of relaxed that is remarkable!",
  },
  {
    title: "Rock and Unlock Therapy",
    paragraph: "Typically done with the clothes on, this gentle rocking method isused for people who have a hard time letting go of body holdingpatterns. A great modality if you are looking for an hour of quietmeditation but not too much physical tissue manipulation.",
  },
];

class MModalities extends Component {
  render() {
    
    return (
      <div id="mModalities">
        
        <div className="mModalitiesFirstBox mModalitiesBox">
          <h1 className="mModalitiesBoxHeader">Massage Modalities</h1>
          <ul {...{ className: "accordion-list" }}>
            {modalities.map((modalities, key) => {
              return (
                <li {...{ className: "accordion-list__item", key }}>
                  <AccordionItem {...modalities} />
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mModalitiesSecondBox mModalitiesBox">
          <h1 className="mModalitiesBoxHeader">Massage Specialties</h1>
            <ul {...{ className: "accordion-list" }}>
              {specialties.map((specialties, key) => {
                return (
                  <li {...{ className: "accordion-list__item", key }}>
                    <AccordionItem {...specialties} />
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
