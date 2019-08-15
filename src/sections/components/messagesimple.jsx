import React, { Component } from "react";
import { ActionButton } from "./actionbutton";
import { CountDisplay } from "./countdisplay";

export default class MessageSimple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <CountDisplay
          theme="secondary"
          message={`Counter: ${this.state.counter}`}
        />
        <ActionButton
          theme="secondary"
          {...this.props}
          callback={this.incrementCounter}
        />
        {this.state.counter === 0 ? (
          <p className="mt-2">Click on the "Increment Counter" button...</p>
        ) : (
          <p className="mt-2">Thank you for clicking on the button :)</p>
        )}
      </React.Fragment>
    );
  }
}
