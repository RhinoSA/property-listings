import React, { Component } from "react";
import Menu from "../menu";

class Conditionals extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Menu />
            </div>
            <div className="col-md-9">
              <h1>JavaScript Conditionals</h1>
              <h2>Using if and else</h2>
              <p>
                The function below generates a different message based on what
                the user's name is and what the weather is. This function uses
                two parameters, namely name and weather.
              </p>
              <p className="alert alert-secondary">
                myMessage = (name, weather) => &#123;
                <br />
                &nbsp;&nbsp;if (weather === "sunny") &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;let message = "It is a nice day " + name
                + ".";
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return message;
                <br />
                &nbsp;&nbsp;&#125; else &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;let message =<br />
                &nbsp;&nbsp;&nbsp;&nbsp;"It is " + weather + " today, good to
                have you visit " + name + ".";
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
                To then show how many characters were used in the sentence, one
                would add this:
              </p>
              <p className="alert alert-secondary">
                &#123;"(" + this.myMessage("Andrew", "raining").length + "
                characters were used in the above sentence)"&#125;
                <br />
              </p>
              <h4>The Output:</h4>
              <p>{this.myMessage("Andrew", "raining")}</p>
              <p>
                {" (" +
                  this.myMessage("Andrew", "raining").length +
                  " characters were used in the above sentence)"}
              </p>
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
                &nbsp;&nbsp;&nbsp;&nbsp;return "The name " + yourname + " is in
                our database.";
                <br />
                &nbsp;&nbsp;&#125; else if (yourname === "Mark") &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return "The name " + yourname + " is in
                our database.";
                <br />
                &nbsp;&nbsp;&#125; else &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return "The name " + yourname + " is not
                in our database.";
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;
              </p>
              <p>
                To test we use the names "Andrew" and "Patrick" to see the
                results:
              </p>
              <p className="alert alert-secondary">
                &#123;this.determineAnswer("Patrick")&#125;
                <br />
                &#123;this.determineAnswer("Andrew")&#125;
              </p>
              <h4>The Output:</h4>
              <p>{this.determineAnswer("Patrick")}</p>
              <p>{this.determineAnswer("Andrew")}</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Conditionals;
