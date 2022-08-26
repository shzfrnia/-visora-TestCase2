import React from "react";
import ListGroupItem from "./ListGroupItem";

export default class ListGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="list-group">
        {this.props.items.map((item) => (
          <ListGroupItem
            name={item.name}
            key={item.id}
            info={item.info}
            id={item.id}
            itemClick={this.props.itemClick}
            primaryContent={item.primaryContent}
            secondaryContent={item.secondaryContent}
            renderBottomPanel={this.props.renderBottomItemPanel(item)}
          />
        ))}
      </div>
    );
  }
}
