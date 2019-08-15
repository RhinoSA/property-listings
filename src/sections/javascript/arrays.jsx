import React, { Component } from "react";
import Menu from "../menu";

import Summary from "./summary";

class Arrays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { id: 1, action: "Buy flowers", done: false },
        { id: 2, action: "Clean the house", done: true },
        { id: 3, action: "Mow the lawn", done: false },
        { id: 4, action: "Wash the car", done: false }
      ]
    };
  }

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
            <h1>JavaScript Arrays</h1>
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
                    This method returns a new array that concatenates the array
                    on which it has been called with the array specified as the
                    argument. Multiple arrays can be specified.
                  </td>
                </tr>
                <tr>
                  <td>join(separator)</td>
                  <td>
                    This method joins all the elements in the array to form a
                    string. The argument specifies the character used to delimit
                    the items.
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
                    This method appends the specified item to the end of an
                    array.
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
                    This method sorts the array. An optional comparison function
                    can be used to perform custom comparisons.
                  </td>
                </tr>
                <tr>
                  <td>splice(index, count)</td>
                  <td>
                    This method removes "count" items from the array, starting
                    at the specified index. The removed items are returned as a
                    result of this method.
                  </td>
                </tr>
                <tr>
                  <td>every(test)</td>
                  <td>
                    This method calls the "test" function for each item in the
                    array and returns true if the function returns true for all
                    of them or false otherwise.
                  </td>
                </tr>
                <tr>
                  <td>some(test)</td>
                  <td>
                    This method returns true if calling the "test" function for
                    each item in the array returns true at least once.
                  </td>
                </tr>
                <tr>
                  <td>filter(test)</td>
                  <td>
                    This method returns a new array containing the items for
                    which the "test" funtion returns "true".
                  </td>
                </tr>
                <tr>
                  <td>find(test)</td>
                  <td>
                    This method returns the first item in the array for which
                    the "test" funtion returns "true".
                  </td>
                </tr>
                <tr>
                  <td>forEach(callback)</td>
                  <td>
                    This method invokes the "callback" function for each item in
                    the array, as described in the previous section. "test"
                    funtion returns "true".
                  </td>
                </tr>
                <tr>
                  <td>includes(value)</td>
                  <td>
                    This method returns "true" if the array contains the
                    specified value.
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
                    This method returns the accumulated value produced by
                    invoking the callback function for every item in the array.
                  </td>
                </tr>
              </tbody>
            </table>
            <h2>Using for and push to Output an Array</h2>
            <p>
              The function in this example returns a list of names with the
              number of characters in the name displayed in brackers next to the
              name. Create a file named summary.jsx with the following code:
            </p>
            <p className="alert alert-secondary">
              import React from "react";
              <br />
              <br />
              function createInnerElements(names) &#123;
              <br />
              &nbsp;&nbsp;let arrayElems = [];
              <br />
              &nbsp;&nbsp;let value = 0;
              <br />
              &nbsp;&nbsp;for (let i = 0; i &lt; names.length; i++) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;arrayElems.push(
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              className="list-group-item" key=&#123;value++&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;`&#46;&#123;names[i]&#125;
              (&#46;&#123;names[i].length&#125;)`&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;return arrayElems;
              <br />
              &#125;
              <br />
              export function Summary(props) &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="list-group
              mb-3 mt-3"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;createInnerElements(props.names)&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
            </p>
            <p>
              Then to use this function, use the following on your component:
            </p>
            <p className="alert alert-secondary">
              &lt;Summary names=&#123;["Bob", "Alice", "Dora"]&#125; /&gt;
            </p>
            <p>
              Remembering to import the function into your component as well:
            </p>
            <p className="alert alert-secondary">
              import &#123; Summary &#125; from "./includes/summary";
            </p>
            <h4>The Output</h4>
            <Summary names={["Bob", "Alice", "Dora"]} />
            <h2>Mapping Function</h2>
            <p>
              This is an example of a mapping function which generates a list of
              items from an array. The function also uses the filter() function
              to only display items based on whether the item's "done" variable
              is set to true or false. The array would need to be defined in the
              component's state:
            </p>
            <p className="alert alert-secondary">
              todoItems: [<br />
              &nbsp;&nbsp;&#123; id: 1, action: "Buy flowers", done: false
              &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 2, action: "Clean the house", done: true
              &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 3, action: "Mow the lawn", done: false
              &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 4, action: "Wash the car", done: false
              &#125;
              <br />]
            </p>
            <p>This is the mapping function used to output the array:</p>
            <p className="alert alert-secondary">
              &lt;ul className="list-unstyled"&gt;
              <br />
              &nbsp;&nbsp;&#123;this.state.todoItems
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;.filter(item => item.done === false)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;.map(item => &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;li
              key=&#123;item.id&#125;&gt;&#123;item.action&#125;&lt;/li&gt;;
              <br />
              &nbsp;&nbsp;&#125;)&#125;
              <br />
              &lt;/ul&gt;
            </p>
            <p>Below is a list of items rendered using the map function.</p>
            <h4>Todo List:</h4>
            <ul className="list-unstyled">
              {this.state.todoItems
                .filter(item => item.done === false)
                .map(item => {
                  return <li key={item.id}>{item.action}</li>;
                })}
            </ul>
            <h4>Completed Tasks:</h4>
            <ul className="list-unstyled">
              {this.state.todoItems
                .filter(item => item.done === true)
                .map(item => {
                  return <li key={item.id}>{item.action}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Arrays;
