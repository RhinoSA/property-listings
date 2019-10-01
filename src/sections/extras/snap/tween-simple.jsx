import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import BlipSimple from "./blip-simple.jsx";
import "./blip-simple.css";

class TweenSimple extends Component {
  constructor(props) {
    super(props);
    this.logoContainer = null;
    this.heading = null;
    this.headingTwo = null;
    this.logoTween = new TimelineLite({ paused: true });
    this.state = {
      tweenComplete: false,
      reverseComplete: false,
      paused: true
    };
    this.updateState = this.updateState.bind(this);
    this.updateStateReverse = this.updateStateReverse.bind(this);
  }

  componentDidMount() {
    this.logoTween = new TimelineLite({
      paused: true,
      onComplete: this.updateState,
      onReverseComplete: this.updateStateReverse
    })
      .to(this.logoContainer, 1, {
        x: 106,
        width: 300,
        marginTop: -100,
        opacity: 1,
        rotation: 180
      })
      .to(this.logoContainer, 1, {
        x: 192,
        width: 120,
        marginTop: 5,
        opacity: 1,
        rotation: 360
      })
      .to(this.heading, 1, { opacity: 1, x: 200 }, "-=1")
      .from(this.headingTwo, 1, { opacity: 0, y: -70 }, "-=1");
  }

  updateState() {
    this.setState({
      tweenComplete: true,
      reverseComplete: false,
      play: false,
      restart: false
    });
  }

  pauseHandler = () => {
    if (this.state.paused === true) {
      this.logoTween.pause();
      this.setState({
        paused: false
      });
    } else {
      this.logoTween.resume();
      this.setState({
        paused: true
      });
    }
  };

  reverseHandler = () => {
    this.setState({
      paused: true,
      tweenComplete: false,
      reverseComplete: false
    });
    this.logoTween.reverse();
  };

  playHandler = () => {
    this.setState({
      paused: true,
      tweenComplete: false,
      reverseComplete: false
    });
    this.logoTween.play();
  };

  restartHandler = () => {
    this.setState({
      paused: true,
      tweenComplete: false,
      reverseComplete: false
    });
    this.logoTween.restart();
  };

  updateStateReverse() {
    this.setState({ reverseComplete: true, tweenComplete: false, play: false });
  }

  render() {
    return (
      <React.Fragment>
        <h2>A Simple Tween</h2>
        <p>
          Tween Complete:&nbsp;
          {this.state.tweenComplete === true ? "true" : "false"}
          <br />
          Reverse Complete:&nbsp;
          {this.state.reverseComplete === true ? "true" : "false"}
        </p>
        <p>This is an example of a simple animation sequence using GSAP.</p>
        <div className="btn-group">
          {this.state.tweenComplete === false ? (
            <button className="btn btn-info" onClick={this.playHandler}>
              Play
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={this.playHandler}
              disabled
            >
              Play
            </button>
          )}
          {this.state.tweenComplete === true ||
          this.state.reverseComplete === true ? (
            <button
              className="btn btn-info"
              onClick={this.pauseHandler}
              disabled
            >
              {this.state.paused === true ? "Pause" : "Resume"}
            </button>
          ) : (
            <button className="btn btn-info" onClick={this.pauseHandler}>
              {this.state.paused === true ? "Pause" : "Resume"}
            </button>
          )}
          {this.state.tweenComplete === true ||
          this.state.reverseComplete === false ? (
            <button className="btn btn-info" onClick={this.reverseHandler}>
              Reverse
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={this.reverseHandler}
              disabled
            >
              Reverse
            </button>
          )}
          <button className="btn btn-info" onClick={this.restartHandler}>
            Restart
          </button>
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
            <h2
              ref={h2 => (this.heading = h2)}
              style={{
                opacity: 0,
                position: "absolute",
                top: 70,
                left: -180,
                zIndex: 100,
                color: "#333"
              }}
            >
              A Simple Tween
            </h2>
            <h2
              ref={h2 => (this.headingTwo = h2)}
              style={{
                opacity: 1,
                position: "absolute",
                top: 70,
                left: 320,
                zIndex: 100,
                color: "#333"
              }}
            >
              Example
            </h2>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenSimple;
