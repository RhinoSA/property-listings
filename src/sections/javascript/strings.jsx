import React, { Component } from "react";
import Menu from "../menu";

class Strings extends Component {
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
            <h1>JavaScript Strings</h1>
            <table className="table mt-3">
              <thead className="thead-dark">
                <tr>
                  <th colSpan="2">JavaScript Strings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: "20%" }}>length</td>
                  <td style={{ width: "80%" }} className="col-md-8">
                    This property rerurns the number of characters in a string.
                  </td>
                </tr>
                <tr>
                  <td>charAt(index)</td>
                  <td>
                    This method returns a string containing the character at the
                    specified index.
                  </td>
                </tr>
                <tr>
                  <td>concat(string)</td>
                  <td>
                    This method returns a new string that concatenates the
                    string on which the method is called and the string provided
                    as an argument.
                  </td>
                </tr>
                <tr>
                  <td>indexOf(term, start)</td>
                  <td>
                    This method returns the first index at which the term
                    appears in the string or -1 if there is no match. The
                    optional start argument specifies the start index for the
                    search.
                  </td>
                </tr>
                <tr>
                  <td>replace(term, newTerm)</td>
                  <td>
                    This method returns a new string in which all instances of
                    term are replaced with newTerm.
                  </td>
                </tr>
                <tr>
                  <td>slice(start, end)</td>
                  <td>
                    This method returns a substring containing the characters
                    between the start and end indices.
                  </td>
                </tr>
                <tr>
                  <td>split(term)</td>
                  <td>
                    This method splits up a string into an array of values that
                    were separated by term.
                  </td>
                </tr>
                <tr>
                  <td>
                    toUpperCase()
                    <br />
                    toLowerCase()
                  </td>
                  <td>
                    This method returns a new string in which all characters are
                    either uppercase or lowercase.
                  </td>
                </tr>
                <tr>
                  <td>trim()</td>
                  <td>
                    This method returns a new string from which all the leading
                    and trailing whitespace characters have been removed.
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Converting Strings to Numbers</h2>
            <p>
              This example demonstrates how one can convert strings to numbers.
            </p>
            <p className="alert alert-secondary">
              let firstval = "5";
              <br />
              let secondval = "8";
              <br />
              <br />
              let result = Number(firstval) + Number(secondval);
              <br />
              console.log(result)
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Strings;
