import React from "react";
import Button from "./../inputs/button/Button";

export default class ListGroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a
        className="list-group-item list-group-item-action"
        aria-current="true"
        onClick={() => this.props.itemClick(this.props.id)}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.name}</h5>
          <small>{this.props.info}</small>
        </div>
        <p className="mb-1">{this.props.primaryContent}</p>
        <small>{this.props.secondaryContent}</small>
        <hr/>
        {this.props.renderBottomPanel}
      </a>
    );
  }
}
