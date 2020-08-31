import React, { Component } from "react";
import "./NutritionAccordianItem.scss";

class NutritionAccordianItem extends Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { paragraph, title },
      state: { opened },
    } = this;

    return (
      <div
        {...{
          className: `nutAccordion-item, ${opened && "nutAccordion-item--opened"}`,
          onClick: () => {
            this.setState({ opened: !opened });
          },
        }}
      >
        <div {...{ className: "nutAccordion-item__line" }}>
          <h3 {...{ className: "nutAccordion-item__title" }}>{title}</h3>
          <span {...{ className: "nutAccordion-item__icon" }} />
        </div>
        <div {...{ className: "nutAccordion-item__inner" }}>
          <div {...{ className: "nutAccordion-item__content" }}>
            <p {...{ className: "nutAccordion-item__paragraph" }}>{paragraph}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NutritionAccordianItem;
