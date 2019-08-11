import React, { Component } from "react";

class ComponentsAndProps extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h2>Components &amp; Props</h2>
        <table className="table table-striped mt-3 mb-3">
          <thead className="thead-dark">
            <tr>
              <th style={{ width: "20%" }}>Question</th>
              <th style={{ width: "80%" }}>Answer</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>What are they?</td>
              <td>
                Components are the key building blocks in React applications.
                Stateless components are Javascript functions that render
                content that React can present to the user. Props are the means
                by which one component provides data to another so that it can
                adapt the content it renders.
              </td>
            </tr>
            <tr>
              <td>Why are they useful?</td>
              <td>
                Components are useful because they provide access to the React
                support for creating feeatures combining JavaScript, HTML, and
                other components. Props are useful because they allow components
                to adapt the content they produce.
              </td>
            </tr>
            <tr>
              <td>How are they used?</td>
              <td>
                Stateless components are defined as JavaScript functions that
                return a React element, which is usually defined using HTML, in
                the JSX format. Properties are defined as properties on
                elements.
              </td>
            </tr>
            <tr>
              <td>Are there any pitfalls or limitations?</td>
              <td>
                React requires components to behave in specific ways, such as
                returnign a single React element and always returning a result,
                and it can take time to become used to these restrictions. The
                most common pitfall with props is specifying literal values when
                a JavaScript expression was required.
              </td>
            </tr>
            <tr>
              <td>Are there any alternatives?</td>
              <td>
                Components are the key building blocks in React applications,
                and there is no away to avoid their use. There are alternatives
                to props that can be useful in larger and more complex peojects.
              </td>
            </tr>
          </tbody>
        </table>
        <h2>Problems &amp; Solutions</h2>
        <table className="table table-striped mt-3 mb-3">
          <thead className="thead-dark">
            <tr>
              <th style={{ width: "50%" }}>Problem</th>
              <th style={{ width: "50%" }}>Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Add content to a React application</td>
              <td>
                Define a function that returns HTML elements or invokes the
                React.createElement method
              </td>
            </tr>
            <tr>
              <td>Add additional features to a React application</td>
              <td>
                Define components and compose them in a parent-child
                relationship using elements that correspond to the component
                name
              </td>
            </tr>
            <tr>
              <td>Configure a child component</td>
              <td>Define props when applying the component</td>
            </tr>
            <tr>
              <td>Render HTML elements for each object in a data array</td>
              <td>
                Use the map method to create elements, ensuring that they have a
                key prop
              </td>
            </tr>
            <tr>
              <td>Render multiple elements from a component</td>
              <td>
                Use the &lt;React.Fragment&gt; element or use elements without
                tags
              </td>
            </tr>
            <tr>
              <td>Render no content</td>
              <td>Return null</td>
            </tr>
            <tr>
              <td>Receive notifications from a child component</td>
              <td>Configure the component with a function prop</td>
            </tr>
            <tr>
              <td>Pass on props to a child</td>
              <td>
                Use the prop values received from the parent or use the
                destructuring operator
              </td>
            </tr>
            <tr>
              <td>Define default prop values</td>
              <td>Use the defaultProps property</td>
            </tr>
            <tr>
              <td>Check prop types</td>
              <td>Use the propTypes property</td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ComponentsAndProps;
