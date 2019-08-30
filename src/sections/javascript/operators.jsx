import React, { Component } from "react";
import Menu from "../menu";

class Operators extends Component {
  state = {
    buttonClicked: false,
    count: 0,
    disabled: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = () => {
    this.setState({
      buttonClicked: this.state.buttonClicked === false
    });
    this.setState({ count: this.state.count + 1 });
    if (this.state.count >= 2) {
      this.setState({ disabled: this.state.disabled !== "true" });
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
              <h1>JavaScript Operators</h1>
              <table className="table mt-3">
                <thead className="thead-dark">
                  <tr>
                    <th colSpan="2">JavaScript Operators</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>++, --</td>
                    <td>Pre- or post-increment and decrement</td>
                  </tr>
                  <tr>
                    <td>+, -, *, /, %</td>
                    <td>
                      Addition, subtraction, multiplication, division, remainder
                    </td>
                  </tr>
                  <tr>
                    <td>&lt;, &lt;=, &gt;, &gt;=</td>
                    <td>
                      Less than, less than or equal to, more than, more than or
                      equla to
                    </td>
                  </tr>
                  <tr>
                    <td>==, !=</td>
                    <td>Equality and inequality tests</td>
                  </tr>
                  <tr>
                    <td>===, !==</td>
                    <td>Identity and nonidentity tests</td>
                  </tr>
                  <tr>
                    <td>&amp;&amp;, ||</td>
                    <td>
                      Logical AND and OR (|| used to coalesce null values)
                    </td>
                  </tr>
                  <tr>
                    <td>=</td>
                    <td>Assignment</td>
                  </tr>
                  <tr>
                    <td>+</td>
                    <td>String concatenation</td>
                  </tr>
                  <tr>
                    <td>? :</td>
                    <td>Three-operand conditional statement</td>
                  </tr>
                </tbody>
              </table>
              <h2>Using Operators</h2>
              <p>
                This is an example of how one can use operators. This example
                creates a button which can only be clicked three times. If the
                button is clicked three times it becomes disabled and the
                wording in the sentence above the button changes. Below is the
                function and the state properties for this example:
              </p>
              <p className="alert alert-secondary">
                state = &#123;
                <br />
                &nbsp;&nbsp;buttonClicked: false,
                <br />
                &nbsp;&nbsp;count: 0,
                <br />
                &nbsp;&nbsp;disabled: false
                <br />
                &#125;;
                <br />
                <br />
                handleClick = () => &#123;
                <br />
                &nbsp;&nbsp;this.setState(&#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;buttonClicked: this.state.buttonClicked
                === false
                <br />
                &nbsp;&nbsp;&#125;);
                <br />
                &nbsp;&nbsp;this.setState(&#123; count: this.state.count + 1
                &#125;);
                <br />
                &nbsp;&nbsp;if (this.state.count &gt;= 2) &#123;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; disabled:
                this.state.disabled !== "true" &nbsp;&nbsp;&#125;);
                <br />
                &nbsp;&nbsp;&#125;
                <br />
                &#125;;
              </p>
              <p>
                This is the code to create the button and the sentence that
                changes:
              </p>
              <p className="alert alert-secondary">
                &lt;p&gt;
                <br />
                &nbsp;&nbsp;&#123;this.state.disabled === true
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;? "You have clicked on the button three
                times, it is now disabled."
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;: "This button below can only be clicked
                on three times."&#125;
                <br />
                &lt;/p&gt;
                <br />
                &lt;p&gt;
                <br />
                &nbsp;&nbsp;&lt;button
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;className="btn btn-secondary"
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;this.handleClick&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;disabled=&#123;this.state.disabled&#125;
                <br />
                &nbsp;&nbsp;&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.buttonClicked === false
                ? "On" : "Off"&#125;&amp;nbsp;(&#123;this.state.count&#125;)
                <br />
                &nbsp;&nbsp;&lt;/button&gt;
                <br />
                &lt;/p&gt;
              </p>
              <p>
                {this.state.disabled === true
                  ? "You have clicked on the button three times, it is now disabled."
                  : "This button below can only be clicked on three times."}
              </p>
              <p>
                <button
                  className="btn btn-secondary"
                  onClick={this.handleClick}
                  disabled={this.state.disabled}
                >
                  {this.state.buttonClicked === false ? "On" : "Off"}&nbsp;(
                  {this.state.count})
                </button>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Operators;
