import React, { Component } from "react";

class ThemeButton extends Component {
  state = {};

  handleClick = (event, capturePhase = false) => {
    console.log(
      `ThemeButton: Type: ${event.type}` +
        `Target: ${event.target.tagName}` +
        ` CurrentTarget: ${event.currentTarget.tagName}` +
        ` Theme: ${this.props.theme}`
    );
    // THIS IS THE INITIAL CAPTURE PHASE OF THE EVENT
    if (capturePhase) {
      if (this.props.theme === "danger") {
        event.stopPropagation();
        console.log("Stopped event");
      } else {
        console.log("Skipped function prop: capture phase");
      }
      // THIS IS CALLED WHEN EVENT BUBBLES
    } else if (event.bubbles && event.currentTarget !== event.target) {
      console.log("Skipped function prop: bubble phase");
      // THIS IS CALLED WHEN THE INITIAL FUNCTION IS INVOKED
    } else {
      console.log("Invoked function prop");
      this.props.callback(this.props.theme);
      alert(
        "This is the event that is called when it reaches the span's onClick handler. The capture phase is skipped and the bubble phases are also skipped."
      );
    }
  };
  render() {
    return (
      <span
        className="mr-2"
        onClick={this.handleClick}
        onClickCapture={e => this.handleClick(e, true)}
      >
        <button
          className={`btn btn-${this.props.theme}`}
          onClick={this.handleClick}
        >
          {this.props.theme} Theme
        </button>
      </span>
    );
  }
}

export default ThemeButton;
