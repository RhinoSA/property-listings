import React, { Component } from "react";
import Menu from "../menu";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class AnimateOnScroll extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9" style={{ overflow: "hidden" }}>
            <h1>Animate on Scroll</h1>
            <p className="alert alert-secondary">
              npm install --save react-animate-on-scroll
              <br />
              npm install --save animate.css
            </p>
            <p>Then to use it in a component:</p>
            <p className="alert alert-secondary">
              import "animate.css/animate.min.css";
              <br />
              import ScrollAnimation from 'react-animate-on-scroll';
            </p>
            <h4>Parameters:</h4>
            <ul className="list-unstyled">
              <li>animateIn='fadeIn'</li>
              <li>animateOut='fadeOut'</li>
              <li>initiallyVisible=&#123;true&#125;</li>
              <li>animateOnce=&#123;true&#125;</li>
              <li>duration=&#123;5&#125;</li>
              <li>delay=&#123;4000&#125;</li>
              <li>scrollableParentSelector='#scrolly-div'</li>
              <li>animatePreScroll=&#123;false&#125;</li>
            </ul>
            <h4>Transitions:</h4>
            <p>
              For a list of all the available transitions, see the{" "}
              <a href="https://daneden.github.io/animate.css" target="animate">
                documentation
              </a>
              .
            </p>
            <h4>Fade Example</h4>
            <ScrollAnimation
              animateIn="fadeInLeft"
              initiallyVisible={true}
              duration={3}
              animateOnce={true}
            >
              <p
                style={{
                  width: "100%",
                  padding: "5px 15px 5px 15px",
                  backgroundColor: "#333",
                  color: "#fff",
                  textAlign: "center"
                }}
              >
                Fade
              </p>
            </ScrollAnimation>
            <h4>Bounce Example</h4>
            <ScrollAnimation
              delay={1000}
              animateIn="bounce"
              initiallyVisible={true}
            >
              <p
                style={{
                  width: "100%",
                  padding: "5px 15px 5px 15px",
                  backgroundColor: "#333",
                  color: "#fff",
                  textAlign: "center"
                }}
              >
                Bounce
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimateOnScroll;
