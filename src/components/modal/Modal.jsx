import React from "react";

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    this.myModal = new bootstrap.Modal("#exampleModal");
  };

  componentDidUpdate = async () => {
    if (this.props.isOpen) {
      this.myModal.show();
    } else {
      this.myModal.hide();
    }
  };

  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {this.props.title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{this.props.renderContent()}</div>
            <div className="modal-footer">{this.props.renderButtons()}</div>
          </div>
        </div>
      </div>
    );
  }
}
