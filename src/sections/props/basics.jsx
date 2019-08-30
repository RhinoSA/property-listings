import React, { Component } from "react";
import Menu from "../menu";
import StateChild from "./statechild";

function Person(props) {
  return (
    <div className="card mt-3">
      <p className="card-body mb-2">
        Name: {props.name}
        <br />
        Age: {props.age}
        {props.children === "" ? "" : props.children}
      </p>
    </div>
  );
}

class PropsBasics extends Component {
  state = {};

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
            <h1>Props &amp; State</h1>
            <StateChild />
            <h2>Props</h2>
            <p>
              Below is a function which one could use to generate a component
              using prop values passed down via a component call:
            </p>
            <p className="alert alert-secondary">
              function Person(props) &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card mt-3"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="card-body"
              style=&#123;&#123;paddingBottom:0&#125;&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:&nbsp;&#123;props.name&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age:&nbsp;&#123;props.age&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.children
              === "" ? "" : props.children&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
            </p>
            <p>To use the above function, one would do the following:</p>
            <p className="alert alert-secondary">
              &lt;Person name="Andrew" age="9"&gt;
              <br />
              &nbsp;&nbsp;&lt;br /&gt;This is inside the tag...
              <br />
              &lt;/Person&gt;
              <br />
              &lt;Person name="John" age="23" /&gt;
            </p>
            <h4>The Output:</h4>
            <Person name="Andrew" age="9">
              <br />
              This is inside the tag...
            </Person>
            <Person name="John" age="23" />
            <p className="mt-3">
              From the above output you can see conditional rendering was used
              to output a result based on whether there was information inside
              the component call. This nested information inside a component
              call is accessed by using &#123;props.children&#125;. One could
              include further components inside the component declaration to
              create nested components which generate an output using the nested
              components.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PropsBasics;
