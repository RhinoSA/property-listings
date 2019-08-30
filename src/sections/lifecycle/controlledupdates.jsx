import React, { Component } from "react";
import { MessageNew } from "./messagenew";

class ControlledUpdates extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterLeft: 0,
      counterRight: 0
    };
  }

  incrementCounter = counter => {
    if (counter === "left") {
      this.setState({ counterLeft: this.state.counterLeft + 1 });
    } else {
      this.setState({ counterRight: this.state.counterRight + 1 });
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <MessageNew
            message={`Left: ${this.state.counterLeft}`}
            callback={() => this.incrementCounter("left")}
            text="Increment Left"
          />
        </div>
        <div className="col-md-6">
          <MessageNew
            message={`Right: ${this.state.counterRight}`}
            callback={() => this.incrementCounter("right")}
            text="Increment Right"
          />
        </div>
      </div>
    );
  }
}

export default ControlledUpdates;
