import React, { Component } from "react";
import { TweenMax } from "gsap/all";
import { Transition } from "react-transition-group";

class SimpleTransition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.toggleComponent = this.toggleComponent.bind(this);
  }

  toggleComponent() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { show } = this.state;
    return (
      <React.Fragment>
        <h2>Transition Group &amp; GSAP Sample</h2>
        <p>
          This sample uses Transition to mount and unmount a component. After
          mounting the component is <strong>animated in</strong> by GSAP. Then
          the component is <strong>animated out</strong> and when the animation
          is complete, is unmounted.
        </p>
        <hr />
        <div className="btn-group">
          <button className="btn btn-info" onClick={this.toggleComponent}>
            Toggle Component
          </button>
        </div>

        <div className="row justify-content-center">
          <Transition
            timeout={1000}
            mountOnEnter
            unmountOnExit
            in={show}
            addEndListener={(node, done) => {
              TweenMax.to(node, 0.5, {
                x: show ? 0 : 100,
                autoAlpha: show ? 1 : 0,
                onComplete: done
              });
            }}
          >
            <div className="card col-6 transition-card simple">
              <div className="card-body">
                <h5 className="card-title">
                  Animating React with GSAP
                  <button
                    type="button"
                    className="close"
                    onClick={() => this.setState({ show: false })}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </h5>
                <p className="card-text">
                  This entire element is mounted before the in animation starts
                  and unmounted after the out animation is complete!!
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </React.Fragment>
    );
  }
}

export default SimpleTransition;
