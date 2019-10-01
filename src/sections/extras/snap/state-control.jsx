import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import BlipSimple from "./blip-simple";

class StateControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      pause: true,
      reverse: false,
      restart: false,
      tweenComplete: false,
      reverseComplete: true
    };

    this.logoContainer = null;
    this.logoTween = new TimelineLite({ paused: true });
    this.updateState = this.updateState.bind(this);
    this.updateStateReverse = this.updateStateReverse.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  /** The button click handler
   * Depending on the type of action, how the state will be updated
   * @param {string} type the action for the timeline
   */
  buttonClickHandler = type => {
    const newState = {};
    newState[type] = true;
    this.setState(newState);
  };

  componentDidMount() {
    // create logo tween
    this.logoTween = new TimelineLite({
      paused: true,
      onComplete: this.updateState,
      onReverseComplete: this.updateStateReverse
    })
      .to(this.logoContainer, 3, { x: 220, scale: 2.5, y: -20 })
      .to(this.logoContainer, 1, {
        rotation: 360,
        transformOrigin: "center"
      });
  }

  updateState() {
    this.setState({ tweenComplete: true, play: false, restart: false });
  }

  updateStateReverse() {
    this.setState({ reverseComplete: true, play: false });
  }

  // after the component's state has changed, update the
  // timeline control. We compare the previous and updated state
  componentDidUpdate(prevProps, prevState) {
    const {
      play: prePlay,
      pause: prePause,
      reverse: preReverse,
      restart: preRestart
    } = prevState;
    const { play, pause, reverse, restart } = this.state;
    // the play state has changed
    if (play && play !== prePlay) {
      this.logoTween.play();
      // play means that the paused and reversed state should be false
      this.setState({
        pause: false,
        reverse: false,
        restart: false,
        reverseComplete: false
      });
    }
    // the pause state has changed
    if (pause && pause !== prePause) {
      this.logoTween.pause();
      // pausing means that play and reverse states should be false
      this.setState({
        play: false,
        reverse: false,
        restart: false
      });
    }
    // the reversed state has changed
    if (reverse && reverse !== preReverse) {
      this.logoTween.reverse();
      // the pause and play state should be false
      this.setState({
        play: false,
        reverse: true,
        pause: false,
        restart: false,
        tweenComplete: false
      });
    }
    // the restart state has changed
    if (restart && restart !== preRestart) {
      this.logoTween.restart();
      // the play state should be true
      // pause and reverse should be false
      // finally reset restart
      this.setState({
        play: false,
        pause: false,
        reverse: false,
        restart: true,
        tweenComplete: false,
        reverseComplete: false
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>State Controlled Tween using Callbacks</h2>
        <p>
          This is an example of a GSAP tween which is controlled by updating the
          state. GSAP callbacks are used to determine if the animation has
          completed or if the reverse playback is complete. The button's
          disabled states are controlled by the state values for the play and
          reverse buttons.
        </p>
        <div className="mb-2 btn-group">
          {this.state.tweenComplete === true ? (
            <button
              className="btn btn-info"
              onClick={this.buttonClickHandler.bind(null, "play")}
              disabled
            >
              Play
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={this.buttonClickHandler.bind(null, "play")}
            >
              Play
            </button>
          )}
          <button
            className="btn btn-info"
            onClick={this.buttonClickHandler.bind(null, "pause")}
          >
            Pause
          </button>
          {this.state.reverseComplete === true &&
          this.state.tweenComplete === false ? (
            <button
              className="btn btn-info"
              onClick={this.buttonClickHandler.bind(null, "reverse")}
              disabled
            >
              Reverse
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={this.buttonClickHandler.bind(null, "reverse")}
            >
              Reverse
            </button>
          )}

          <button
            className="btn btn-info"
            onClick={this.buttonClickHandler.bind(null, "restart")}
          >
            Restart
          </button>
        </div>

        <p>
          Play: {this.state.play === true ? "true" : "false"}
          <br />
          Reverse: {this.state.reverse === true ? "true" : "false"}
          <br />
          Paused: {this.state.pause === true ? "true" : "false"}
          <br />
          Restart: {this.state.restart === true ? "true" : "false"}
          <br />
          Tween Completed:&nbsp;
          {this.state.tweenComplete === true ? "true" : "false"}
          <br />
          Reverse Completed:&nbsp;
          {this.state.reverseComplete === true ? "true" : "false"}
        </p>

        <div
          style={{
            width: 400,
            height: 135,
            backgroundColor: "rgba(0,0,0,0.1",
            position: "relative",
            overflow: "hidden",
            marginBottom: 15
          }}
        >
          <div
            style={{
              width: 100,
              position: "absolute",
              marginTop: 10,
              marginLeft: 10
            }}
            ref={div => (this.logoContainer = div)}
          >
            <BlipSimple />
          </div>
        </div>
        <h4>GSAP Callback Functions:</h4>
        <ul className="list-unstyled">
          <li>onStart</li>
          <li>onStartScope</li>
          <li>onStartParams</li>
          <li>onComplete</li>
          <li>onCompleteScope</li>
          <li>onCompleteParams</li>
          <li>onUpdate</li>
          <li>onUpdateScope</li>
          <li>onUpdateParams</li>
          <li>onRepeat</li>
          <li>onRepeatScope</li>
          <li>onRepeatParams</li>
          <li>onReverseComplete</li>
          <li>onReverseCompleteScope</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default StateControl;
