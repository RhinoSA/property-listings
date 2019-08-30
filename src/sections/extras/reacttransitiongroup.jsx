import React, { Component } from "react";
import Menu from "../menu";
import ShowMessage from "./showmessage";
import data from "./data/data";
import { CSSTransition } from "react-transition-group";
import Home from "./home";

class ReactTransitionGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      showMessage: false,
      appearHome: true,
      property: data.properties[0]
    };
  }

  toggleAppear = () => {
    this.setState({
      appearHome: !this.state.appearHome
    });
  };

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleEvent = () => {
    this.setState({ message: "Clicked" });
    this.setState({ showMessage: this.state.showMessage === true });
  };

  render() {
    const { appearHome, property } = this.state;
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
            <button onClick={() => this.toggleAppear()}>
              Appear: {`${appearHome}`}
            </button>
            <button
              onClick={() => this.nextProperty()}
              disabled={property.index === data.properties.length - 1}
            >
              Next
            </button>
            <button
              onClick={() => this.prevProperty()}
              disabled={property.index === 0}
            >
              Prev
            </button>

            <CSSTransition
              in={appearHome}
              appear={true}
              timeout={1000}
              classNames="fade"
            >
              <Home property={property} />
            </CSSTransition>
            <h4>Demo</h4>
            <ShowMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default ReactTransitionGroup;
