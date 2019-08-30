import React, { Component } from "react";
import Menu from "../menu";
import MovingCircle from "./animate/movingcircle";
import Spinner from "./animate/spinner";
import AnimateGroups from "./animate/animategroup";
import Sequence from "./animate/sequence";

class ReactAnimate extends Component {
  state = {};

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
          <div className="col-md-9">
            <h1>React Animate</h1>
            <p>
              For more information about React Animate, view the{" "}
              <a
                href="https://react-simple-animate.now.sh"
                target="react-animate"
              >
                documentation
              </a>
              .
            </p>
            <MovingCircle />
            <Spinner />
            <AnimateGroups />
            <h4 className="mt-3">Animated Sequence</h4>
            <Sequence />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactAnimate;
