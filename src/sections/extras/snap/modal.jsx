import React, { Component } from "react";
// modal component
import ModalComponent from "./gsap-modal";

class GSAPModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
    this.setModalVisible = this.setModalVisible.bind(this);
  }

  setModalVisible = v => this.setState({ modalVisible: v });

  render() {
    return (
      <React.Fragment>
        <h2>State Controlled Modal</h2>
        <p>
          Animates a modal in and out by changing the state of the component.
        </p>
        <p>
          In this sample the modal animation is controlled by changing the state
          of the main component, then this state is passed as a prop to the
          modal component. The in/out animation of the modal depends on the
          value of this prop passed to it.
        </p>
        <p>
          A close method is also passed to the modal component as a prop, in
          order to hide the modal using a close button inside the modal
          component.
        </p>

        <button
          className="btn btn-info"
          onClick={this.setModalVisible.bind(null, true)}
        >
          Show Modal
        </button>
        <hr />

        <h4>Main Component State</h4>
        <pre className="p-2">{JSON.stringify(this.state, null, 2)}</pre>

        <h4>Modal Component Props</h4>
        <pre className="p-2">
          {JSON.stringify(
            {
              visible: this.state.modalVisible
            },
            null,
            2
          )}
        </pre>

        <ModalComponent
          visible={this.state.modalVisible}
          close={this.setModalVisible.bind(null, false)}
        />
      </React.Fragment>
    );
  }
}

export default GSAPModal;
