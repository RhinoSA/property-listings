import React, { Component } from "react";
import { TimelineMax, TweenMax } from "gsap/all";
import "./blip-simple.css";

const listItemsArray = [
  {
    id: 1,
    text: "Button 01"
  },
  {
    id: 2,
    text: "Button 02"
  },
  {
    id: 3,
    text: "Button 03"
  },
  {
    id: 4,
    text: "Button 04"
  }
];

class TweenStaggerButtons extends Component {
  constructor(props) {
    super(props);
    this.listItems = [];
    this.staggerTweenNew = new TimelineMax({ pause: true });
    // this.hoverTween = new TimelineMax({ pause: true });
    this.buttonTween = new TweenMax({ pause: true });
    this.state = {
      tweenComplete: false,
      reverseComplete: true
    };
    this.updateState = this.updateState.bind(this);
    this.updateStateReverse = this.updateStateReverse.bind(this);
  }

  componentDidMount() {
    this.staggerTweenNew = new TimelineMax({
      pause: true,
      onComplete: this.updateState,
      onReverseComplete: this.updateStateReverse
    }).staggerTo(
      this.listItems,
      1,
      {
        scale: 1,
        opacity: 1,
        delay: 0.5,
        ease: "Elastic.easeOut"
      },
      0.4
    );
    /*
    this.hoverTween = new TimelineMax({
      pause: true
    }).to(this.listItems, 0.5, {
      scale: 1.2,
      ease: "Power1.easeOut"
    });
    */
  }

  buttonClick = () => {
    this.buttonTween = new TimelineMax({
      pause: true
    }).staggerTo(
      this.listItems,
      1.3,
      {
        opacity: 0,
        y: -100,
        ease: "Back.easeIn"
      },
      0.2
    );
  };

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
            height: 204,
            marginTop: 15,
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            padding: "20px 0px 10px 0px",
            width: 450,
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
                  transform: "scale(0.6)",
                  left: 150,
                  width: 150,
                  padding: "4px 0px 4px 0px",
                  borderRadius: "6px",
                  opacity: 0,
                  backgroundColor: "#333",
                  color: "#fff",
                  textAlign: "center",
                  marginBottom: 8,
                  overflow: "hidden",
                  cursor: "pointer"
                }}
                onClick={this.buttonClick}
              >
                {listItem.text}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default TweenStaggerButtons;
