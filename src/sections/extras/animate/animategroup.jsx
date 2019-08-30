import React, { Component } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";

const divStyle = {
  display: "inline-block",
  width: 100,
  height: 40,
  backgroundColor: "#333",
  marginBottom: "5px"
};

class AnimateGroups extends Component {
  state = {
    play: false
  };
  render() {
    return (
      <div>
        <h4>Animated Group</h4>
        <AnimateGroup play={this.state.play}>
          <Animate
            sequenceIndex={0}
            start={{
              transform: "translateX(0px)",
              opacity: 0.2
            }}
            end={{ transform: "translateX(200px)", opacity: 1 }}
          >
            <div style={divStyle} />
          </Animate>

          <Animate
            sequenceIndex={1}
            start={{
              transform: "translateX(0px)",
              opacity: 0.2
            }}
            end={{ transform: "translateX(200px)", opacity: 1 }}
          >
            <div style={divStyle} />
          </Animate>

          <Animate
            sequenceIndex={2}
            start={{
              transform: "translateX(0px)",
              opacity: 0.2
            }}
            end={{ transform: "translateX(200px)", opacity: 1 }}
          >
            <div style={divStyle} />
          </Animate>
        </AnimateGroup>
        <button
          className="btn btn-secondary"
          onClick={() => this.setState(({ play }) => ({ play: !play }))}
        >
          {(this.state.play && "Hide") || "Show"}
        </button>
      </div>
    );
  }
}

export default AnimateGroups;
