import React, { Component } from "react";
import Menu from "../menu";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import TodoExample from "./transitiongroup";
import SpinExample from "./spin";

class ReactReveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: "First Item" },
        { id: 2, text: "Another Item" },
        { id: 3, text: "Last One" }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9" style={{ overflow: "hidden" }}>
            <h1>React Reveal</h1>
            <p>
              For more information see the{" "}
              <a href="https://www.react-reveal.com" target="reveal">
                React Reveal
              </a>{" "}
              documentation.
            </p>
            <h2>Fade</h2>
            <Fade left>
              <p
                style={{
                  backgroundColor: "#333",
                  color: "#fff",
                  textAlign: "center",
                  padding: "5px 15px 5px 15px"
                }}
              >
                Fade Effect
              </p>
            </Fade>
            <h2>Zoom</h2>
            <Zoom>
              <p
                style={{
                  backgroundColor: "#333",
                  color: "#fff",
                  textAlign: "center",
                  padding: "5px 15px 5px 15px"
                }}
              >
                Zoom Effect
              </p>
            </Zoom>
            <h2>Transition Group</h2>
            <TodoExample />
            <h2>Slide Duration</h2>
            <div style={{ overflow: "hidden" }}>
              <Slide left duration={3000}>
                <p
                  style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    textAlign: "center",
                    padding: "5px 15px 5px 15px"
                  }}
                >
                  Duration 3000
                </p>
              </Slide>
              <Slide left duration={5000}>
                <p
                  style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    textAlign: "center",
                    padding: "5px 15px 5px 15px"
                  }}
                >
                  Duration 5000
                </p>
              </Slide>
            </div>
            <h2>Slide Delayed</h2>
            <div style={{ overflow: "hidden" }}>
              <Slide left delay={3000} duration={3000}>
                <p
                  style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    textAlign: "center",
                    padding: "5px 15px 5px 15px"
                  }}
                >
                  Delayed 3000
                </p>
              </Slide>
              <Slide left delay={6000} duration={3000}>
                <p
                  style={{
                    backgroundColor: "#333",
                    color: "#fff",
                    textAlign: "center",
                    padding: "5px 15px 5px 15px"
                  }}
                >
                  Delayed 6000
                </p>
              </Slide>
            </div>
            <h2>Cascade</h2>
            <Fade top cascade>
              <ul className="list-unstyled">
                <li>Item One</li>
                <li>Item Two</li>
                <li>Item Three</li>
                <li>Item Four</li>
                <li>Item Five</li>
              </ul>
            </Fade>
            <h2>Spin</h2>
            <SpinExample />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactReveal;
