import React, { Component } from "react";
import Menu from "../menu";
import CommaList from "./commalist";
import Summary from "./summary";
import SelectSwitch from "./selectswitch";

class Arrays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { id: 1, action: "Buy flowers", done: false },
        { id: 2, action: "Clean the house", done: true },
        { id: 3, action: "Mow the lawn", done: false },
        { id: 4, action: "Wash the car", done: false }
      ],
      products: [
        { id: 1, name: "Apple", price: 2.99, stock: 2 },
        { id: 2, name: "Orange", price: 2.4, stock: 1 },
        { id: 3, name: "Pear", price: 2.39, stock: 0 },
        { id: 4, name: "Peach", price: 2.99, stock: 3 }
      ]
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let totalValue = this.state.products
      .filter(item => item.stock > 0)
      .reduce((prev, item) => prev + item.price * item.stock, 0);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>JavaScript Arrays</h1>
            {/* SPECIES SWITCHER */}
            <SelectSwitch />
            {/* END SPECIES SWITCHER */}
            {/* ARRAY TOTALS */}
            <h2>Getting Array Totals</h2>
            <p>
              This is an example of how one can get the total value of an array
              of numbers.
            </p>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {this.state.products
                  .filter(item => item.stock > 0)
                  .map(item => {
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td className="text-right">${item.price.toFixed(2)}</td>
                        <td className="text-right">
                          ${(item.stock * item.price).toFixed(2)}
                        </td>
                      </tr>
                    );
                  })}
                <tr>
                  <td colSpan="3" className="text-right">
                    $
                    {totalValue
                      .toFixed(2)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>The Products Array:</h4>
            <p>This is the array of products used in this example:</p>
            <p className="alert alert-secondary">
              products: [<br />
              &nbsp;&nbsp;&#123; id: 1, name: "Apple", price: 2.99, stock: 2
              &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 2, name: "Orange", price: 2.4, stock: 1
              &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 3, name: "Pear", price: 2.39, stock: 0
              &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 4, name: "Peach", price: 2.99, stock: 3
              &#125;
              <br />]
            </p>
            <h4>Using the Reduce Function:</h4>
            <p>
              This is the function used to get the total value of all the
              products in the array:
            </p>
            <p className="alert alert-secondary">
              let totalValue = this.state.products
              <br />
              &nbsp;&nbsp;.filter(item =&gt; item.stock &gt; 0)
              <br />
              &nbsp;&nbsp;.reduce((prev, item) =&gt; prev + item.price *
              item.stock, 0);
            </p>
            <h4>The Products Table:</h4>
            <p className="alert alert-secondary">
              &lt;table className="table"&gt;
              <br />
              &nbsp;&nbsp;&lt;thead className="thead-dark"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Name&lt;/th&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th
              className="text-right"&gt;Price&lt;/th&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th
              className="text-right"&gt;Subtotal&lt;/th&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
              <br />
              &nbsp;&nbsp;&lt;/thead&gt;
              <br />
              &nbsp;&nbsp;&lt;tbody&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.products
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(item =&gt; item.stock
              &gt; 0)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(item =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr
              key=&#123;item.id&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&#123;item.name&#125;&lt;/td&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td
              className="text-right"&gt;&#36;{/**/}
              &#123;item.price.toFixed(2)&#125;&lt;/td&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td
              className="text-right"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#36;
              {/**/}&#123;(item.stock * item.price).toFixed(2)&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;)&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td colSpan="3"
              className="text-right"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#36;{/**/}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;totalValue
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.toFixed(2)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.replace(/\B(?=(\d&#123;3&#125;)+(?!\d))/g,
              ",")&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/td&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
              <br />
              &nbsp;&nbsp;&lt;/tbody&gt;
              <br />
              &lt;/table&gt;
            </p>
            {/* END ARRAY TOTALS */}
            <h2>Built-in Array Methods</h2>
            <p>This is a list of commonly used array methods.</p>
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
            <h2>Mapping an Array</h2>
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
            <h2>Creating a Comma-Separated List</h2>
            <p>
              This is an example of a function which converts an array of words
              into a comma separated sentence with commas and also adding "and"
              before the last word. If there are only two words in the array,
              then the two words are separated with "and".
            </p>
            <p className="alert alert-secondary">
              import React from "react";
              <br />
              <br />
              const capitalize = s =&gt; &#123;
              <br />
              &nbsp;&nbsp;if (typeof s !== "string") return "";
              <br />
              &nbsp;&nbsp;return s.charAt(0).toUpperCase() + s.slice(1);
              <br />
              &#125;;
              <br />
              <br />
              const noun = ["lion", "leopard", "cheetah"];
              <br />
              let info = "";
              <br />
              if (noun.length === 1) &#123;
              <br />
              &nbsp;&nbsp;for (let i = 0; i &lt; noun.length; i++) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;info += noun[i];
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125; else &#123;
              <br />
              &nbsp;&nbsp;for (let i = 0; i &lt; noun.length; i++) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;if (i === noun.length - 1) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info += "and " + noun[i] +
              ".";
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125; else if (i === noun.length - 2)
              &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info += "" + noun[i] + " ";
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125; else &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info += noun[i] + ", ";
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;&#125; &#125;
              <br />
              <br />
              const CommaList = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;&#123;capitalize(info)&#125;&lt;/p&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;;
              <br />
              <br />
              export default CommaList;
            </p>
            <h4>The Output:</h4>
            <CommaList />
            <p>
              There is also an "info" variable included in the function which
              can be used to add a string to the start of the outputted
              sentence. This could be used to create this sentence:
            </p>
            <p>My cats names are Joe, Simon and Mika.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Arrays;
