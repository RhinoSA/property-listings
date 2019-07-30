import React, { Component } from "react";

class ChildState extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Counter: {this.props.count}</h4>
        <p>
          The counter above is updated in the parent component
          (manipulatingstate.jsx) and the updated changes to the parent's state
          are passed down to this child component (state.jsx).
        </p>
      </React.Fragment>
    );
  }
}

export default ChildState;
