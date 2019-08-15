import React from "react";
import Spin from "react-reveal/Spin";

class SpinExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    return (
      <div>
        <Spin spy={this.state.counter}>
          <div
            style={{
              display: "inline-block",
              width: 40,
              height: 40,
              backgroundColor: "#333",
              position: "relative",
              top: 10
            }}
          />
        </Spin>
        <p>
          <button
            className="btn btn-success mt-4"
            type="button"
            onClick={this.handleClick}
          >
            Click Counter: {this.state.counter}
          </button>
        </p>
        <small className="form-text text-muted">
          Apply Spin animation, when the counter is changed
        </small>
      </div>
    );
  }
}

export default SpinExample;
