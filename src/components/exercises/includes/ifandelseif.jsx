import React, { Component } from "react";

class IfAndElseIf extends Component {
  state = {};

  determineAnswer = yourname => {
    if (yourname === "Andrew") {
      return "The name " + yourname + " is in our database.";
    } else if (yourname === "Mark") {
      return "The name " + yourname + " is in our database.";
    } else {
      return "The name " + yourname + " is not in our database.";
    }
  };

  render() {
    return (
      <React.Fragment>
        <h2>Using if, else if and else</h2>
        <p>
          This is an example of using a conditional if, else if and else
          function.
        </p>
        <p className="alert alert-secondary">
          determineAnswer = yourname => &#123;
          <br />
          &nbsp;&nbsp;if (yourname === "Andrew") &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return "The name " + yourname + " is in our
          database.";
          <br />
          &nbsp;&nbsp;&#125; else if (yourname === "Mark") &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return "The name " + yourname + " is in our
          database.";
          <br />
          &nbsp;&nbsp;&#125; else &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return "The name " + yourname + " is not in
          our database.";
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;
        </p>
        <p>
          To test we use the names "Andrew" and "Patrick" to see the results:
        </p>
        <p className="alert alert-secondary">
          &#123;this.determineAnswer("Patrick")&#125;
          <br />
          &#123;this.determineAnswer("Andrew")&#125;
        </p>
        <h4>The Output:</h4>
        <p>{this.determineAnswer("Patrick")}</p>
        <p>{this.determineAnswer("Andrew")}</p>
      </React.Fragment>
    );
  }
}

export default IfAndElseIf;
