import React, { Component } from "react";
import Menu from "../menu";
import { Motion, spring } from "react-motion";
import Card from "./card";
import MotionHeading from "./motionheading";

import "./styles.css";

const AnimatedCard = props => {
  return (
    <Motion
      defaultStyle={{ scale: 0.8 }}
      style={{ scale: spring(1, { stiffness: 60, damping: 10 }) }}
    >
      {interpolatedStyle => <Card scale={interpolatedStyle.scale} {...props} />}
    </Motion>
  );
};

class ReactMotion extends Component {
  state = {
    showMenu: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    const toggledIsOpen = this.state.showMenu ? false : true;
    this.setState({
      showMenu: toggledIsOpen
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9" style={{ overflow: "hidden" }}>
            <MotionHeading />
            <p>Use the following to install React Motion:</p>
            <p className="alert alert-secondary">
              npm install --save react-motion
            </p>
            <h4>Example Cards</h4>
            <AnimatedCard
              title="Andrew"
              content="This is a demo card."
              photo="lion"
            />
            <AnimatedCard
              title="Peter"
              content="This is another demo card."
              photo="elephant"
            />
            <h4>Example Sliding Menu</h4>
            <div
              style={{
                width: "100%",
                height: 300,
                backgroundColor: "#333",
                color: "#fff",
                overflow: "hidden",
                marginTop: 15
              }}
              onClick={this.toggleMenu}
            >
              <Motion
                defaultStyle={{ x: -200, opacity: 0 }}
                style={{
                  x: spring(this.state.showMenu ? 0 : -200),
                  opacity: spring(this.state.showMenu ? 1 : 0)
                }}
              >
                {style => (
                  <div
                    style={{
                      transform: `translateX(${style.x}px)`,
                      opacity: style.opacity,
                      width: 200,
                      height: 300,
                      backgroundColor: "#ededed",
                      color: "#333",
                      padding: "5px 15px 5px 15px"
                    }}
                  >
                    Menu
                  </div>
                )}
              </Motion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactMotion;
