import React, { Component } from "react";
import { Animate } from "react-simple-animate";

export default class App extends Component {
  state = {
    play: false
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            width: "100%",
            height: 200,
            display: "inline-block",
            backgroundColor: "#e8e8e8",
            marginBottom: 15
          }}
        >
          <Animate
            play={this.state.play} // Toggle when animation should start
            start={{
              transform: "translate(0px,0px)",
              backgroundColor: "#ccc",
              width: 20,
              height: 20,
              borderRadius: 10,
              overflow: "hidden",
              padding: "0px 0px 0px 0px",
              marginTop: 10,
              marginLeft: 10
            }}
            end={{
              transform: "translate(10px,10px)",
              backgroundColor: "#333",
              width: 160,
              height: 70,
              borderRadius: 10,
              overflow: "hidden",
              padding: "5px 15px 5px 15px"
            }}
          >
            <div
              style={{
                display: "inline-block",
                width: 40,
                height: 40
              }}
            >
              <Animate
                play={this.state.play} // Toggle when animation should start
                start={{
                  width: "100%",
                  opacity: 0,
                  whiteSpace: "nowrap"
                }}
                end={{
                  width: "100%",
                  opacity: 1,
                  whiteSpace: "nowrap"
                }}
              >
                <span style={{ color: "#fff" }}>Wording Inside</span>
              </Animate>
            </div>
          </Animate>
        </div>
        <p>
          <button
            className="btn btn-secondary"
            onClick={() => this.setState(({ play }) => ({ play: !play }))}
          >
            {(this.state.play && "Hide") || "Show"}
          </button>
        </p>
      </React.Fragment>
    );
  }
}
