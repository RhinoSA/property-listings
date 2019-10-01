import React, { Component } from "react";
import { TimelineMax } from "gsap/all";

class TweenSVG extends Component {
  constructor(props) {
    super(props);
    //this.path = React.createRef();
    this.state = {
      count: 1
    };
    this.svgMain = null;
    this.circleOuterTween = null;
    this.circleTween = new TimelineMax({ repeat: -1, yoyo: true });
  }
  componentDidMount() {
    //const pathLength = this.path.current.getTotalLength();
    //console.log(pathLength);
    // 439.8851318359375
    this.circleTween = new TimelineMax({ repeat: -1, yoyo: true })
      .fromTo(
        this.circleTween,
        3,
        {
          stroke: "rgba(0,0,0,0.4)",
          transformOrigin: "50% 50%",
          strokeWidth: 1,
          rotation: 0,
          //attr: { r: 20 },
          scale: 0.2,
          strokeDasharray: 439.8851318359375,
          fill: "rgba(120,120,120,0.1)",
          strokeDashoffset: 439.8851318359375
        },
        {
          stroke: "rgba(0,0,0,0.2)",
          transformOrigin: "50% 50%",
          strokeWidth: 1,
          rotation: 180,
          //attr: { r: 20 },
          scale: 0.65,
          strokeDasharray: 439.8851318359375,
          fill: "rgba(120,120,120,0.2)",
          strokeDashoffset: 0,
          delay: 2
        }
      )
      .fromTo(
        this.circleOuterTween,
        3,
        {
          transformOrigin: "89px 89px",
          rotation: 0,
          backgroundColor: "#ccc"
        },
        {
          transformOrigin: "89px 89px",
          rotation: 360,
          delay: -3,
          backgroundColor: "#333"
        }
      );
  }
  render() {
    return (
      <React.Fragment>
        <h2>SVG Animation</h2>
        <p>This is an example of how one can animate SVGs with GSAP.</p>
        <div
          style={{
            width: 300,
            height: 300,
            position: "relative",
            marginBottom: 15
          }}
        >
          <div
            style={{
              width: 226,
              height: 226,
              backgroundColor: "none",
              border: "solid 1px rgba(0,0,0,0.2)",
              position: "absolute",
              left: 36,
              top: 36,
              borderRadius: "50%"
            }}
          ></div>
          <div
            ref={div => (this.circleOuterTween = div)}
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#ccc",
              position: "absolute",
              left: 60,
              top: 60,
              borderRadius: "50%"
            }}
          ></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 150 150"
            ref={svg => (this.svgMain = svg)}
            style={{
              width: 300,
              backgroundColor: "rgba(0,0,0,0.1)",
              marginBottom: 15
            }}
          >
            <path
              ref={circle => (this.circleTween = circle)}
              //ref={this.path}
              fill="none"
              strokeMiterlimit="10"
              d="M145,75c0,38.66-31.34,70-70,70S5,113.66,5,75
	S36.34,5,75,5c14.497,0,27.966,4.407,39.138,11.955C132.758,29.534,145,50.838,145,75z"
            />
          </svg>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenSVG;
