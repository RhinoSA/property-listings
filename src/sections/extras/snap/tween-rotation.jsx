import React, { Component } from "react";
import { TweenMax, Draggable } from "gsap/all";

class TweenRotation extends Component {
  constructor(props) {
    super(props);
    this.wheel = null;
    this.box = null;
    this.boxOuter = null;
    this.container = null;
    this.state = {
      currentRotation: 0,
      currentXPosition: 0,
      currentYPosition: 0,
      boxPosition: 0
    };
  }

  componentDidMount() {
    const rotationSnap = 360 / 10;
    Draggable.create(this.wheel, {
      type: "rotation",
      throwProps: true,
      dragClickables: true,
      snap: endValue => Math.round(endValue / rotationSnap) * rotationSnap,
      liveSnap: this.trackRotation
    });
    Draggable.create(this.box, {
      type: "x,y",
      bounds: this.container,
      overshootTolerance: 0,
      throwProps: true,
      liveSnap: {
        x: this.trackXPosition,
        y: this.trackYPosition
      }
    });
    TweenMax.set(this.box, { x: 75, y: 175 });
    TweenMax.set(this.boxOuter, { x: -25, y: 175 });
    Draggable.create(this.boxOuter, {
      type: "x,y",
      dragResistance: 0,
      bounds: this.container,
      overshootTolerance: 0,
      throwProps: true,
      liveSnap: {
        x: function(value) {
          //snap to the closest increment of 50.
          return Math.round(value / 50) * 50;
        },
        y: function(value) {
          //snap to the closest increment of 25.
          return Math.round(value / 50) * 50;
        }
      }
    });
  }

  onDragEnd = () => {
    TweenMax.to(this.box, 0.5, {
      x: parseInt(this.state.currentXPosition, 10),
      y: parseInt(this.state.currentYPosition, 10),
      modifiers: {
        x: this.trackXPosition,
        y: this.trackYPosition
      }
    });
  };

  rotateLeft = () => {
    TweenMax.to(this.wheel, 0.5, {
      rotation: parseInt(this.state.currentRotation % 360, 10),
      modifiers: {
        rotation: this.trackRotation
      }
    });
  };

  rotateRight = () => {
    TweenMax.to(this.wheel, 0.5, {
      rotation: parseInt(this.state.currentRotation % 360, 10),
      modifiers: {
        rotation: this.trackRotation
      }
    });
  };

  trackRotation = value => {
    this.setState({ currentRotation: value });
    return value;
  };

  trackXPosition = value => {
    this.setState({ currentXPosition: value });
    return value;
  };

  trackYPosition = value => {
    this.setState({ currentYPosition: value });
    return value;
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-12">
            <h2>Draggable Elements</h2>
            <p>
              Below is an example of how one can use GSAP to create a draggable
              div.
            </p>
            <div
              style={{
                width: 450,
                marginLeft: 0,
                marginTop: 15,
                marginBottom: 15
              }}
            >
              <p
                style={{
                  width: 450,
                  marginLeft: 0,
                  marginBottom: 0,
                  backgroundColor: "#333",
                  color: "#fff",
                  padding: "5px 15px 5px 15px"
                }}
              >
                <span style={{ display: "inline-block", width: 60 }}>
                  X:&nbsp;{Math.round(this.state.currentXPosition)}
                </span>
                <span style={{ display: "inline-block", width: 60 }}>
                  Y:&nbsp;{Math.round(this.state.currentYPosition)}
                </span>
              </p>
              <div
                ref={div => (this.container = div)}
                style={{
                  width: 450,
                  height: 200,
                  backgroundColor: "rgba(0,0,0,0.1)",

                  marginBottom: 15,
                  position: "relative"
                }}
              >
                <div
                  ref={div => (this.boxOuter = div)}
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#333",
                    transformOrigin: "50% 50%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 10,
                    opacity: 0.3
                  }}
                ></div>
                <div
                  ref={div => (this.box = div)}
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#333",
                    transformOrigin: "50% 50%",
                    position: "absolute",
                    top: -25,
                    left: -25,
                    zIndex: 20
                  }}
                >
                  Box
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h2>Rotation Values with GSAP</h2>
            <p>
              This is a demonstration of how one can use GSAP to create an
              element which can be rotated and how one can show the rotation
              values as the element is rotated.
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#76a9d0",
              width: 120,
              position: "relative",
              height: 166,
              marginLeft: 15,
              marginBottom: 15,
              borderRadius: 6,
              overflow: "hidden"
            }}
          >
            <div
              style={{
                marginLeft: 0,
                padding: "4px 15px 5px 15px",
                backgroundColor: "#333",
                color: "#fff",
                fontSize: "18px",
                width: 120,
                position: "absolute",
                left: 0,
                top: 0
              }}
            >
              Rotation:&nbsp;
              {Math.abs(
                Math.round(
                  this.state.currentRotation < 0
                    ? this.state.currentRotation + 360
                    : this.state.currentRotation
                ) % 360
              )}
              &deg;
            </div>
            <div
              style={{
                width: 120,
                height: 5,
                backgroundColor: "rgba(0,0,0,0.2",
                marginLeft: 0,
                position: "absolute",
                left: 0,
                top: 0,
                marginTop: "36px"
              }}
            >
              <div
                style={{
                  width:
                    Math.abs(
                      Math.round(
                        this.state.currentRotation < 0
                          ? this.state.currentRotation + 360
                          : this.state.currentRotation
                      ) % 360
                    ) / 3,
                  height: 5,
                  backgroundColor: "#76a9d0"
                }}
              ></div>
            </div>
            <div
              style={{
                width: 120,
                height: 124,
                position: "absolute",
                left: 0,
                top: 0,
                backgroundColor: "rgba(0,0,0,0.1",
                marginTop: 41
              }}
            >
              <div
                style={{
                  cursor: "pointer",
                  width: 106,
                  height: 106,
                  backgroundColor: "#999",
                  position: "absolute",
                  borderRadius: "50%",
                  left: 7,
                  top: 7,
                  zIndex: 100
                }}
              ></div>
              <div
                className="draggable"
                id="knob"
                style={{
                  cursor: "pointer",
                  width: 100,
                  height: 100,
                  backgroundColor: "#333",
                  position: "absolute",
                  borderRadius: "50%",
                  left: 10,
                  top: 10,
                  zIndex: 100
                }}
                ref={div => (this.wheel = div)}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    position: "absolute",
                    top: 20,
                    left: 20,
                    opacity: 0.2,
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: 10
                  }}
                ></div>
                <div
                  style={{
                    width: 20,
                    height: 20,
                    position: "absolute",
                    top: 40,
                    left: 40,
                    opacity: 0.8,
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: 20
                  }}
                ></div>
                <div
                  style={{
                    width: 2,
                    height: 90,
                    position: "absolute",
                    top: 5,
                    left: 49,
                    backgroundColor: "#fff",
                    zIndex: 30
                  }}
                ></div>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    position: "absolute",
                    top: 2,
                    left: 46,
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: 30
                  }}
                ></div>
                <div
                  style={{
                    width: 8,
                    height: 8,
                    position: "absolute",
                    top: 90,
                    left: 46,
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    zIndex: 30
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenRotation;
