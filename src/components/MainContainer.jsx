import React from "react";
import Accordion from "./accordion/Accordion";
import ListGroup from "./list-group/ListGroup";
import Modal from "./modal/Modal";
import Header from "./header/header";
import RequestForm from "./request-form/RequestForm";
import Button from "./inputs/button/Button";
import API from "../API";
import { DateUtilites } from "../utils/date-utils";

export default class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestStatuses: [],
      requests: [],
      modal: {
        isOpen: false,
        request: null,
        editMode: false,
      },
    };
  }

  componentDidMount = async () => {
    const requestStatuses = await API.getRequestStatuses();
    const requests = await API.getRequests();
    this.setState(() => ({
      requestStatuses,
      requests,
    }));
  };

  handleClickByRequest = (requestId) => {
    this.setState((state) => ({
      modal: {
        ...state.modal,
        isOpen: true,
        request: { ...state.requests.filter((r) => r.id == requestId)[0] },
      },
    }));
  };

  // componentDidUpdate = async () => {
  //   this.render();
  // };

  handleUpdateModalInput = (name, newValue) => {
    const updatedRequest = { ...this.state.modal.request };
    updatedRequest[name] = newValue;
    this.setState((state) => ({
      modal: { ...state.modal, request: updatedRequest },
    }));
  };

  resetModalChanges = () => {
    this.setState((state) => ({
      modal: {
        ...state.modal,
        request: {
          ...state.requests.filter((r) => r.id == state.modal.request.id)[0],
        },
      },
    }));
  };

  setModalEditMode = (bool) => {
    this.setState((state) => ({
      modal: { ...state.modal, editMode: bool },
    }));
  };

  saveRequest = async (updatedRequest) => {
    const requests = await API.updateRequest(updatedRequest);
    this.setState(() => ({
      requests,
    }));
  };

  closeModal = () => {
    this.setState({ modal: { isOpen: false } });
  };

  acceptRequest = async (request) => {
    request.statusId = 1;
    this.saveRequest(request);
  };

  rejectRequest = async (request) => {
    request.statusId = 2;
    this.saveRequest(request);
  };

  releaseRequest = async (request) => {
    request.statusId = 0;
    this.saveRequest(request);
  };

  getRequestButtons = (request) => {
    const acceptBtn = (
      <Button
        key="accept"
        onClick={(ev) => {
          ev.stopPropagation();
          this.acceptRequest(request);
        }}
        className="me-1 btn-success"
        name="Принять"
      />
    );
    const rejectBtn = (
      <Button
        key="reject"
        onClick={(ev) => {
          ev.stopPropagation();
          this.rejectRequest(request);
        }}
        className="me-1 btn-danger"
        name="Отказать"
      />
    );
    const releaseBtn = (
      <Button
        key="release"
        onClick={(ev) => {
          ev.stopPropagation();
          this.releaseRequest(request);
        }}
        className="me-1 btn-info"
        name="Выпустить"
      />
    );
    return {
      0: [rejectBtn, acceptBtn],
      1: [releaseBtn],
      2: [acceptBtn],
    }[request.statusId];
  };

  render() {
    const headers = this.state.requestStatuses.map((h) => ({
      ...h,
      name: `${h.name} (${
        this.state.requests.filter((r) => r.statusId == h.id).length
      })`,
    }));
    const items = this.state.requests.map((item) => ({
      ...item,
      headerId: item.statusId,
      info: DateUtilites.formatTimeStamp(item.creationDate),
      primaryContent: `Должность: ${item.jobPosition}`,
      secondaryContent: [
        ["Документ", item.document],
        ["Номер транспорта", item.transportNumber],
      ].map((el) => (
        <div key={el[0]}>
          <span>{`${el[0]}: `}</span>
          <span>{el[1]}</span>
        </div>
      )),
    }));
    return (
      <div className="main">
        <Modal
          title="Заявка"
          isOpen={this.state.modal.isOpen}
          renderButtons={() => (
            <div>
              <Button
                onClick={this.closeModal}
                className="me-1"
                name="Закрыть"
              />
              {this.state.modal.editMode ? (
                <Button
                  onClick={() => {
                    this.resetModalChanges();
                    this.setModalEditMode(false);
                  }}
                  className="btn-danger me-1"
                  name="Отмена"
                />
              ) : null}
              {this.state.modal.editMode ? (
                <Button
                  onClick={() => {
                    this.saveRequest(this.state.modal.request);
                    this.setModalEditMode(false);
                  }}
                  className="btn-success"
                  name="Сохранить"
                />
              ) : (
                <Button
                  onClick={() => this.setModalEditMode(true)}
                  className="btn-primary"
                  name="Редактировать"
                />
              )}
            </div>
          )}
          renderContent={() => (
            <RequestForm
              onChange={this.handleUpdateModalInput}
              request={this.state.modal.request}
              editMode={this.state.modal.editMode}
            />
          )}
        />
        <Header />
        <Accordion
          headers={headers}
          items={items}
          renderAccordionItems={(items) => (
            <ListGroup
              itemClick={this.handleClickByRequest}
              items={items}
              renderBottomItemPanel={this.getRequestButtons}
            />
          )}
        />
      </div>
    );
  }
}
