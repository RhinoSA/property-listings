import React, { Component } from "react";

export class ActionButton extends Component {
  render() {
    console.log(`Render ActionButton (${this.props.text}) Component `);
    return (
      <button
        className={`btn btn-${this.props.theme}`}
        onClick={this.props.callback}
      >
        {this.props.text}
      </button>
    );
  }
}
