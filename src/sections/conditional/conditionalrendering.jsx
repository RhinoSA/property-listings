import React, { Component } from "react";
import Menu from "../menu";
import MappingParts from "./mappingparts";
import Jokes from "./jokes";

const listUnsorted = [
  { id: 1, title: "Peter", details: "These are the details for Peter." },
  { id: 2, title: "John", details: "These are the details for Peter." },
  { id: 3, title: "Andrew", details: "These are the details for Peter." }
];

const list = listUnsorted.sort((a, b) => (a.title > b.title ? 1 : -1));

function List() {
  if (!list) {
    return null;
  }

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return (
      <div list={list}>
        {list.map(rows => (
          <div key={rows.id}>
            {rows.title} - ({rows.id})
          </div>
        ))}
      </div>
    );
  }
}

class ConditionalRendering extends Component {
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
            <h1>Conditional Rendering</h1>
            <h2>Sorting Arrays &amp; Conditional Rendering</h2>
            <p>
              Below is a list which is generated from an array. If the array is
              empty then it will display a paragraph of text saying there is no
              list to display. The list is also sorted alphabetically using the
              JavaScript sort() function.
            </p>
            <p className="alert alert-secondary">
              const listUnsorted = [<br />
              &nbsp;&nbsp;&#123; id: 1, title: "Peter" &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 2, title: "John" &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 3, title: "Andrew" &#125;
              <br />
              ];
              <br />
              <br />
              const list = listUnsorted.sort((a, b) => (a.title > b.title ? 1 :
              -1));
              <br />
              <br />
              function List() &#123;
              <br />
              &nbsp;&nbsp;if (!list) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return null;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;if (!list.length) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return &lt;p&gt;Sorry, the list is
              empty.&lt;/p&gt;;
              <br />
              &nbsp;&nbsp;&#125; else &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              list=&#123;list&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;list.map(rows
              => (
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              key=&#123;rows.id&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;rows.title&#125;
              - (&#123;rows.id&#125;)
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <p>To display the list you will use the following function call:</p>
            <p className="alert alert-secondary">&#123;List()&#125;</p>
            <h4>List of Names</h4>
            <div className="mb-2">{List()}</div>

            <h2>Mapping Components &amp; Conditional Rendering</h2>
            <p>
              This example demonstrates how one can map an array and output the
              results in a component. Conditional rendering techniques are used
              to also control the output of the data.
            </p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              import ListItem from "./listitem";
              <br />
              <br />
              class MappingParts extends Component &#123;
              <br />
              &nbsp;&nbsp;state = &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;listUnsorted: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 1, title: "Peter",
              job: "Plumber" &#125;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 2, title: "John",
              job: "Doctor" &#125;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 3, title: "Andrew",
              job: "" &#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;]
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;let list =
              this.state.listUnsorted.sort((a, b) =>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.title > b.title ? 1 : -1
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;function sortList() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              list=&#123;list&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;list.map(rows
              => (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListItem
              key=&#123;rows.id&#125; title=&#123;rows.title&#125;
              id=&#123;rows.id&#125; job=&#123;rows.job&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;List of
              Names&lt;/h4&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;sortList()&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              export default MappingParts;
            </p>
            <p>The component that is mapped:</p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              <br />
              class ListItem extends Component &#123;
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.title&#125;
              - (&#123;this.props.id&#125;) &#123;this.props.job === "" ? null :
              " - " + this.props.job&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              export default ListItem;
            </p>
            <div className="mb-2">
              <MappingParts />
            </div>
            <span id="spy-04" className="anchor" />
            <h1>Conditional Rendering</h1>
            <p>
              This is an example of repeating elements using a functional
              component. There is also javascript which detects if there is no
              question, but simply a joke without a question, which then renders
              that instance of the joke component differently to the others.
            </p>
            <p>The code for the page which outputs the exercise:</p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              import Joke from "./joke";
              <br />
              <br />
              class Jokes extends Component &#123;
              <br />
              &nbsp;&nbsp;state = &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;listJokesUnsorted: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 1,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;question:
              "This is the first joke which asks a question.",
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer:
              "This is the answer to the first question."
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 2,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;question:
              "",
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This
              is the second joke without a question and renders differently to
              the other jokes."
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 3,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;question:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This
              is the second joke without a question and renders differently to
              the other jokes.",
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer:
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This
              is the second joke without a question and renders differently to
              the other jokes."
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let jokes =
              this.state.listJokesUnsorted;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function sorttheList() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              jokes=&#123;jokes&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;jokes.map(rows
              => (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Joke
              key=&#123;rows.id&#125; question=&#123;rows.question&#125;
              answer=&#123;rows.answer&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
              &lt;React.Fragment&gt;&#123;sorttheList()&#125;&lt;/React.Fragment&gt;;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              export default Jokes;
            </p>

            <p>The file for the repeating component:</p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              <br />
              class Joke extends Component &#123;
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p style=&#123;
              display: this.props.question ? "block" : "none" &#125;&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b&gt;Question:&lt;/b&gt;
              &#123;this.props.question&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style=&#123;&#123;
              display: this.props.question ? "inline-block" : "none"
              &#125;&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b&gt;Answer:&lt;/b&gt;&nbsp;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/span&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.answer&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;hr /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              export default Joke;
            </p>

            <h4>A List of Jokes</h4>
            <hr />
            <Jokes />
          </div>
        </div>
      </div>
    );
  }
}

export default ConditionalRendering;
