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
  },
  {
    id: 6,
    text: "Item 01"
  },
  {
    id: 7,
    text: "Item 02"
  },
  {
    id: 8,
    text: "Item 03"
  },
  {
    id: 9,
    text: "Item 04"
  },
  {
    id: 10,
    text: "Item 05"
  },
  {
    id: 11,
    text: "Item 02"
  },
  {
    id: 12,
    text: "Item 03"
  }
];

class TweenStaggerCycleFunction extends Component {
  constructor(props) {
    super(props);
    this.listItems = [];
    this.staggerTween = new TimelineMax({ repeat: -1 });
    this.state = {
      tweenComplete: false,
      reverseComplete: true
    };
    this.updateState = this.updateState.bind(this);
    this.updateStateReverse = this.updateStateReverse.bind(this);
  }

  componentDidMount() {
    this.staggerTween = new TimelineMax({
      repeat: -1,
      onComplete: this.updateState,
      onReverseComplete: this.updateStateReverse
    })
      .staggerFrom(
        this.listItems,
        0.5,
        {
          cycle: {
            x: [-180, 180, -220, 220],
            scale: function(i) {
              return i * 2;
            },
            rotation: [-90, 90],
            transformOrigin: ["50% top", "50% bottom"],
            y: function() {
              return Math.random() * -300;
            }
          },
          opacity: 0,
          ease: "Power1.easeOut"
        },
        0.4
      )
      .staggerTo(
        this.listItems,
        0.5,
        {
          cycle: {
            x: [-180, 180, -220, 220],
            scale: function(i) {
              return i * 2;
            },
            rotation: [90, -90],
            transformOrigin: ["50% top", "50% bottom"],
            y: function() {
              return Math.random() * -300;
            }
          },
          opacity: 0,
          ease: "Power1.easeOut"
        },
        0.4,
        "+=2"
      );
  }

  updateState() {
    this.setState({ tweenComplete: true, reverseComplete: false });
  }

  updateStateReverse() {
    this.setState({ reverseComplete: true, tweenComplete: false });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Staggered Tweens using Functions</h2>
        <p>
          This is an example of a staggered tween using the cycle method with
          functions.
        </p>
        <ul
          className="list-unstyled"
          style={{
            height: 204,
            marginTop: 15,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            padding: "14px 0px 10px 0px",
            width: 192,
            overflow: "hidden"
          }}
        >
          {listItemsArray.map((listItem, index) => {
            return (
              <li
                key={`icon-${index}`}
                ref={li => (this.listItems[index] = li)}
                style={{
                  position: "relative",
                  left: 75,
                  height: 12,
                  width: 46,
                  borderRadius: "6px",
                  opacity: 1,
                  backgroundColor: "#333",
                  marginBottom: 3,
                  overflow: "hidden"
                }}
              ></li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default TweenStaggerCycleFunction;
