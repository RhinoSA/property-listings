import React, { Component } from "react";
import Menu from "../menu";

class Operators extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Operators;
