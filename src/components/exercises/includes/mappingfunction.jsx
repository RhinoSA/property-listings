import React, { Component } from "react";

class MappingFunction extends Component {
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
  render() {
    return (
      <React.Fragment>
        <h2>Mapping Function</h2>
        <p>
          This is an example of a mapping function which generates a list of
          items from an array. The function also uses the filter() function to
          only display items based on whether the item's "done" variable is set
          to true or false. The array would need to be defined in the
          component's state:
        </p>
        <p className="alert alert-secondary">
          todoItems: [<br />
          &nbsp;&nbsp;&#123; id: 1, action: "Buy flowers", done: false &#125;,
          <br />
          &nbsp;&nbsp;&#123; id: 2, action: "Clean the house", done: true
          &#125;,
          <br />
          &nbsp;&nbsp;&#123; id: 3, action: "Mow the lawn", done: false &#125;,
          <br />
          &nbsp;&nbsp;&#123; id: 4, action: "Wash the car", done: false &#125;
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
      </React.Fragment>
    );
  }
}

export default MappingFunction;
