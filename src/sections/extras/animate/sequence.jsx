import React, { Component } from "react";
import { Animate, AnimateGroup } from "react-simple-animate";

class Sequence extends Component {
  state = {
    play: false
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: 325,
            height: 60,
            overflow: "hidden",
            backgroundColor: "#d8d8d8",
            margin: "15px 0px 15px 0px",
            paddingLeft: 10,
            position: "relative"
          }}
        >
          <AnimateGroup play={this.state.play}>
            {["R", "E", "A", "C", "T"].map((item, index) => {
              return (
                <Animate
                  key={item}
                  direction="reverse"
                  sequenceIndex={index}
                  duration={0.2}
                  end={{
                    opacity: 0,
                    transform: "translateY(-20px)"
                  }}
                  start={{
                    opacity: 1,
                    transform: "translateY(0)"
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: "#333",
                      color: "#fff",
                      float: "left",
                      borderRadius: 25,
                      margin: 5
                    }}
                  />
                </Animate>
              );
            })}
          </AnimateGroup>
        </div>
        <p>
          <button
            className="btn btn-secondary"
            onClick={() => this.setState(({ play }) => ({ play: !play }))}
          >
            Play
          </button>
        </p>
      </React.Fragment>
    );
  }
}

export default Sequence;
