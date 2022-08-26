import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={this.props.className}>
        <label
          htmlFor={this.props.id}
          className={this.props.labelClassName + " form-label"}
        >
          {this.props.label}
        </label>
        <div className={this.props.inputClassName}>
          <input
            className="form-control"
            type={this.props.type || "text"}
            id={this.props.id}
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value || ""}
            onChange={(ev) =>
              this.props.onChange(this.props.name, ev.target.value)
            }
          />
        </div>
      </div>
    );
  }
}
