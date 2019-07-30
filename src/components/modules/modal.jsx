import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="modal" role="dialog" id={this.props.modalID}>
        <div
          className={
            this.props.modalClass === "centered"
              ? "modal-dialog modal-dialog-centered"
              : null | (this.props.modalClass === "top")
              ? "modal-dialog"
              : null | (this.props.modalClass === "scrollable")
              ? "modal-dialog modal-dialog-scrollable modal-dialog-centered"
              : null
          }
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.modalTitle}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{this.props.modalContent}</p>
            </div>
            {this.props.modalFooter === true ? (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
