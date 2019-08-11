import React, { Component } from "react";

class ToggleButton extends Component {
  state = {
    counter: 0,
    hasButtonBeenClicked: false,
    disabled: false
  };

  handleClickButton = () => {
    this.setState({ counter: this.state.counter + 1 }, () =>
      this.setState({ hasbuttonHasBeenClicked: this.state.counter > 0 })
    );
    this.setState({
      hasButtonBeenClicked: this.state.hasButtonBeenClicked === false
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Toggle State Counter</h2>
        <p>
          The function below is used to create a toggle button that increments a
          number each time the button is clicked.
        </p>
        <p className="alert alert-secondary">
          state = &#123;
          <br />
          &nbsp;&nbsp;counter: 0,
          <br />
          &nbsp;&nbsp;hasButtonBeenClicked: false,
          <br />
          &nbsp;&nbsp;disabled: false
          <br />
          &#125;;
          <br />
          <br />
          handleClickButton = () => &#123;
          <br />
          &nbsp;&nbsp;this.setState(&#123; counter: this.state.counter + 1
          &#125;, () =&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; hasbuttonHasBeenClicked:
          this.state.counter &gt; 0 &#125;)
          <br />
          &nbsp;&nbsp;);
          <br />
          &nbsp;&nbsp;this.setState(&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;hasButtonBeenClicked:
          this.state.hasButtonBeenClicked === false
          <br />
          &nbsp;&nbsp;&#125;);
          <br />
          &#125;;
        </p>
        <p>Then to use the function use the following:</p>
        <p className="alert alert-secondary">
          &lt;button
          <br />
          &nbsp;&nbsp;onClick=&#123;this.handleClickButton&#125;
          <br />
          &nbsp;&nbsp;className="btn btn-secondary"
          <br />
          &nbsp;&nbsp;style=&#123;&#123; width: 140 &#125;&#125;
          <br />
          &nbsp;&nbsp;disabled=&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.state.disabled === "true" ||
          this.state.disabled === true
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &gt;
          <br />
          &nbsp;&nbsp;&#123;(this.state.hasButtonBeenClicked &amp;&amp; "Button
          On - ") ||
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;"Button Off - "&#125;
          <br />
          &nbsp;&nbsp;
          (&#123;this.state.counter&#125;)
          <br />
          &lt;/button&gt;
        </p>
        <h4>The Output:</h4>
        <p>
          <button
            onClick={this.handleClickButton}
            className="btn btn-secondary"
            style={{ width: 140 }}
            disabled={
              this.state.disabled === "true" || this.state.disabled === true
            }
          >
            {(this.state.hasButtonBeenClicked && "Button On - ") ||
              "Button Off - "}
            {this.state.text} ({this.state.counter})
          </button>
        </p>
      </React.Fragment>
    );
  }
}

export default ToggleButton;
