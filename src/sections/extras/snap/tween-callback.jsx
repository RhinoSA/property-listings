import React, { Component } from "react";
import { TimelineMax } from "gsap/all";
import "./blip-simple.css";

class TweenCallback extends Component {
  constructor(props) {
    super(props);
    this.box1 = null;
    this.box2 = null;
    this.box3 = null;
    this.tl = new TimelineMax({ repeat: 2, yoyo: true });
  }

  componentDidMount() {
    this.tl = new TimelineMax({ repeat: 2, yoyo: true })
      .to(this.box1, 1, {
        x: 300,
        y: 20,
        scale: 0.8
      })
      .to(
        this.box2,
        0.5,
        {
          x: 300,
          y: 10,
          scale: 0.5
        },
        "-=0.5"
      )
      .to(
        this.box3,
        0.5,
        {
          x: 300,
          y: -45,
          rotation: 360,
          onComplete: showMessage,
          onCompleteParams: ["Animation complete"]
        },
        "-=0.5"
      );
    function showMessage(message) {
      console.log(message);
      return message;
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2>Timeline Animations</h2>
        <p>This is an example of a timeline animation.</p>
        <div className="btn-group">
          <button className="btn btn-info" onClick={() => this.tl.play()}>
            Play
          </button>
          <button className="btn btn-info" onClick={() => this.tl.resume()}>
            Resume
          </button>
          <button className="btn btn-info" onClick={() => this.tl.pause()}>
            Pause
          </button>
          <button className="btn btn-info" onClick={() => this.tl.reverse()}>
            Reverse
          </button>
          <button className="btn btn-info" onClick={() => this.tl.restart()}>
            Restart
          </button>
          <button
            className="btn btn-info"
            onClick={() => this.tl.timeScale(0.5)}
          >
            Slow Speed
          </button>
          <button className="btn btn-info" onClick={() => this.tl.timeScale(1)}>
            Normal Speed
          </button>
        </div>
        <div
          ref={div => (this.box1 = div)}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#333",
            borderRadius: "50%",
            marginTop: 20,
            position: "relative",
            left: 0,
            zIndex: 10
          }}
        />
        <div
          ref={div => (this.box2 = div)}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#666",
            borderRadius: "50%",
            marginTop: 5,
            position: "relative",
            left: 0,
            zIndex: 20
          }}
        />
        <div
          ref={div => (this.box3 = div)}
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#333",
            borderRadius: 10,
            marginTop: 5,
            marginBottom: 15,
            position: "relative",
            left: 0,
            zIndex: 10
          }}
        />
        <p>For more information about GSAP timelines, see the <a href="https://greensock.com/position-parameter" target="timeline">GSAP documentation</a>.</p>
      </React.Fragment>
    );
  }
}

export default TweenCallback;
