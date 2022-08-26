import React from "react";

export default class AccordionItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const accordionHeaderId = `panelsStayOpen-${this.props.id}`;
    const accordionCollapseIdOpen = `panelsStayOpen-${accordionHeaderId}`;
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={accordionHeaderId}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${accordionCollapseIdOpen}`}
            aria-expanded="false"
            aria-controls={accordionCollapseIdOpen}
          >
            {this.props.name}
          </button>
        </h2>
        <div
          id={accordionCollapseIdOpen}
          className="accordion-collapse collapse"
          aria-labelledby={accordionHeaderId}
        >
          <div className="accordion-body">
              {this.props.content}
          </div>
        </div>
      </div>
    );
  }
}
