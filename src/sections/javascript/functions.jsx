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

  returnName(nameFunction) {
    return "Hello " + nameFunction() + ".";
  }

  closureFunction(name) {
    let weather = "sunny";
    let innerFunction = function() {
      return "Hello " + name + ". Today is " + weather + ".";
    };
    return innerFunction();
  }

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
            <h2>Using Variable Closure</h2>
            <p>
              If you define a function that is inside another function, thus
              creating inner and outer functions, then the inner function is
              able to access the outer function's variables, using the feature
              called closure, as follows:
            </p>
            <p className="alert alert-secondary">
              closureFunction(name) &#123;
              <br />
              &nbsp;&nbsp;let weather = "sunny";
              <br />
              &nbsp;&nbsp;let innerFunction = function() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return "Hello " + name + ". Today is " +
              weather + ".";
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              &nbsp;&nbsp;return innerFunction();
              <br />
              &#125;
            </p>
            <p>To use this function you would do the following:</p>
            <p className="alert alert-secondary">
              &#123;this.closureFunction("Andrew")&#125;
            </p>
            <h4>The Output:</h4>
            <p>{this.closureFunction("Andrew")}</p>
            <h2>Using Template Strings</h2>
            <p>
              Template strings are used when you want to combine static content
              with data values to produce a string as follows:
            </p>
            <p className="alert alert-secondary">
              messageFunction(weather) &#123;
              <br />
              &nbsp;&nbsp;let message = `It is &#36;{/**/}&#123;weather&#125;
              today`;
              <br />
              &#125;
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Functions;
