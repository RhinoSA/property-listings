import React, { Component } from "react";
import Menu from "../menu";
import DirectionDisplay from "./directiondisplay";

class StateFromProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Andrew",
      counter: 100,
      showMessage: true,
      intervalId: 0,
      showBanner: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changeCounter = val => {
    this.setState({ counter: this.state.counter + val });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Setting State from Props</h1>
            <p>
              The getDerivedStateFromProps method is called before the render
              method in the mounting sequence before the shouldComponentUpdate
              in the update phase. The getDerivedStateFromProps method provides
              components with the opportunity to inspect prop values and use
              them to update its state data before its content is rendered and
              is intended for use by components whose behaviour is affected by
              changing prop values over time. The getDerivedStateFromProps
              method is static, which means that it is unable to access any
              instance methods or properties via the this keyword. Instead, the
              method receives a props object, which contains the props values
              provided by the parent component, and a state object, which
              represents the current state data. The getDerivedStateFromProps
              method returns a new state data object that is derived from the
              prop data.
            </p>
            <p>
              In the example below, the component displays a numeric value with
              a background colour that indicates whether the current value is
              larger or smaller than the last value. The
              getDerivedStateFromProps method receives the new prop values and
              the component's current state data and uses them to create a new
              state data object that includes the direction in which the prop
              value has changed. The DirectionDisplay component and buttons that
              change its prop data value.
            </p>
            <DirectionDisplay value={this.state.counter} />
            <div className="text-center">
              <button
                className="btn btn-primary m-1"
                onClick={() => this.changeCounter(-1)}
              >
                Decrease
              </button>
              <button
                className="btn btn-info m-1"
                onClick={() => this.changeCounter(1)}
              >
                Increase
              </button>
            </div>
            <p>
              This is the code for the component named "DirectionDisplay" used
              in this example:
            </p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              <br />
              export class DirectionDisplay extends Component &#123;
              <br />
              &nbsp;&nbsp;constructor(props) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;super(props);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: "up",
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastValue: 0<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;getClasses() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(this.state.direction === "up"
              ? "bg-secondary" : "bg-danger") +<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" text-white text-center p-2"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return &lt;h5
              className=&#123;this.getClasses()&#125;&gt;&#123;this.props.value&#125;&lt;/h5&gt;;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;static getDerivedStateFromProps(props, state) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;if (props.value !== state.lastValue)
              &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastValue:
              props.value,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction:
              state.lastValue > props.value ? "down" : "up"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return state;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <p>
              On the component which you will add the DirectionDisplay component
              add the following component call:
            </p>
            <p className="alert alert-secondary">
              &lt;DirectionDisplay value=&#123;this.state.counter&#125; /&gt;
            </p>
            <p>
              Below the call for the DirectionDisplay component you also need to
              include these two buttons:
            </p>
            <p className="alert alert-secondary">
              &lt;div className="text-center"&gt;
              <br />
              &nbsp;&nbsp;&lt;button
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;className="btn btn-secondary m-1"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;() =>
              this.changeCounter(-1)&#125;
              <br />
              &nbsp;&nbsp;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Decrease
              <br />
              &nbsp;&nbsp;&lt;/button&gt;
              <br />
              &nbsp;&nbsp;&lt;button
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;className="btn btn-secondary m-1"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;() =>
              this.changeCounter(1)&#125;
              <br />
              &nbsp;&nbsp;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;Increase
              <br />
              &nbsp;&nbsp;&lt;/button&gt;
              <br />
              &lt;/div&gt;
            </p>
            <p>
              Lastly you will need to add the following constructor function to
              the component which has the DirectionDisplay component:
            </p>
            <p className="alert alert-secondary">
              constructor(props) &#123;
              <br />
              &nbsp;&nbsp;super(props);
              <br />
              &nbsp;&nbsp;this.state = &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;counter: 100
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              &#125;
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default StateFromProps;
