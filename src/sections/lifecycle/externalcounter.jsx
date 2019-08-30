import React, { Component } from "react";
import { ActionButton } from "./actionbutton";

let externalCounter = 0;

export class ExternalCounter extends Component {
  incrementCounter = () => {
    externalCounter++;
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <ActionButton
          theme="secondary"
          callback={this.incrementCounter}
          text="External Counter"
        />
        <div className="h5 mt-3">External: {externalCounter}</div>
      </div>
    );
  }
}
