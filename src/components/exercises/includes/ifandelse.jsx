import React, { Component } from "react";

class IfAndElse extends Component {
  state = {};

  myMessage = (name, weather) => {
    if (weather === "sunny") {
      let message = "It is a nice day " + name + ".";
      return message;
    } else {
      let message =
        "It is " + weather + " today, good to have you visit " + name + ".";
      return message;
    }
  };

  render() {
    return (
      <React.Fragment>
        <h2>Using if and else</h2>
        <p>
          The function below generates a different message based on what the
          user's name is and what the weather is. This function uses two
          parameters, namely name and weather.
        </p>
        <p className="alert alert-secondary">
          myMessage = (name, weather) => &#123;
          <br />
          &nbsp;&nbsp;if (weather === "sunny") &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;let message = "It is a nice day " + name +
          ".";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return message;
          <br />
          &nbsp;&nbsp;&#125; else &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;let message =<br />
          &nbsp;&nbsp;&nbsp;&nbsp;"It is " + weather + " today, good to have you
          visit " + name + ".";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return message;
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;
        </p>
        <p>To test the output, one would use the following:</p>
        <p className="alert alert-secondary">
          &#123;this.myMessage("Andrew", "raining")&#125;
        </p>
        <p>{this.myMessage("Andrew", "raining")}</p>
        <p>
          To then show how many characters were used in the sentence, one would
          add this:
        </p>
        <p className="alert alert-secondary">
          &#123;"(" + this.myMessage("Andrew", "raining").length + " characters
          were used in the above sentence)"&#125;
          <br />
        </p>
        <h4>The Output:</h4>
        <p>{this.myMessage("Andrew", "raining")}</p>
        <p>
          {" (" +
            this.myMessage("Andrew", "raining").length +
            " characters were used in the above sentence)"}
        </p>
      </React.Fragment>
    );
  }
}

export default IfAndElse;
