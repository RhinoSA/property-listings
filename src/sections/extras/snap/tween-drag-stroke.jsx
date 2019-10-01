import React, { Component } from "react";
import { TweenMax, Draggable } from "gsap/all";

const info = {
  color: "#ecf0f1",
  fontSize: "26pt",
  textAlign: "center",
  position: "absolute",
  width: "100%",
  marginTop: 205,
  top: 0,
  left: 3
};

const container = {
  position: "relative",
  width: "280px",
  height: "280px",
  marginTop: 15,
  marginBottom: 15,
  backgroundColor: "#181A19",
  padding: 0,
  overflow: "hidden",
  borderRadius: "50%",
  border: "solid 2px #333",
  cursor: "pointer"
};

const rotator = {
  width: "280px",
  height: "280px",
  position: "absolute",
  top: -2,
  left: "0px",
  zIndex: 100,
  backgroundColor: "none",
  opacity: 1,
  display: "inline-block",
  borderRadius: "50%"
};

const dialValue = {
  marginTop: 81,
  color: "#ecf0f1",
  fontSize: "66px",
  lineHeight: 0,
  paddingTop: 58,
  borderRadius: "50%",
  position: "absolute",
  width: 121,
  height: 121,
  textAlign: "center",
  top: -2,
  left: 79,
  zIndex: 50
};

const svgStyle = {
  position: "absolute",
  top: -2,
  width: "284.1px",
  height: "218.7px",
  left: -2,
  zIndex: 20
};

const outline = {
  fill: "none",
  stroke: "#181A19",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 200,
  strokeMiterlimit: "10"
};

const dialLineStyle = {
  stroke: "rgba(90,90,90,1)",
  strokeWidth: 62,
  strokeMiterlimit: "10",
  fill: "none",
  zIndex: 100,
  opacity: 1
};

const dialLineBackStyle = {
  fill: "none",
  stroke: "#92c6ee",
  opacity: 1,
  strokeWidth: 60,
  strokeMiterlimit: "10",
  position: "absolute",
  zIndex: 100
};

class TweenDragStroke extends Component {
  constructor(props) {
    super(props);
    //this.path = React.createRef();
    this.rotator = null;
    this.maxRotation = 250;
    this.svgNode = null;
    this.container = null;
    this.dialValue = null;
    this.dialLineBack = null;
    this.dialLineBg = null;
    this.info = null;
    //this.dialLine = new TimelineMax({ repeat: -1, yoyo: true });
    this.outline = null;
    this.rotationOffset = -145;
    this.RAD2DEG = 180 / Math.PI;
    this.pathLength = null;
    this.state = {
      currentRotation: 0,
      currentXPosition: 0,
      currentYPosition: 0,
      boxPosition: 0
    };
  }

  componentDidMount() {
    //this.pathLength = this.path.current.getTotalLength();
    //console.log(this.pathLength);
    // 471.15802001953125
    const rotationSnap = 360 / 10;
    Draggable.create(this.rotator, {
      type: "rotation",
      bounds: { maxRotation: this.maxRotation, minRotation: 0 },
      throwProps: true,
      dragClickables: true,
      snap: endValue => Math.round(endValue / rotationSnap) * rotationSnap,
      liveSnap: this.trackRotation
    });
  }

  rotateLeft = () => {
    TweenMax.to(this.rotator, 0.5, {
      rotation: parseInt(this.state.currentRotation % 360, 10),
      modifiers: {
        rotation: this.trackRotation
      }
    });
  };

  rotateRight = () => {
    TweenMax.to(this.rotator, 0.5, {
      rotation: parseInt(this.state.currentRotation % 360, 10),
      modifiers: {
        rotation: this.trackRotation
      }
    });
  };

  trackRotation = value => {
    this.setState({ currentRotation: Math.round((value * 100) / 250) });
    return value;
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <h2>Rotating an SVG Stroke</h2>
          <div style={container} ref={div => (this.container = div)}>
            <div id="null-object"></div>
            <div
              style={{
                width: 90,
                height: 4,
                marginTop: 202,
                right: -7,
                top: 0,
                backgroundColor: "#181A19",
                position: "absolute",
                transform: "rotate(215deg)",
                zIndex: 500
              }}
            ></div>
            <div
              style={{
                width: 90,
                height: 4,
                marginTop: 202,
                left: -3,
                top: 0,
                backgroundColor: "#181A19",
                position: "absolute",
                transform: "rotate(145deg)",
                zIndex: 500
              }}
            ></div>
            <div ref={div => (this.rotator = div)} style={rotator}></div>
            <div
              id="dial-value"
              style={dialValue}
              ref={div => (this.dialValue = div)}
            >
              {this.state.currentRotation}
            </div>
            <div id="info" style={info} ref={div => (this.info = div)}>
              DRAG DIAL
            </div>
            <svg
              id="svg-node"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 284.1 218.7"
              ref={svg => (this.svgNode = svg)}
              style={svgStyle}
            >
              <path
                id="outline"
                style={outline}
                ref={path => (this.outline = path)}
                d="M209.8,184.7l47.6,31.2
	c13.7-21.3,21.6-46.7,21.6-73.9c0-75.7-61.3-137-137-137S5,66.3,5,142c0,27.2,7.9,52.6,21.6,73.9l48-30.8"
              />
              <path
                id="dial-line-bg"
                style={dialLineBackStyle}
                ref={path => (this.dialLineBack = path)}
                d="M49.4,201.2
	C38.4,184,32,163.7,32,141.8c0-60.8,49.2-110,110-110s110,49.2,110,110c0,21.9-6.4,42.2-17.4,59.4"
              />
              <path
                id="dial-line"
                style={dialLineStyle}
                strokeDasharray={471.15802001953125}
                strokeDashoffset={
                  (-471.15802001953125 * this.state.currentRotation) / 100
                }
                ref={path => (this.dialLine = path)}
                //ref={this.path}
                d="M49.4,201.2
	C38.4,184,32,163.7,32,141.8c0-60.8,49.2-110,110-110s110,49.2,110,110c0,21.9-6.4,42.2-17.4,59.4"
              />
            </svg>

            <div id="container"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenDragStroke;
