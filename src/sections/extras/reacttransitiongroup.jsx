import React, { Component } from "react";
import Menu from "../menu";
import ShowMessage from "./showmessage";

class ReactTransitionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showMessage: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleEvent = () => {
    this.setState({ message: "Clicked" });
    this.setState({ showMessage: this.state.showMessage === true });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>React Transition Group</h1>
            <p>Installing React Transition Group:</p>
            <p className="alert alert-secondary">
              npm install react-transition-group --save
            </p>
            <p>
              For more information on using React Transition Group, see the{" "}
              <a
                href="https://reactcommunity.org/react-transition-group"
                target="transition"
              >
                documentation
              </a>
              .
            </p>
            <h4>Demo</h4>
            <ShowMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactTransitionGroup;
