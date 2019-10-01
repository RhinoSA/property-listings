import React, { Component } from "react";
import { TimelineLite, TweenMax } from "gsap/all";

class TweenTransformOrigin extends Component {
  constructor(props) {
    super(props);
    this.ball = null;
    this.state = {
      restart: false,
      play: true,
      tweenComplete: false
    };
    this.updateState = this.updateState.bind(this);

    this.logoTl = new TimelineLite({
      paused: true
    });
    this.box = null;
  }

  componentDidMount() {
    this.logoTl = new TimelineLite({
      paused: true,
      onComplete: this.updateState
    })
      .to(this.box, 0.4, { x: 60 })
      .set(this.box, { transformOrigin: "bottom right" })
      .to(this.box, 0.4, { rotation: 90 })
      .to(this.box, 0.4, { x: 120 })
      .set(this.box, { transformOrigin: "bottom right" })
      .to(this.box, 0.4, { rotation: 0 })
      .to(this.box, 0.4, { x: 160 }, "-=0.4")
      .set(this.box, { transformOrigin: "center center" })
      .to(this.box, 0.5, { scale: 1.1, x: 260, y: -80, rotation: 360 })
      .to(this.box, 0.2, { scaleY: 0.95, scaleX: 1.15, x: 300, y: 1 })
      .to(this.box, 0.1, { scaleY: 0.98, scaleX: 1.05, x: 310, y: -5 })
      .to(this.box, 0.3, { scale: 1.1, x: 310, y: -3 })
      .to(this.box, 0.4, { scaleX: 1, scaleY: 1, x: 0, y: 0 }, "+=1")
      .set(this.box, { rotation: 0, transformOrigin: "bottom left" })
      .to(this.box, 0.1, {
        rotation: -4,
        scaleX: 0.9,
        scaleY: 1,
        x: -5,
        y: -3
      })
      .to(this.box, 0.1, { rotation: 0, scaleX: 0.97, scaleY: 1, x: 10, y: 0 })
      .to(this.box, 0.1, { rotation: 0, scaleX: 1, scaleY: 1, x: 10, y: 0 });
  }

  updateState() {
    this.setState({ tweenComplete: true, play: false, restart: true });
  }

  playClick = () => {
    this.setState({ play: true });
    this.logoTl.play();
  };

  ballHandler = () => {
    TweenMax.to(this.ball, 1.5, {
      x: 407,
      rotation: 740,
      transformOrigin: "50% 50%",
      ease: "Power1.easeOut",
      scale: 0.4
    });
    TweenMax.to(this.ball, 0.5, {
      scale: 1,
      height: 30
    });
    TweenMax.to(this.ball, 1.5, {
      y: 107,
      scale: 1.1,
      height: 40,
      ease: "Bounce.easeOut"
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* DEMO WRAPPER */}
        <div className="row">
          <div className="col-md-12">
            <h2>Changing the Transform Origin</h2>
            <p>
              This is a demonstration of how one can change the transform origin
              of an element multiple times in an animation sequence.
            </p>
            <div
              style={{
                position: "relative",
                width: 450,
                height: 150,
                backgroundColor: "rgba(0,0,0,0.2)",
                marginTop: 15
              }}
            >
              <div
                ref={div => (this.ball = div)}
                onClick={this.ballHandler}
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#333",
                  transformOrigin: "50% 50%",
                  position: "absolute",
                  borderRadius: "50%",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  opacity: 1,
                  overflow: "hidden",
                  cursor: "pointer"
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: "#999",
                    marginTop: 19,
                    position: "absolute"
                  }}
                ></div>
                <div
                  style={{
                    height: "100%",
                    width: 2,
                    backgroundColor: "#999",
                    marginLeft: 19,
                    position: "absolute"
                  }}
                ></div>
              </div>
              <div
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#333",
                  color: "#fff",
                  textAlign: "center",
                  position: "absolute",
                  bottom: 0,
                  left: 10,
                  paddingTop: 15,
                  borderRadius: 4
                }}
                ref={div => (this.box = div)}
              >
                Box
              </div>
            </div>

            {/* BUTTONS */}
            <div className="my-3 btn-group">
              {this.state.play === true ? (
                <button className="btn btn-info" onClick={this.playClick}>
                  Play
                </button>
              ) : (
                <button
                  className="btn btn-info"
                  onClick={this.playClick}
                  disabled
                >
                  Play
                </button>
              )}
              {this.state.restart === true ? (
                <button
                  className="btn btn-info"
                  onClick={() => this.logoTl.restart()}
                >
                  Restart
                </button>
              ) : (
                <button
                  className="btn btn-info"
                  onClick={() => this.logoTl.restart()}
                  disabled
                >
                  Restart
                </button>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenTransformOrigin;
