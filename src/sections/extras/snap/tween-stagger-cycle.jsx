import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
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

class TweenStaggerCycle extends Component {
  constructor(props) {
    super(props);
    this.listItems = [];
    this.staggerTweenNew = new TimelineLite({ paused: true });
    this.state = {
      tweenComplete: false,
      reverseComplete: true
    };
    this.updateState = this.updateState.bind(this);
    this.updateStateReverse = this.updateStateReverse.bind(this);
  }

  componentDidMount() {
    this.staggerTweenNew = new TimelineLite({
      paused: true,
      onComplete: this.updateState,
      onReverseComplete: this.updateStateReverse
    })
      .staggerFrom(
        this.listItems,
        1,
        {
          cycle: { x: [-180, 180], height: [0, 0] },
          opacity: 0,
          ease: "Power1.easeOut"
        },
        0.4
      )
      .to(this.listItems, 0.5, {
        backgroundColor: "#333",
        color: "#fff",
        delay: 0.5
      });
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
        <h2>Staggered Tweens using Cycle</h2>
        <p>This is an example of a staggered tween using the cycle method.</p>
        <div className="btn-group">
          {this.state.tweenComplete === false ? (
            <button
              className="btn btn-info"
              onClick={() => this.staggerTweenNew.play()}
            >
              Open
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={() => this.staggerTweenNew.play()}
              disabled
            >
              Open
            </button>
          )}
          {this.state.tweenComplete === true ? (
            <button
              className="btn btn-info"
              onClick={() => this.staggerTweenNew.reverse()}
            >
              Close
            </button>
          ) : (
            <button
              className="btn btn-info"
              onClick={() => this.staggerTweenNew.reverse()}
              disabled
            >
              Close
            </button>
          )}
        </div>
        <ul
          className="list-unstyled"
          style={{
            height: 210,
            marginTop: 15,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            padding: "14px 0px 10px 0px",
            width: 192,
            overflow: "hidden"
          }}
        >
          {listItemsArray.map((listItem, index) => {
            const { text } = listItem;
            return (
              <li
                key={`icon-${index}`}
                ref={li => (this.listItems[index] = li)}
                style={{
                  position: "relative",
                  left: 15,
                  height: 34,
                  width: 160,
                  opacity: 1,
                  backgroundColor: "#ccc",
                  color: "#ccc",
                  marginBottom: 3,
                  padding: "3px 15px 4px 15px",
                  overflow: "hidden"
                }}
              >
                {text}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default TweenStaggerCycle;
