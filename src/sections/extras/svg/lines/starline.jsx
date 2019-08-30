import React, { Component } from "react";
import "./starline.css";
class StarLine extends Component {
  constructor(props) {
    super(props);
    this.path = React.createRef();
    this.state = {
      classAnimate: "pathstar start",
      classCircleAnimate: "circle start"
    };
  }

  componentDidMount() {
    const pathLength = this.path.current.getTotalLength();
    console.log(pathLength);
  }

  addClass = event => {
    if (this.state.classAnimate === "pathstar start") {
      this.setState({ classAnimate: "pathstar pause" });
      this.setState({ classCircleAnimate: "circle pause" });
    } else {
      this.setState({ classAnimate: "pathstar start" });
      this.setState({ classCircleAnimate: "circle start" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="starbox" id="starbox">
          <div className={this.state.classCircleAnimate} />
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 502.763 473.47"
            className="pathshape"
          >
            <path
              className="fillstar"
              d="M97.26,466.886l59.224-176.528L7.841,184.845
          c0,0,68.692,0,92.348,0s91.679,0,91.679,0L251.195,7.862l59.388,176.983h184.336L346.038,290.469l59.246,176.518l-153.97-109.319
          L97.26,466.886z"
            />
            <path
              ref={this.path}
              className={this.state.classAnimate}
              d="M97.26,466.886l59.224-176.528L7.841,184.845
          c0,0,68.692,0,92.348,0s91.679,0,91.679,0L251.195,7.862l59.388,176.983h184.336L346.038,290.469l59.246,176.518l-153.97-109.319
          L97.26,466.886z"
            />
          </svg>
        </div>
        <p>
          <button className="btn btn-secondary" onClick={this.addClass}>
            {this.state.classAnimate === "pathstar start" ? "Pause" : "Play"}
          </button>
        </p>
      </React.Fragment>
    );
  }
}

export default StarLine;
