import React, { Component } from "react";
import "./ModalitiesAccordianItem.scss";

class ModalitiesAccordianItem extends Component {
  state = {
    opened: false
  }

  render() {
    const {
      props: {
        paragraph,
        title
      },
      state: {
        opened
      }
    } = this

    return (
      <div
        {...{
          className: `modAccordion-item, ${opened && 'modAccordion-item--opened'}`,
          onClick: () => { this.setState({ opened: !opened }) }
        }}
      >
        <div {...{ className: 'modAccordion-item__line' }}>
          <h3 {...{ className: 'modAccordion-item__title' }}>
            {title}
          </h3>
          <span {...{ className: 'modAccordion-item__icon' }} />
        </div>
        <div {...{ className: 'modAccordion-item__inner' }}>
          <div {...{ className: 'modAccordion-item__content' }}>
            <p {...{ className: 'modAccordion-item__paragraph' }}>
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalitiesAccordianItem;
