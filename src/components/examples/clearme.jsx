import React, { Component } from "react";
import ReactDOM from "react-dom";

const inputText = "Change the text...";

class Clearme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: inputText
    };
    this.updateState = this.updateState.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.inputReset = this.inputReset.bind(this);
  }
  updateState(e) {
    this.setState({ data: e.target.value });
  }
  clearInput() {
    this.setState({ data: "" });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
  inputReset() {
    this.setState({ data: inputText });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }

  render() {
    return (
      <React.Fragment>
        <h3>Clearing Inputs</h3>
        <p>
          By clicking on the button named "Clear", you can clear what is inside
          the text input field.
        </p>
        <div className="form-inline m-0">
          <div className="form-group mb-2 mr-2">
            <input
              className="form-control"
              value={this.state.data}
              onChange={this.updateState}
              ref="myInput"
            />
          </div>
          <button className="btn btn-primary mb-2" onClick={this.clearInput}>
            Clear
          </button>
          <button
            className="btn btn-primary mb-2 ml-2"
            onClick={this.inputReset}
          >
            Reset
          </button>
        </div>
        <p className="alert alert-secondary mt-2">
          {this.state.data ? this.state.data : "The text input is empty..."}
        </p>
      </React.Fragment>
    );
  }
}
export default Clearme;
