import React, { Component } from "react";
import { TweenMax, Draggable } from "gsap/all";
import "./clock.css";

const clockSVG = {
  width: 220,
  height: 220,
  position: "relative",
  marginBottom: 15,
  marginTop: 0,
  backgroundColor: "none"
};

class TweenDirectionalRotation extends Component {
  constructor(props) {
    super(props);
    this.outerRing = null;
    this.clockArm = null;
    this.one = null;
    this.two = null;
    this.three = null;
    this.four = null;
    this.five = null;
    this.six = null;
    this.seven = null;
    this.eight = null;
    this.degrees = [];
    this.rotation = 0;
    this.state = {
      currentRotation: 0
    };
  }

  componentDidMount() {
    const rotationSnap = 45 / 10;
    TweenMax.set(this.clockArm, { transformOrigin: "50% 140px" });
    Draggable.create(this.clockArm, {
      type: "rotation",
      throwProps: false,
      dragClickables: true,
      snap: endValue => Math.round(endValue / rotationSnap) * rotationSnap,
      liveSnap: this.trackRotation
    });
  }

  rotateLeft = () => {
    TweenMax.to(this.clockArm, 0.5, {
      rotation: parseInt(this.state.currentRotation % 360, 10),
      modifiers: {
        rotation: this.trackRotation
      }
    });
  };

  rotateRight = () => {
    TweenMax.to(this.clockArm, 0.5, {
      rotation: parseInt(this.state.currentRotation % 360, 10),
      modifiers: {
        rotation: this.trackRotation
      }
    });
  };

  trackRotation = value => {
    this.setState({ currentRotation: Math.round(value / 45) * 45 });
    return Math.round(value / 45) * 45;
  };

  setDegreeOne = () => {
    TweenMax.to(this.clockArm, 0.4, {
      rotation: "0_short",
      ease: "Elastic.easeInOut"
    });
    this.setState({ currentRotation: 0 });
  };

  setDegreeTwo = () => {
    TweenMax.to(this.clockArm, 0.4, {
      rotation: "45_short",
      ease: "Elastic.easeInOut"
    });
    this.setState({ currentRotation: 45 });
  };

  setDegreeThree = () => {
    TweenMax.to(this.clockArm, 0.4, {
      rotation: "90_short",
      ease: "Elastic.easeInOut"
    });
    this.setState({ currentRotation: 90 });
  };

  setDegreeFour = () => {
    TweenMax.to(this.clockArm, 0.4, {
      rotation: "135_short",
      ease: "Elastic.easeInOut"
    });
    this.setState({ currentRotation: 135 });
  };

  setDegreeFive = () => {
    TweenMax.to(this.clockArm, 0.4, {
      rotation: "180_short",
      ease: "Elastic.easeInOut"
    });
    this.setState({ currentRotation: 180 });
  };

  setDegreeSix = () => {
    TweenMax.to(this.clockArm, 0.4, {
      rotation: "225_short",
      ease: "Elastic.easeInOut"
    });
    this.setState({ currentRotation: 225 });
  };

  setDegreeSeven = () => {
    TweenMax.to(this.clockArm, 0.4, {
      rotation: "270_short",
      ease: "Elastic.easeInOut"
    });
    this.setState({ currentRotation: 270 });
  };

  setDegreeEight = () => {
    TweenMax.to(this.clockArm, 0.4, {
      rotation: "315_short",
      ease: "Elastic.easeInOut"
    });
    this.setState({ currentRotation: 315 });
  };

