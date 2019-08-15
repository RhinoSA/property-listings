import React, { Component } from "react";
import { Motion, spring } from "react-motion";

class MotionHeading extends Component {
  state = {
    left: 15
  };

  handleClick = val => {
    if (val && !isNaN(val)) {
      this.setState({
        left: +val
      });
    }
  };

  reset = () => this.setState({ left: 15 });

  render() {
    return (
      <React.Fragment>
        <Motion
          defaultStyle={{ left: -100 }}
          style={{ left: spring(this.state.left) }}
        >
          {val => (
            <h1 style={{ whiteSpace: "nowrap", position: "absolute", ...val }}>
              React Motion
            </h1>
          )}
        </Motion>
        <div
          className="input-group"
          style={{ marginTop: 60, marginBottom: 15 }}
        >
          <input
            type="number"
            className="form-control"
            placeholder="Enter a value..."
            ref={input => (this.input = input)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-secondary"
              onClick={() => this.handleClick(this.input.value)}
            >
              Shift
            </button>
            <button className="btn btn-primary" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MotionHeading;
