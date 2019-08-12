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
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Editor submit={this.submitData} />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <Display data={this.state.formData} />
        </div>
      </div>
    );
  }
}
