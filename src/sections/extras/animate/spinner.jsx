import React, { Component } from "react";
import { AnimateKeyframes } from "react-simple-animate";

class Spinner extends Component {
  render() {
    return (
      <div
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "#e8e8e8",
          position: "relative",
          overflow: "hidden",
          marginBottom: 15,
          marginTop: 15
        }}
      >
        <AnimateKeyframes
          play
          iterationCount="infinite"
          direction="normal"
          duration={10}
          keyframes={[
            "transform: rotate(0)",
            "transform: rotate(90deg)",
            "transform: rotate(180)",
            "transform: rotate(360deg)"
          ]}
        >
          <div
            style={{
              width: "100px",
              height: "100px",
              background: "#d8d8d8",
              transformOrigin: "0px 0px"
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#333",
                position: "relative",
                left: 30,
                top: 30,
                borderRadius: 10
              }}
            />
          </div>
        </AnimateKeyframes>
        <AnimateKeyframes
          play
          duration={6}
          keyframes={["opacity: 0", "opacity: 0.5", "opacity: 0"]}
          iterationCount="infinite"
        >
          <div
            style={{
              display: "inline-block",
              width: "100%",
              height: 100,
              backgroundColor: "#d8d8d8",
              position: "absolute",
              bottom: 0
            }}
          />
        </AnimateKeyframes>
      </div>
    );
  }
}

export default Spinner;
