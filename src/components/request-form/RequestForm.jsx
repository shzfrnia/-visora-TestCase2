import React from "react";
import Input from "../inputs/input/Input";

export default class RequestForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const fields = [
      {
        id: "name",
        label: "ФИО",
        value: this.props.request?.name,
      },
      {
        id: "jobPosition",
        label: "Должность",
        value: this.props.request?.jobPosition,
      },
      {
        id: "document",
        label: "Документ",
        value: this.props.request?.document,
      },
      {
        id: "transportNumber",
        label: "Номер транспорта",
        value: this.props.request?.transportNumber,
      },
    ];
    return (
      <form>
        {fields.map((field) =>
          this.props.editMode ? (
            <Input
              className="mb-3 row"
              name={field.id}
              label={field.label}
              labelClassName="col-sm-3"
              inputClassName="col-sm-9"
              id={field.id}
              key={field.id}
              value={field.value}
              onChange={this.props.onChange}
            />
          ) : (
            <div className="mb-3 row" key={field.id}>
              <span className="col-sm-3">{field.label}</span>
              <span className="col-sm-9">{field.value}</span>
            </div>
          )
        )}
      </form>
    );
  }
}
