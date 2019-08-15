import React, { Component } from "react";
import Menu from "../menu";
import FunctionPropsInclude from "./functionpropsinclude";

class FunctionProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namesNew: ["John", "Simon", "Patrick", "Michael"]
    };
  }

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
          <div className="col-md-9">
            {/* FUNCTION PROPS */}
            <h1>Function Props</h1>
            <p>
              The previous message component example demonstated the use of data
              props, which provide a child component with a read-only data
              value. React also supports function props, where the parent
              component provides a child with a function that it can invoke to
              notify the parent that something important has happened. The
              parent component can respond by changing the value of the data
              props, which will trigger an update and allow the child to present
              updated content to the user.
            </p>
            <FunctionPropsInclude names={this.state.namesNew} />
            {/* END FUNCTION PROPS */}
          </div>
        </div>
      </div>
    );
  }
}

export default FunctionProps;
