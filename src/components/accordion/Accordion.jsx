import React from "react";
import AccordionItem from "./AccordionItem";

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const processedItems = {};
    this.props.headers.forEach((h) => {
      processedItems[h.id] = [];
    });
    this.props.items.forEach((item) => {
      if (processedItems.hasOwnProperty(item.headerId)) {
        processedItems[item.headerId].push(item);
      } else {
        processedItems[item.headerId] = [item];
      }
    });
    return (
      <div className="accordion">
        {this.props.headers.map((h) => (
          <AccordionItem
            name={h.name}
            key={h.id}
            id={h.id}
            content={(this.props.renderAccordionItems(processedItems[h.id]))}
          />
        ))}
      </div>
    );
  }
}
