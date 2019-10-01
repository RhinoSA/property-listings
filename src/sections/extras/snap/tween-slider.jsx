import React, { Component } from "react";
import { TimelineMax } from "gsap/all";
import BlipSimple from "./blip-simple";
// npm i rc-slider
import Slider from "rc-slider";
// styles
import "rc-slider/assets/index.css";

class TweenSlider extends Component {
  constructor() {
    super();
    this.state = {
      sliderValue: 0,
      tweenComplete: false,
      reverseComplete: false,
      play: false,
      pause: true,
      reverse: false
    };
    this.updateState = this.updateState.bind(this);
    this.updateStateReverse = this.updateStateReverse.bind(this);
    // timeline callback
    this.updateSlider = this.updateSlider.bind(this);
    // timeline instance
    this.tl = new TimelineMax({ paused: true });
    this.box = null;

    // slider callbacks
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  updateSlider() {
    this.setState({ sliderValue: Math.round(this.tl.progress() * 100) });
  }

  componentDidMount() {
    this.tl = new TimelineMax({
      paused: true,
      onUpdate: this.updateSlider,
      onComplete: this.updateState,
      onReverseComplete: this.updateStateReverse
    }).to(this.box, 2, {
      x: 260,
      opacity: 1,
      scale: 2,
      y: -10,
      rotation: 360
    });
  }

  onSliderChange(value) {
    this.tl.progress(value / 100);
  }

  onAfterChange(value) {
    this.setState({
      sliderValue: value,
      tweenComplete: false,
      reverseComplete: false
    });
    this.tl.pause();
  }

  updateState() {
    this.setState({
      tweenComplete: true,
      reverseComplete: false,
      play: false,
      restart: false,
      pause: true
    });
  }

  playHandler = () => {
    if (this.state.play === false) {
      this.setState({
        play: true,
        reverseComplete: false,
        tweenComplete: false,
        pause: true
      });
      this.tl.play();
    } else {
      this.setState({
        play: false,
        pause: true
      });
    }
  };

  pauseHandler = () => {
    if (this.state.pause === false) {
      this.setState({
        pause: true
      });
      this.tl.resume();
    } else {
      this.setState({
        pause: false
      });
      this.tl.pause();
    }
  };

  reverseHandler = () => {
    if (this.state.reverse === false) {
      this.setState({
        reverse: true,
        reverseComplete: false,
        tweenComplete: false,
        pause: true
      });
      this.tl.reverse();
    } else {
      this.setState({
        reverse: false,
        pause: true
      });
    }
  };

  restartHandler = () => {
    this.setState({
      reverseComplete: false,
      tweenComplete: false
    });
    this.tl.restart();
  };

  updateStateReverse() {
    this.setState({
      reverseComplete: true,
      tweenComplete: false,
      play: false,
      reverse: false,
      pause: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Controlling Tweens with a Slider</h2>
        <p>
          The example below demonstrates how one can control the animation's
          position using a slider.
        </p>
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
          {this.state.reverseComplete === true ||
          this.state.tweenComplete === true ? (
            <button
              className="btn btn-info"
              onClick={this.pauseHandler}
              disabled
            >
              {this.state.pause === true ? "Pause" : "Resume"}
            </button>
          ) : (
            <button className="btn btn-info" onClick={this.pauseHandler}>
              {this.state.pause === true ? "Pause" : "Resume"}
            </button>
          )}
          {this.state.reverseComplete === false || this.state.reverse === true ? (
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
        <div style={{ width: 400, marginTop: 15, marginBottom: 25 }}>
          <Slider
            min={0}
            max={100}
            value={this.state.sliderValue}
            onChange={this.onSliderChange}
            onBeforeChange={() => this.tl.pause()}
            onAfterChange={this.onAfterChange}
          />
        </div>
        <div
          style={{
            padding: "3px 5px 3px 5px",
            width: 50,
            textAlign: "center",
            borderRadius: 10,
            backgroundColor: "#333",
            color: "#fff",
            position: "absolute",
            marginTop: 5,
            marginLeft: 5
          }}
        >
          {this.state.sliderValue}%
        </div>
        <div
          style={{
            position: "relative",
            height: 150,
            width: 400,
            marginBottom: 15,
            overflow: "hidden",
            backgroundColor: "rgba(0,0,0,0.1)"
          }}
        >
          <div
            style={{
              width: 100,
              opacity: 0,
              position: "absolute",
              top: 20
            }}
            ref={e => (this.box = e)}
          >
            <BlipSimple />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenSlider;
