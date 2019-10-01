import React, { Component } from "react";
import { TimelineMax } from "gsap/all";
import "./blip-simple.css";

const listItemsArray = [
  {
    id: 1,
    text: "Item 01"
  },
  {
    id: 2,
    text: "Item 02"
  },
  {
    id: 3,
    text: "Item 03"
  },
  {
    id: 4,
    text: "Item 04"
  },
  {
    id: 5,
    text: "Item 05"
  }
];

class TweenRepeat extends Component {
  constructor(props) {
    super(props);
    this.listItemsWrap = null;
    this.listItems = [];
    this.loader = new TimelineMax();
    this.staggerTween = new TimelineMax({
      repeat: 3,
      yoyo: false
    });
    this.state = {
      tweenComplete: "pause"
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(forward) {
    const newState = {
      tweenComplete: "play"
    };
    this.setState(newState);
  }

  componentDidMount() {
    this.staggerTween = new TimelineMax({
      repeat: 3,
      yoyo: false
    }).staggerFromTo(
      this.listItems,
      0.5,
      { scale: 0, autoAlpha: 0 },
      { scale: 1, autoAlpha: 1, ease: "Back.easeInOut" },
      0.4
    );
    this.loader = new TimelineMax({
      onComplete: this.updateState,
      onCompleteParams: [true]
    }).fromTo(
      this.loader,
      1,
      { autoAlpha: 1 },
      { autoAlpha: 0, ease: "Power.easeNone" },
      8.5
    );
  }

  render() {
    return (
      <React.Fragment>
        <h2>Repeating Tweens</h2>
        <p>
          This is an example of a how one uses tweenLineMax to repeat a tween.
        </p>
        <div
          style={{
            position: "relative",
            height: 150,
            width: 400,
            backgroundColor: "#333",
            marginBottom: 15
          }}
        >
          <div
            ref={div => (this.loader = div)}
            style={{
              marginTop: 55,
              position: "absolute",
              left: "50%",
              marginLeft: -65,
              width: 130,
              height: 30,
              opacity: 1,
              backgroundColor: "rgba(250,250,250,0.1)",
              borderRadius: 14
            }}
          >
            {listItemsArray.map((listItem, index) => {
              return (
                <div
                  key={`icon-${index}`}
                  ref={li => (this.listItems[index] = li)}
                  style={{
                    display: "inline-block",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    marginLeft: 5,
                    opacity: 1,
                    backgroundColor: "#fff",
                    color: "#ccc",
                    marginTop: 5,
                    overflow: "hidden",
                    transform: "scale(1)"
                  }}
                />
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenRepeat;
