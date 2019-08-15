import React, { Component } from "react";
import Modal from "../modules/modal";

class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Modal One
      modalID: "one",
      modalCall: "#one",
      modalTitle: "Modal Title One",
      modalContent: modalContentTwo,
      modalClass: "centered",
      modalFooter: false,
      // Modal Two
      modalID2: "two",
      modalCall2: "#two",
      modalTitle2: "Modal Title Two",
      modalContent2: modalContent,
      modalClass2: "scrollable",
      modalFooter2: true
    };
  }
  render() {
    return (
      <React.Fragment>
        <Modal
          modalID={this.state.modalID}
          modalTitle={this.state.modalTitle}
          modalContent={this.state.modalContent}
          modalClass={this.state.modalClass}
          modalFooter={this.state.modalFooter}
        />
        <Modal
          modalID={this.state.modalID2}
          modalTitle={this.state.modalTitle2}
          modalContent={this.state.modalContent2}
          modalClass={this.state.modalClass2}
          modalFooter={this.state.modalFooter2}
        />
      </React.Fragment>
    );
  }
}

export default Modals;
