import React, { Component } from "react";

class SimpleFunction extends Component {
  state = {};

  myName = name => {
    return <p>{"Hello " + name + "."}</p>;
  };

  render() {
    return (
      <React.Fragment>
        <h2>A Simple Function</h2>
        <p>
          This is an example of a simple function which generates a message with
          a user's name in it. This function only has one paramater, which is
          the name parameter.
        </p>
        <p className="alert alert-secondary">
          myName = name => &#123;
          <br />
          &nbsp;&nbsp;return &lt;p&gt;&#123;"Hello " + name +
          "."&#125;&lt;/p&gt;;
          <br />
          &#125;;
        </p>
        <p>To call this function one would use the following:</p>
        <p className="alert alert-secondary">
          &#123;this.myName("Andrew")&#125;
        </p>
        <h4>The Output:</h4>
        {this.myName("Andrew")}
      </React.Fragment>
    );
  }
}

export default SimpleFunction;
