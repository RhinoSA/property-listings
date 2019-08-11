import React, { Component } from "react";
import { Editor } from "./editor";
import { Display } from "./display";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  submitData = newData => {
    this.setState({ formData: newData });
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <Editor submit={this.submitData} />
        </div>
        <div className="col-6">
          <Display data={this.state.formData} />
        </div>
      </div>
    );
  }
}
