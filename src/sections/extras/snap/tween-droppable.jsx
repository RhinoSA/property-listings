import React, { Component } from "react";
import { TimelineMax, TweenMax, Draggable } from "gsap/all";

class TweenDroppable extends Component {
  constructor(props) {
    super(props);
    this.icons = [];
    this.icontest = null;
    this.boxHit = null;
    this.container = null;
    this.getMunched = new TimelineMax({
      paused: true
    });
    this.state = {
      tweenComplete: false
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    TweenMax.set(this.icontest, { y: 130, x: 45 });
    TweenMax.set(this.boxHit, { y: 20, x: 20 });
    Draggable.create(this.icontest, {
      bounds: this.container,
      onComplete: this.updateState,
      onDrag: function(e) {
        if (this.hitTest("#boxHit", "80%")) {
          TweenMax.to(this.target, 0.6, {
            opacity: 0,
            scale: 0,
            transformOrigin: "50% 50%"
          });
        }
      },
      onDragEnd: function(e) {
        if (this.hitTest("#boxHit", "80%")) {
          this.getMunched = new TimelineMax({
            paused: false
          })
            .to("#boxHit", 1, { x: 200, y: 60 })
            .to(
              "#boxHit",
              1,
              {
                y: 100,
                scale: 0.2,
                opacity: 0
              },
              "-=0.5"
            );
        }
      }
    });
  }

  updateState() {
    this.setState({ tweenComplete: true });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Draggable Elements</h2>
        <p>
          Below is an example of how one can use GSAP to create a draggable div.
        </p>
        <div
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "rgba(0,0,0,0.1)",
            position: "relative",
            marginBottom: 15
          }}
          ref={div => (this.container = div)}
        >
          <div
            style={{
              width: 50,
              height: 50,
              backgroundColor: "#f8984b",
              position: "absolute",
              zIndex: 100,
              borderRadius: "50%",
              textAlign: "center"
            }}
            ref={div => (this.icontest = div)}
          ></div>
          <div
            style={{
              width: 100,
              height: 100,
              backgroundColor: "#333",
              transformOrigin: "50% 50%",
              position: "absolute",
              borderRadius: "50%",
              textAlign: "center"
            }}
            id="boxHit"
            ref={div => (this.boxHit = div)}
          ></div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenDroppable;
