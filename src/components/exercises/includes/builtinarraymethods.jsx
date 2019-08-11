import React, { Component } from "react";

class BuiltInArrayMethods extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Built-in Array Methods</h2>
        <table className="table mt-3">
          <thead className="thead-dark">
            <tr>
              <th colSpan="2">Built-in Array Methods</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "20%" }}>concat(otherArray)</td>
              <td style={{ width: "80%" }} className="col-md-8">
                This method returns a new array that concatenates the array on
                which it has been called with the array specified as the
                argument. Multiple arrays can be specified.
              </td>
            </tr>
            <tr>
              <td>join(separator)</td>
              <td>
                This method joins all the elements in the array to form a
                string. The argument specifies the character used to delimit the
                items.
              </td>
            </tr>
            <tr>
              <td>pop()</td>
              <td>
                This method removes and returns the last item in the array.
              </td>
            </tr>
            <tr>
              <td>shift()</td>
              <td>
                This method removes and returns the first item in the array.
              </td>
            </tr>
            <tr>
              <td>push()</td>
              <td>
                This method appends the specified item to the end of an array.
              </td>
            </tr>
            <tr>
              <td>unshift()</td>
              <td>
                This method inserts a new item at the beginning of an array.
              </td>
            </tr>
            <tr>
              <td>reverse()</td>
              <td>
                This method returns a new array with the items in a reversed
                order.
              </td>
            </tr>
            <tr>
              <td>slice(start, end)</td>
              <td>This method returns a section of the array.</td>
            </tr>
            <tr>
              <td>sort()</td>
              <td>
                This method sorts the array. An optional comparison function can
                be used to perform custom comparisons.
              </td>
            </tr>
            <tr>
              <td>splice(index, count)</td>
              <td>
                This method removes "count" items from the array, starting at
                the specified index. The removed items are returned as a result
                of this method.
              </td>
            </tr>
            <tr>
              <td>every(test)</td>
              <td>
                This method calls the "test" function for each item in the array
                and returns true if the function returns true for all of them or
                false otherwise.
              </td>
            </tr>
            <tr>
              <td>some(test)</td>
              <td>
                This method returns true if calling the "test" function for each
                item in the array returns true at least once.
              </td>
            </tr>
            <tr>
              <td>filter(test)</td>
              <td>
                This method returns a new array containing the items for which
                the "test" funtion returns "true".
              </td>
            </tr>
            <tr>
              <td>find(test)</td>
              <td>
                This method returns the first item in the array for which the
                "test" funtion returns "true".
              </td>
            </tr>
            <tr>
              <td>forEach(callback)</td>
              <td>
                This method invokes the "callback" function for each item in the
                array, as described in the previous section. "test" funtion
                returns "true".
              </td>
            </tr>
            <tr>
              <td>includes(value)</td>
              <td>
                This method returns "true" if the array contains the specified
                value.
              </td>
            </tr>
            <tr>
              <td>map(callback)</td>
              <td>
                This method returns a new array containing the result of
                invoking the callback function for every item in the array.
              </td>
            </tr>
            <tr>
              <td>reduce(callback)</td>
              <td>
                This method returns the accumulated value produced by invoking
                the callback function for every item in the array.
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default BuiltInArrayMethods;
