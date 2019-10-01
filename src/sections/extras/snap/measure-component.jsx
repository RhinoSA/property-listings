import React, { Component } from "react";
import { TimelineLite } from "gsap/all";

class MeasureComponent extends Component {
  constructor(props) {
    super(props);
    this.logoTween = new TimelineLite({ paused: false });
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      heightBox: 0,
      widthBox: 0,
      offsetHeightBox: 0,
      offsetWidthBox: 0,
      offsetTopBox: 0,
      offsetLeftBox: 0,
      offsetClientLeftBox: 0,
      leftPosition: 0,
      topPosition: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.updateState = this.updateState.bind(this);
    this.offset = this.offset.bind(this);
  }

  offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  componentDidMount() {
    const heightBox = this.divElement.clientHeight;
    const widthBox = this.divElement.clientWidth;
    const offsetHeightBox = this.divElement.offsetHeight;
    const offsetWidthBox = this.divElement.offsetWidth;
    const offsetTopBox = this.divElement.offsetTop;
    const offsetLeftBox = this.divElement.offsetLeft;
    const offsetClientLeftBox = this.divElement.clientLeft;
    const location = this.offset(this.divElement);
    const leftPosition = location.left;
    const topPosition = location.top;
    this.setState({
      heightBox,
      widthBox,
      offsetHeightBox,
      offsetWidthBox,
      offsetTopBox,
      offsetLeftBox,
      offsetClientLeftBox,
      leftPosition,
      topPosition
    });
    window.addEventListener("resize", this.updateDimensions);
    this.logoTween = new TimelineLite({
      paused: false,
      onUpdate: this.updateState,
      onReverseComplete: this.updateStateReverse
    })
      .to(this.divElement, 2, {
        x: 200,
        width: 350,
        y: 0,
        opacity: 1
      })
      .to(
        this.divElement,
        2,
        {
          x: 0,
          width: 450,
          y: 0,
          opacity: 1
        },
        "+=1"
      );
  }

  updateState() {
    const location = this.offset(this.divElement);
    this.setState({
      heightBox: this.divElement.clientHeight,
      widthBox: this.divElement.clientWidth,
      offsetHeightBox: this.divElement.offsetHeight,
      offsetWidthBox: this.divElement.offsetWidth,
      offsetTopBox: this.divElement.offsetTop,
      offsetLeftBox: this.divElement.offsetLeft,
      offsetClientLeftBox: this.divElement.clientLeft,
      leftPosition: location.left,
      topPosition: location.top
    });
  }

  updateDimensions() {
    const location = this.offset(this.divElement);
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
      heightBox: this.divElement.clientHeight,
      widthBox: this.divElement.clientWidth,
      offsetHeightBox: this.divElement.offsetHeight,
      offsetWidthBox: this.divElement.offsetWidth,
      offsetTopBox: this.divElement.offsetTop,
      offsetLeftBox: this.divElement.offsetLeft,
      leftPosition: location.left,
      topPosition: location.top
    });
  }

  render() {
    const clientHeight = document.body.clientHeight;
    return (
      <React.Fragment>
        <h2>Measuring component size with ref callbacks</h2>
        <p
          ref={divElement => (this.divElement = divElement)}
          style={{
            position: "relative",
            border: "solid 5px #eee",
            padding: "15px",
            backgroundColor: "#fff",
            marginTop: 15
          }}
        >
          Page Height: {clientHeight}
          <br />
          Window width: {this.state.width}
          <br />
          Window Height: {this.state.height}
          <br />
          Width: {this.state.widthBox}
          <br />
          Height: {this.state.heightBox}
          <br />
          Offset Height: {this.state.offsetHeightBox}
          <br />
          Offset Width: {this.state.offsetWidthBox}
          <br />
          Offset Top: {this.state.offsetTopBox}
          <br />
          Offset Left: {this.state.offsetLeftBox}
          <br />
          Left: {Math.round(this.state.leftPosition)}
          <br />
          Top: {Math.round(this.state.topPosition)}
        </p>
      </React.Fragment>
    );
  }
}

export default MeasureComponent;
