import React, { Component } from "react";

class Joke extends Component {
  render() {
    return (
      <React.Fragment>
        <p style={{ display: this.props.question ? "block" : "none" }}>
          <b>Question:</b> {this.props.question}
        </p>
        <p>
          <span
            style={{ display: this.props.question ? "inline-block" : "none" }}
          >
            <b>Answer:</b>&nbsp;
          </span>
          {this.props.answer}
        </p>
        <hr />
      </React.Fragment>
    );
  }
}

export default Joke;
