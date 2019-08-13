import React, { Component } from "react";
import Modal from "../modules/modal";
import $ from "jquery";

const modalContent = (
  <React.Fragment>
    Pellentesque eu quam consequat, hendrerit arcu vel, vestibulum ante. Fusce
    interdum non mi et tempor. Suspendisse eros nisi, dapibus ac egestas ut,
    vulputate ac mi. Nullam mauris sem, maximus a mollis eu, ornare ac mi.
    Curabitur in viverra mauris. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. In dolor turpis, dignissim ac elit in, iaculis porttitor
    magna.
    <br />
    <br />
    Integer porta, purus vel laoreet vulputate, quam ipsum iaculis leo, non
    gravida magna diam vitae nisi. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas.
  </React.Fragment>
);

const modalContentTwo = (
  <React.Fragment>
    Integer porta, purus vel laoreet vulputate, quam ipsum iaculis leo, non
    gravida magna diam vitae nisi. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Etiam egestas
    suscipit efficitur. Cras in mauris velit. Pellentesque eu quam consequat,
    hendrerit arcu vel, vestibulum ante. Fusce interdum non mi et tempor.
    Suspendisse eros nisi, dapibus ac egestas ut, vulputate ac mi. Nullam mauris
    sem, maximus a mollis eu, ornare ac mi.
    <br />
    <br />
    Curabitur in viverra mauris. Lorem ipsum dolor sit amet, consectetur
    adipiscing elit. In dolor turpis, dignissim ac elit in, iaculis porttitor
    magna. Integer porta, purus vel laoreet vulputate, quam ipsum iaculis leo,
    non gravida magna diam vitae nisi. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas.
  </React.Fragment>
);

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
        <p>
          <button
            type="button"
            id="btnone"
            className="btn btn-secondary btn-sm"
            data-toggle="modal"
            data-target={this.state.modalCall}
          >
            Modal One
          </button>

          <button
            type="button"
            className="btn btn-secondary btn-sm ml-2"
            data-toggle="modal"
            data-target={this.state.modalCall2}
          >
            Modal Two
          </button>
        </p>
      </React.Fragment>
    );
  }
}

export default Modals;
