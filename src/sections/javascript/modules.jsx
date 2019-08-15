import React, { Component } from "react";
import Menu from "../menu";
// Module Example
import totalValues from "./totalvalues";
import { subtract, multiply, add } from "./operations";

class Modules extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  returnValues = () => {
    let values = [10, 20, 30, 40, 50, 60, 70, 80];
    let total = totalValues(values);
    let subtracted = subtract(values, 460);
    let sumtotal = add(values);
    let multiplied = multiply(values[0], values[3]);
    return (
      <React.Fragment>
        <p>
          Total: ${total}
          <br />
          Subtracted: ${subtracted}
          <br />
          Added: ${sumtotal}
          <br />
          Multiplied: {values[0]} * {values[3]} = {multiplied}
        </p>
      </React.Fragment>
    );
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
              <h1>Javascript Modules</h1>
              <p>
                Modules contain JavaScript code that other parts of an
                application depend on. This is an example of creating a module
                which adds up the numbers in an array to get the total. This is
                the JavaScript for the file named "totalvalues.jsx" which does
                the calculations for adding up the totals:
              </p>
              <p className="alert alert-secondary">
                export default function(values) &#123;
                <br />
                &nbsp;&nbsp;return values.reduce((total, val) => total + val,
                0);
                <br />
                &#125;
              </p>
              <p>
                This is another component which has more than one function
                included that is also used to calculate values:
              </p>
              <p className="alert alert-secondary">
                export function subtract(values, amount)&#123;
                <br />
                &nbsp;&nbsp;return values.reduce((total, val) => total - val,
                amount);
                <br />
                &#125;
                <br />
                <br />
                export function add(values) &#123;
                <br />
                &nbsp;&nbsp;return values.reduce((total, val) => total + val,
                200);
                <br />
                &#125;
                <br />
                <br />
                export function divide(first, second) &#123;
                <br />
                &nbsp;&nbsp;return first / second;
                <br />
                &#125;
              </p>
              <p>
                Then to use these two modules, include the following import
                statement:
              </p>
              <p className="alert alert-secondary">
                import totalValues from "./includes/totalvalues";
                <br />
                import operations from "./includes/operations";
              </p>
              <p>
                Then to use the function from the module inside another function
                on the page you use the following:
              </p>
              <p className="alert alert-secondary">
                returnValues = () => &#123;
                <br />
                &nbsp;&nbsp;let values = [10, 20, 30, 40, 50, 60, 70, 80];
                <br />
                &nbsp;&nbsp;let total = totalValues(values);
                <br />
                &nbsp;&nbsp;let subtracted = subtract(values, 460);
                <br />
                &nbsp;&nbsp;let sumtotal = add(values);
                <br />
                &nbsp;&nbsp;let multiplied = multiply(values[0], values[3]);
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total: &#36;
                {/**/}
                &#123;total&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subtracted:
                &#36;
                {/**/}
                &nbsp;&nbsp;&#123;subtracted&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Added: &#36;
                {/**/}
                &#123;sumtotal&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiplied:
                &nbsp;&nbsp;&#123;values[0]&#125; * &#123;values[3]&#125; =
                &#123;multiplied&#125;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
                <br />
                &nbsp;&nbsp;);
                <br />
                &#125;;
              </p>
              {this.returnValues()}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Modules;
