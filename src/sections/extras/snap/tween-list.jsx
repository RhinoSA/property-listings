import React, { Component } from "react";
import List from "./list";

import { TimelineLite } from "gsap/all";

class TweenList extends Component {
  constructor() {
    super();
    this.myList = React.createRef();
    this.myTween = new TimelineLite({ paused: true });

    this.toggleTween = this.toggleTween.bind(this);
  }

  componentDidMount() {
    this.myTween
      .staggerFrom(
        this.myList.current.getUsers(),
        0.4,
        { autoAlpha: 0, y: 50 },
        0.08
      )
      .reverse();
  }

  toggleTween() {
    this.myTween.reversed(!this.myTween.reversed());
  }

  render() {
    return (
      <React.Fragment>
        <h2>Animated List</h2>
        <p>
          Animates the items of a child component. The animation is controlled
          and created by the parent component.
        </p>
        <button className="btn btn-info mb-3" onClick={this.toggleTween}>
          Toggle Tween
        </button>
        <List ref={this.myList} />
      </React.Fragment>
    );
  }
}

export default TweenList;
