import React, { Component, Fragment } from "react";
import "./Modal.css";

export default class Modal extends Component {
  state = {
    isOpen: false,
  };

  render() {
    return (
      <Fragment>
        <button
          className="btn btn-info mb-3"
          onClick={() => this.setState({ isOpen: true })}
        >
          Open modal
        </button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h1>Modal title</h1>
              <p className="lead">I'm awesome modal</p>
              <button
                className="btn btn-warning text-white"
                onClick={() => this.setState({ isOpen: false })}
              >
                Close modal
              </button>
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
