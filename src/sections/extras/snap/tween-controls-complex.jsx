import React, { Component } from "react";
import { TweenMax, TimelineMax, Draggable } from "gsap/all";
import BlipSimple from "./blip-simple";

class TweenControlsComplex extends Component {
  // logo container
  logoContainer = null;
  // drag knob
  draggableKnob = null;
  // Draggable instance
  knobDragInstance = null;
  // logo tween
  logoTween = null;
  constructor(props) {
    super(props);
    this.state = {
      currentRotation: 0,
      time: 0
    };
  }

  logoTweenUpdate = () => {
    TweenMax.set(this.draggableKnob, {
      rotation: this.logoTween.progress() * 360,
      time: this.logoTween.time(),
      modifiers: {
        rotation: this.trackRotation,
        time: this.trackTime
      }
    });
    this.knobDragInstance[0].update();
  };

  // draggable update
  dragKnobUpdate = () => {
    this.logoTween.progress(this.knobDragInstance[0].rotation / 360);
  };

  percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  };

  componentDidMount() {
    // create logo tween
    this.logoTween = new TimelineMax({
      paused: true,
      onUpdate: this.logoTweenUpdate
    })
      .to(this.logoContainer, 2, {
        x: 280,
        width: 150,
        marginTop: 12,
        opacity: 1
      })
      .to(this.logoContainer, 1, {
        rotation: 360,
        width: 150,
        transformOrigin: "center",
        prop: 360
      });
    //

    this.knobDragInstance = Draggable.create(this.draggableKnob, {
      type: "rotation",
      liveSnap: this.trackRotation,
      bounds: {
        minRotation: 0,
        maxRotation: 360
      },
      onPress: () => this.logoTween.pause(),
      onDrag: this.dragKnobUpdate,
      modifiers: {
        rotation: this.trackRotation
      }
    });
  }

  trackRotation = value => {
    this.setState({ currentRotation: value });
    return value;
  };

  trackTime = value => {
    this.setState({ time: value });
    return value;
  };

  render() {
    return (
      <React.Fragment>
        <h2>Complex Controls</h2>
        <p>{parseFloat(this.state.time).toFixed(2)}</p>
        <p>Animates the GSAP logo to the right of it's original position.</p>
        <div className="mb-2 btn-group">
          <button
            className="btn btn-info"
            onClick={() => this.logoTween.play()}
          >
            Play
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTween.reverse()}
          >
            Reverse
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTween.restart()}
          >
            Restart
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.logoTween.pause()}
          >
            Pause
          </button>
        </div>
        <div
          style={{
            position: "relative",
            width: 400,
            height: 200,
            backgroundColor: "rgba(0,0,0,0.1)",
            marginTop: 15,
            marginBottom: 15,
            overflow: "hidden"
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width:
                Math.round(this.percentage(this.state.currentRotation, 360)) *
                4,
              height: 5,
              backgroundColor: "rgba(0,0,0,0.2)"
            }}
          ></div>
          <p
            style={{
              position: "absolute",
              bottom: 0,
              left: 15,
              backgroundColor: "#333",
              borderRadius: 6,
              padding: "3px 0px 4px 0px",
              width: 52,
              textAlign: "center",
              color: "#fff",
              zIndex: 100
            }}
          >
            {Math.round(this.percentage(this.state.currentRotation, 360))}%
          </p>
          <div
            style={{
              width: 70,
              height: 70,
              backgroundColor: "#ccc",
              borderRadius: "50%",
              position: "absolute",
              marginTop: 5,
              marginLeft: 5,
              zIndex: 100
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                backgroundColor: "#333",
                border: "solid 2px #fff",
                borderRadius: "50%",
                position: "absolute",
                marginTop: 5,
                marginLeft: 5,
                cursor: "pointer"
              }}
              ref={e => (this.draggableKnob = e)}
            >
              <div
                style={{
                  width: 2,
                  height: 30,
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: 0,
                  left: 27
                }}
              />
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  position: "absolute",
                  top: 18,
                  left: 18
                }}
              />
            </div>
          </div>
          <div
            style={{
              width: 50,
              marginLeft: -55,
              marginTop: 80,
              opacity: 0,
              position: "absolute"
            }}
            ref={e => (this.logoContainer = e)}
          >
            <BlipSimple />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenControlsComplex;
