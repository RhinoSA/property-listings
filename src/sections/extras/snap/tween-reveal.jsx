import React, { Component } from "react";
import { TimelineMax } from "gsap/all";
import "./blip-simple.css";

class TweenReveal extends Component {
  constructor(props) {
    super(props);
    this.mask = null;
    this.logoTween = new TimelineMax({ paused: false });
  }

  componentDidMount() {
    this.logoTween = new TimelineMax({ paused: false }).to(this.mask, 2, {
      opacity: 1,
      xPercent: -25,
      repeat: -1,
      yoyo: true,
      repeatDelay: 1
    });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Tween Reveal</h2>
        <p>This is an example of a simple animation sequence using GSAP.</p>
        <div style={{ height: 150, marginBottom: 15, marginTop: 15 }}>
          <div
            style={{
              width: 430,
              height: 150,
              zIndex: 200,
              backgroundColor: "#262626",
              position: "absolute",
              overflow: "hidden"
            }}
          >
            <div
              ref={div => (this.mask = div)}
              className="mask"
              style={{
                opacity: 0,
                width: 430,
                height: 150,
                marginLeft: 0,
                position: "relative",
                left: 0,
                zIndex: 200
              }}
            />
            <div
              style={{
                opacity: 1,
                fontSize: 70,
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 100,
                color: "rgb(250,250,250)"
              }}
            >
              Reveal
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenReveal;
