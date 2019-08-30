import React, { Component } from "react";
import Menu from "../menu";
import { capitalize, uppercase, lowercase, trim, replace } from "./capitalize";

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
            <h2>Manipulating Strings</h2>
            <h4>Capitalizing a String</h4>
            <p>
              Create a function to capitalize a word use the following script,
              which in this case is in a separate file named capitalize.jsx:
            </p>
            <p className="alert alert-secondary">
              export const capitalize = s =&gt; &#123;
              <br />
              &nbsp;&nbsp;if (typeof s !== "string") return "";
              <br />
              &nbsp;&nbsp;return s.charAt(0).toUpperCase() + s.slice(1);
              <br />
              &#125;;
            </p>
            <p>
              To use the function, one needs to import the function into the
              component that will use it as follows:
            </p>
            <p className="alert alert-secondary">
              import &#123; capitalize &#125; from "./capitalize";
            </p>
            <p>Then to capitalize a word use the following:</p>
            <p className="alert alert-secondary">
              &#123;capitalize("capitalized")&#125;
            </p>
            <p>
              <b>The Output:</b>&nbsp;{capitalize("capitalized")}
            </p>
            <h4>Uppercasing a String:</h4>
            <p>This is a function which can be used to uppercase a string:</p>
            <p className="alert alert-secondary">
              export const uppercase = a =&gt; &#123;
              <br />
              &nbsp;&nbsp;if (typeof a !== "string") return "";
              <br />
              &nbsp;&nbsp;return a.toUpperCase();
              <br />
              &#125;;
            </p>
            <p>
              Then to convert a string to uppercase letters, use the following:
            </p>
            <p className="alert alert-secondary">
              &#123;uppercase("capitalized")&#125;
            </p>
            <p>
              <b>The Output:</b>&nbsp;{uppercase("capitalized")}
            </p>
            <h4>Lowercasing a String</h4>
            <p>This is a function that converts a string to lowercase:</p>
            <p className="alert alert-secondary">
              export const lowercase = a =&gt; &#123;
              <br />
              &nbsp;&nbsp;if (typeof a !== "string") return "";
              <br />
              &nbsp;&nbsp;return a.toLowerCase();
              <br />
              &#125;;
            </p>
            <p>
              Then to convert a string to lowercase letters, use the following:
            </p>
            <p className="alert alert-secondary">
              &#123;lowercase("capitalized")&#125;
            </p>
            <p>
              <b>The Output:</b>&nbsp;{lowercase("CapiTalized")}
            </p>
            <h4>Cleaning White Spaces:</h4>
            <p>
              If a string contains unwanted spaces between words, one can use
              the trim function to get rid of the extra white space as follows:
            </p>
            <p className="alert alert-secondary">
              export const trim = a =&gt; &#123;
              <br />
              &nbsp;&nbsp;if (typeof a !== "string") return "";
              <br />
              &nbsp;&nbsp;return a.trim();
              <br />
              &#125;;
            </p>
            <p>To use the function, one would use the following:</p>
            <p className="alert alert-secondary">
              &#123;trim("This is&nbsp;&nbsp;a
              sentence&nbsp;&nbsp;with&nbsp;&nbsp;&nbsp;&nbsp;too many
              spaces.")&#125;
            </p>
            <p>{trim("This is  a sentence  with  too many spaces.")}</p>
            <h4>Replacing Words in a String:</h4>
            <p>
              The function below can be used to replace certain words or
              characters in a string with different values:
            </p>
            <p className="alert alert-secondary">
              export const replace = (a, b, c) => &#123;
              <br />
              &nbsp;&nbsp;let sentence = c;
              <br />
              &nbsp;&nbsp;if (typeof (a, b, c) !== "string") return "";
              <br />
              &nbsp;&nbsp;return sentence.replace(a, b);
              <br />
              &#125;;
            </p>
            <p>This is how one would use the function:</p>
            <p className="alert alert-secondary">
              &#123;replace(
              <br />
              &nbsp;&nbsp;"sentence",
              <br />
              &nbsp;&nbsp;"string of words",
              <br />
              &nbsp;&nbsp;"This is a sentence with too many spaces."
              <br />
              )&#125;
            </p>
            <p>
              {replace(
                "sentence",
                "string of words",
                "This is  a sentence  with  too many spaces."
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Strings;
