import React, { Component } from "react";
import { TimelineMax, TweenMax } from "gsap/all";
import BlipSimple from "./blip-simple.jsx";
import "./blip-simple.css";

class TweenEase extends Component {
  constructor(props) {
    super(props);
    this.logoContainer = null;
    this.creature = null;
    this.logoTween = new TimelineMax({ paused: true });
    this.bezierTween = new TweenMax({ paused: false });
    this.state = {
      pause: true,
      playEase: false
    };
  }

  pauseToggle = () => {
    if (this.state.pause === true) {
      this.bezierTween.pause();
      this.setState({
        pause: false
      });
    } else {
      this.bezierTween.resume();
      this.setState({
        pause: true
      });
    }
  };

  componentDidMount() {
    this.logoTween = new TimelineMax({ paused: true })
      .to(this.logoContainer, 1, {
        x: 150,
        width: 160,
        marginTop: -20,
        opacity: 1,
        ease: "Elastic.easeOut"
      })
      .to(this.logoContainer, 1, {
        x: 280,
        width: 120,
        marginTop: 5,
        opacity: 1,
        ease: "Elastic.easeOut"
      });
    this.bezierTween = new TweenMax(this.creature, 6, {
      bezier: {
        type: "soft",
        //curviness: 0.2,
        values: [
          { x: 0, y: 0 },
          { x: 100, y: 40 },
          { x: 200, y: 0 },
          { x: 300, y: 40 },
          { x: 400, y: 0 },
          { x: 500, y: 40 },
          { x: 600, y: 80 }
        ],
        autoRotate: true
      },
      ease: "Power1.easeInOut",
      repeat: -1
    });
  }

  playHandler = () => {
    this.setState({
      playEase: true
    });
    this.logoTween.play();
  };

  render() {
    return (
      <React.Fragment>
        <h2>A Tween with Easing</h2>
        <p>
          This is an example of a simple animation sequence using GSAP with
          easing added to the tween.
        </p>
        <div className="btn-group">
          {this.state.playEase === true ? (
            <button
              className="btn btn-info"
              onClick={this.playHandler}
              disabled
            >
              Play
            </button>
          ) : (
            <button className="btn btn-info" onClick={this.playHandler}>
              Play
            </button>
          )}
          {this.state.playEase === false ? (
            <button
              className="btn btn-info"
              onClick={() => this.logoTween.restart()}
              disabled
            >
              Restart
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={() => this.logoTween.restart()}
            >
              Restart
            </button>
          )}
        </div>
        <div style={{ height: 150, marginBottom: 15, marginTop: 15 }}>
          <div
            style={{
              width: 430,
              height: 150,
              zIndex: 200,
              backgroundColor: "rgba(0,0,0,0.1)",
              position: "absolute",
              overflow: "hidden"
            }}
          >
            <div
              ref={div => (this.logoContainer = div)}
              style={{
                opacity: 0,
                width: 100,
                marginTop: 20,
                position: "relative",
                zIndex: 200
              }}
            >
              <BlipSimple />
            </div>
          </div>
        </div>
        <p>
          To compare the different types of tweens available using GSAP, try out
          the different tweens using the{" "}
          <a href="https://greensock.com/ease-visualizer" target="visualizer">
            GSAP visualizing tool
          </a>
          .
        </p>
        <h2>Bezier Plugin</h2>
        <p>
          This is an example of how to use the GSAP bezier plugin to create an
          animation which moves in a non-linear direction.
        </p>
        <div className="btn-group">
          <button
            className="btn btn-info"
            style={{ width: 60 }}
            onClick={this.pauseToggle}
          >
            {this.state.pause === true ? "Pause" : "Play"}
          </button>
        </div>
        <div
          style={{
            position: "relative",
            width: 430,
            height: 100,
            backgroundColor: "rgba(0,0,0,0.1)",
            overflow: "hidden",
            marginTop: 15,
            marginBottom: 15
          }}
        >
          <div
            ref={div => (this.creature = div)}
            style={{
              opacity: 1,
              width: 30,
              height: 20,
              borderRadius: 4,
              marginTop: 20,
              position: "absolute",
              zIndex: 200,
              backgroundColor: "#333",
              left: -100
            }}
          />
        </div>
        <p>
          For more information about the bezier plugin, see the{" "}
          <a
            href="https://greensock.com/docs/Plugins/BezierPlugin"
            target="bezier"
          >
            GSAP documentation
          </a>
          .
        </p>
      </React.Fragment>
    );
  }
}

export default TweenEase;
