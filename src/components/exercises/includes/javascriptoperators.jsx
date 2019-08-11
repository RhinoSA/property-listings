import React, { Component } from "react";

class JavaScriptOperators extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>JavaScript Operators</h2>
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
                Less than, less than or equal to, more than, more than or equla
                to
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
              <td>Logical AND and OR (|| used to coalesce null values)</td>
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
      </React.Fragment>
    );
  }
}

export default JavaScriptOperators;