  render() {
    const rotationFixed = Math.abs(
      Math.round(
        this.state.currentRotation < 0
          ? this.state.currentRotation + 360
          : this.state.currentRotation
      ) % 360
    );
    return (
      <React.Fragment>
        <h2>Directional Rotation Visualizer</h2>
        <div className="directional-wrapper">
          <p className="directional-value">
            {Math.round(
              this.state.currentRotation < 0
                ? this.state.currentRotation + 360
                : this.state.currentRotation
            ) % 360}
            &deg;
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 421.92 421.92"
            style={clockSVG}
          >
            <g className="inner-disc">
              <circle className="outer" cx="210.96" cy="210.96" r="74.335" />
              <circle className="inner" cx="210.96" cy="210.96" r="67.028" />
            </g>
            <g className="outer-ring" ref={g => (this.outerRing = g)}>
              <path
                className="outer-ring-black"
                d="M398.143,178.822c-4.764-27.772-15.797-54.354-32.136-77.427c6.848-12.825,4.685-29.047-5.875-39.606
	c-6.347-6.346-14.783-9.841-23.758-9.841c-5.525,0-10.998,1.387-15.845,3.968c-23.073-16.34-49.657-27.374-77.431-32.139
	C238.846,9.911,225.854,0,210.96,0c-14.893,0-27.885,9.911-32.138,23.777c-27.774,4.765-54.358,15.799-77.432,32.139
	c-4.847-2.581-10.318-3.968-15.844-3.968c-8.975,0-17.412,3.495-23.758,9.841c-10.56,10.56-12.722,26.781-5.876,39.606
	c-16.338,23.072-27.371,49.654-32.135,77.427C9.911,183.075,0,196.067,0,210.96c0,14.892,9.911,27.884,23.777,32.138
	c4.765,27.772,15.797,54.354,32.135,77.428c-6.846,12.825-4.684,29.047,5.876,39.606c6.346,6.346,14.783,9.84,23.758,9.84
	c5.525,0,10.997-1.387,15.844-3.968c23.074,16.34,49.658,27.374,77.432,32.139c4.253,13.867,17.246,23.777,32.138,23.777
	c14.894,0,27.886-9.91,32.139-23.777c27.773-4.765,54.356-15.798,77.431-32.139c4.847,2.581,10.319,3.968,15.845,3.968
	c8.974,0,17.412-3.495,23.758-9.84c10.56-10.561,12.723-26.782,5.875-39.606c16.339-23.073,27.372-49.655,32.136-77.428
	c13.866-4.254,23.777-17.245,23.777-32.138S412.01,183.075,398.143,178.822z M375.096,241.869
	c-4.254,22.564-13.255,44.224-26.289,63.262c-3.931-1.566-8.142-2.377-12.442-2.377c-8.979,0-17.419,3.496-23.766,9.844
	c-9.599,9.598-12.321,23.963-7.463,36.205c-19.04,13.037-40.7,22.039-63.266,26.293c-5.201-12.136-17.296-20.398-30.91-20.398
	s-25.708,8.263-30.91,20.398c-22.566-4.254-44.227-13.256-63.266-26.293c4.857-12.242,2.135-26.607-7.462-36.205
	c-6.349-6.348-14.789-9.844-23.767-9.844c-4.301,0-8.512,0.811-12.442,2.377c-13.035-19.037-22.036-40.696-26.29-63.262
	c12.135-5.202,20.398-17.296,20.398-30.909c0-13.614-8.263-25.708-20.398-30.91c4.255-22.566,13.256-44.225,26.29-63.262
	c3.93,1.566,8.141,2.378,12.442,2.378c8.978,0,17.417-3.496,23.766-9.844c9.597-9.598,12.319-23.963,7.462-36.206
	c19.038-13.036,40.698-22.038,63.266-26.293c5.202,12.136,17.295,20.398,30.91,20.398c13.613,0,25.708-8.264,30.91-20.398
	c22.566,4.254,44.227,13.257,63.266,26.293c-4.856,12.241-2.135,26.608,7.462,36.206c6.348,6.348,14.788,9.844,23.766,9.844
	c4.302,0,8.513-0.812,12.443-2.377c13.034,19.038,22.035,40.697,26.289,63.261c-12.136,5.202-20.398,17.295-20.398,30.91
	C354.697,224.573,362.96,236.668,375.096,241.869z"
              />
              <path
                className="outer-ring-white"
                d="M414.92,210.96c0-13.454-9.986-24.569-22.949-26.354c-4.461-30.777-16.602-59.101-34.427-82.946
	c7.952-10.431,7.169-25.39-2.362-34.922c-9.531-9.531-24.49-10.314-34.922-2.362c-23.845-17.826-52.168-29.967-82.946-34.428
	C235.529,16.986,224.414,7,210.96,7s-24.569,9.986-26.354,22.949c-30.777,4.461-59.101,16.602-82.946,34.428
	c-10.431-7.952-25.39-7.169-34.922,2.362c-9.531,9.531-10.314,24.49-2.362,34.922c-17.826,23.845-29.967,52.168-34.428,82.946
	C16.986,186.391,7,197.506,7,210.96c0,13.454,9.986,24.569,22.949,26.354c4.461,30.777,16.602,59.101,34.428,82.946
	c-7.952,10.431-7.169,25.39,2.362,34.922c9.531,9.531,24.49,10.314,34.922,2.362c23.845,17.826,52.168,29.967,82.946,34.428
	c1.785,12.963,12.901,22.949,26.354,22.949s24.569-9.986,26.354-22.949c30.777-4.461,59.101-16.602,82.946-34.428
	c10.431,7.952,25.39,7.169,34.922-2.362c9.531-9.531,10.314-24.49,2.362-34.922c17.826-23.845,29.967-52.168,34.427-82.946
	C404.934,235.529,414.92,224.414,414.92,210.96z M383.014,237.043c-4.309,28.544-15.581,54.834-32.02,77.087
	c-10.328-6.811-24.357-5.672-33.447,3.418c-9.09,9.09-10.229,23.119-3.418,33.447c-22.253,16.439-48.543,27.711-77.087,32.02
	c-2.455-12.16-13.199-21.316-26.083-21.316s-23.627,9.156-26.083,21.316c-28.544-4.309-54.833-15.581-77.087-32.02
	c6.811-10.328,5.672-24.357-3.418-33.447s-23.119-10.229-33.447-3.418c-16.439-22.253-27.711-48.543-32.02-77.087
	c12.16-2.455,21.316-13.199,21.316-26.083c0-12.884-9.156-23.628-21.316-26.083c4.309-28.544,15.581-54.833,32.02-77.087
	c10.328,6.811,24.357,5.672,33.447-3.418c9.09-9.09,10.229-23.119,3.418-33.447c22.253-16.439,48.543-27.711,77.087-32.02
	c2.455,12.16,13.199,21.316,26.083,21.316s23.627-9.156,26.083-21.316c28.544,4.309,54.834,15.581,77.087,32.02
	c-6.811,10.328-5.672,24.357,3.418,33.447c9.09,9.09,23.119,10.229,33.447,3.418c16.439,22.253,27.711,48.543,32.02,77.087
	c-12.16,2.455-21.316,13.199-21.316,26.083C361.698,223.844,370.854,234.587,383.014,237.043z"
              />
            </g>
            <g className="clock-arm" ref={g => (this.clockArm = g)}>
              <path
                className="clock-arm-outer"
                d="M222.098,82.001c-0.445-5.762-5.262-10.299-11.138-10.299c-5.869,0-10.681,4.526-11.136,10.279l-16.846,126.023
		c-0.856,8.151,1.839,16.605,8.086,22.852c10.988,10.988,28.804,10.988,39.792,0c6.259-6.259,8.952-14.732,8.082-22.897
		L222.098,82.001z"
              />
              <path
                className="clock-arm-inner"
                d="M210.96,233.098c-5.914,0-11.473-2.303-15.653-6.483c-4.723-4.723-7.045-11.247-6.372-17.899
		l16.838-125.961l0.034-0.326c0.208-2.639,2.473-4.727,5.153-4.727c2.685,0,4.949,2.091,5.155,4.761l0.015,0.181l16.847,126.001
		c0.69,6.696-1.63,13.234-6.363,17.968C222.433,230.795,216.874,233.098,210.96,233.098z"
              />
            </g>
            <g className="clock-arm-axis">
              <circle className="outer" cx="210.96" cy="210.96" r="17.059" />
              <circle className="inner" cx="210.96" cy="210.96" r="12.758" />
            </g>
            <g
              className={rotationFixed === 0 ? "clock-one active" : "clock-one"}
              ref={g => (this.one = g)}
              onClick={this.setDegreeOne}
            >
              <circle className="outer" cx="210.96" cy="33.611" r="19.958" />
              <circle className="inner" cx="210.96" cy="33.611" r="15.206" />
            </g>
            <g
              className={
                rotationFixed === 45 ? "clock-two active" : "clock-two"
              }
              ref={g => (this.two = g)}
              onClick={this.setDegreeTwo}
            >
              <circle className="outer" cx="336.365" cy="85.555" r="19.958" />
              <circle className="inner" cx="336.365" cy="85.555" r="15.206" />
            </g>
            <g
              className={
                rotationFixed === 90 ? "clock-three active" : "clock-three"
              }
              ref={g => (this.three = g)}
              onClick={this.setDegreeThree}
            >
              <circle className="outer" cx="388.309" cy="210.96" r="19.958" />
              <circle className="inner" cx="388.309" cy="210.96" r="15.206" />
            </g>
            <g
              className={
                rotationFixed === 135 ? "clock-four active" : "clock-four"
              }
              ref={g => (this.four = g)}
              onClick={this.setDegreeFour}
            >
              <circle className="outer" cx="336.365" cy="336.365" r="19.958" />
              <circle className="inner" cx="336.365" cy="336.365" r="15.206" />
            </g>
            <g
              className={
                rotationFixed === 180 ? "clock-five active" : "clock-five"
              }
              ref={g => (this.five = g)}
              onClick={this.setDegreeFive}
            >
              <circle className="outer" cx="210.96" cy="388.309" r="19.958" />
              <circle className="inner" cx="210.96" cy="388.309" r="15.206" />
            </g>
            <g
              className={
                rotationFixed === 225 ? "clock-six active" : "clock-six"
              }
              ref={g => (this.six = g)}
              onClick={this.setDegreeSix}
            >
              <circle className="outer" cx="85.555" cy="336.365" r="19.958" />
              <circle className="inner" cx="85.555" cy="336.365" r="15.206" />
            </g>
            <g
              className={
                rotationFixed === 270 ? "clock-seven active" : "clock-seven"
              }
              ref={g => (this.seven = g)}
              onClick={this.setDegreeSeven}
            >
              <circle className="outer" cx="33.611" cy="210.96" r="19.958" />
              <circle className="inner" cx="33.611" cy="210.96" r="15.206" />
            </g>
            <g
              className={
                rotationFixed === 315 ? "clock-eight active" : "clock-eight"
              }
              ref={g => (this.eight = g)}
              onClick={this.setDegreeEight}
            >
              <circle className="outer" cx="85.555" cy="85.555" r="19.958" />
              <circle className="inner" cx="85.555" cy="85.555" r="15.206" />
            </g>
          </svg>
        </div>
      </React.Fragment>
    );
  }
}

export default TweenDirectionalRotation;
