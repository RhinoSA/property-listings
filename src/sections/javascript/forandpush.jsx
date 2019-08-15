import React, { Component } from "react";
import Summary from "./summary";

class ForAndPush extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Using for and push to Output an Array</h1>
        <p>
          The function in this example returns a list of names with the number
          of characters in the name displayed in brackers next to the name.
          Create a file named summary.jsx with the following code:
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="list-group mb-3
          mt-3"&gt;
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
        <p>Then to use this function, use the following on your component:</p>
        <p className="alert alert-secondary">
          &lt;Summary names=&#123;["Bob", "Alice", "Dora"]&#125; /&gt;
        </p>
        <p>Remembering to import the function into your component as well:</p>
        <p className="alert alert-secondary">
          import &#123; Summary &#125; from "./includes/summary";
        </p>
        <h4>The Output</h4>
        <Summary names={["Bob", "Alice", "Dora"]} />
      </React.Fragment>
    );
  }
}

export default ForAndPush;
