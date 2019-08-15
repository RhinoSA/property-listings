import React, { Component } from "react";
import Menu from "../menu";

class Functions extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  myName = name => {
    return <p>{"Hello " + name + "."}</p>;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>JavaScript Functions</h1>
            <h2>A Simple Function</h2>
            <p>
              This is an example of a simple function which generates a message
              with a user's name in it. This function only has one paramater,
              which is the name parameter.
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
          </div>
        </div>
      </div>
    );
  }
}

export default Functions;
