import React, { Component } from "react";
import ChildState from "../examples/childstate";
import Title from "../modules/title";

class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
    this.decreaseCountDisable = this.decreaseCountDisable.bind(this);
    this.decreaseCountClass = this.decreaseCountClass.bind(this);
    this.resetState = this.resetState.bind(this);
    this.formatCount = this.formatCount.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  decreaseCount() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  decreaseCountDisable() {
    const { count } = this.state;
    return count === 0 ? "disabled" : null;
  }

  resetState() {
    console.log("Reset Clicked!");
    this.setState({ count: 0 });
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge mb-2 badge-";
    classes += this.state.count === 0 ? "warning" : "secondary";
    return classes;
  }

  getButtonClasses() {
    let classes = "btn btn-secondary btn-sm";
    classes += this.state.count !== 0 ? "" : " disabled";
    return classes;
  }

  decreaseCountClass() {
    let classcount = "btn btn-secondary btn-sm";
    classcount += this.state.count >= 1 ? "" : " disabled";
    return classcount;
  }

  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: 0 }}>
          <Title
            name="Our"
            title="Manipulating the State"
            className="col-md-12"
          />
          <p>
            This example demonstrates how one can change the state of the data
            used in your app. You will see if you click on the "Change the
            State" button it will change the word inside the yellow badge from
            "Zero" to the number "1". Clicking on the "Change the State" button
            again increases the number as you click on it. You will also see
            that there is another counter below which also updates when you
            change the state. This other counter resides in a child component of
            this component. The changes made to this parent component are passed
            down to the child component.
          </p>
          <h4>
            <span
              style={{ paddingTop: 6, width: 68 }}
              className={this.getBadgeClasses()}
            >
              {this.formatCount()}
            </span>
          </h4>
          <div className="btn-group">
            <button
              onClick={this.decreaseCount}
              className={this.decreaseCountClass()}
              disabled={this.state.count <= 0 ? "disabled" : null}
            >
              -
            </button>
            <button
              className={this.getButtonClasses()}
              onClick={this.resetState}
              disabled={this.state.count <= 0 ? "disabled" : null}
            >
              0
            </button>
            <button
              onClick={this.handleClick}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
          </div>
          <hr />
          <ChildState count={this.state.count} />
        </div>
      </React.Fragment>
    );
  }
}

export default State;
