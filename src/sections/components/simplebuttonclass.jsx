import React, { Component } from "react";

export class SimpleButtonClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasButtonBeenClicked: false,
      counter: 0
    };
  }

  onMouseDown = () => {
    this.setState({ hasButtonBeenClicked: true });
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <button
        onClick={this.props.callback}
        onMouseDown={this.onMouseDown}
        className={`btn btn-${this.props.className}`}
        disabled={
          this.props.disabled === true || this.props.disabled === "true"
        }
      >
        {this.props.text} ({this.state.counter})
        {this.state.hasButtonBeenClicked && <span>- Clicked</span>}
      </button>
    );
  }
}
