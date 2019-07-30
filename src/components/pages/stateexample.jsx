import React, { Component } from "react";

class StateExample extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      names: [
        { id: 1, title: "Andrew", job: "Web Dev" },
        { id: 2, title: "Jack", job: "Builder" },
        { id: 3, title: "Peter", job: "Actor" }
      ]
    };
    this.updateState = this.updateState.bind(this);
    this.switchNameHandler = this.switchNameHandler.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  updateState(e) {
    this.setState({ data: e.target.value });
  }

  switchNameHandler = f => {
    this.setState({ data: "" });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Outputting the State</h2>
        <p>The example below shows how one declares variables inside the state and how one then renders these variables using mapping. The state has an array of people's names and their job titles. After listing the people's names and their jobs, the script then uses conditional rendering to mention which of the people in the list is a builder.</p>
        <p className="alert alert-secondary">class StateExample extends Component &#123;<br />
  &nbsp;&nbsp;constructor() &#123;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;super();<br />
  &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;names: [<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 1, title: "Andrew", job: "Web Dev" &#125;,<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 2, title: "Jack", job: "Builder" &#125;,<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 3, title: "Peter", job: "Actor" &#125;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&#125;;<br />
  &nbsp;&nbsp;&#125;<br />
  &nbsp;&nbsp;render() &#123;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.names.map(rows => (<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card mt-3" key=&#123;rows.id&#125;&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card-body"&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="card-text"&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;rows.title&#125; (&#123;rows.job&#125;)<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.names.map(rows => (<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p key=&#123;rows.id&#125; onClick=&#123;this.switchNameHandler&#125;&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;rows.job === "Builder"<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;? "The only builder in the list is " + rows.title + "."<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: null&#125;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;);<br />
  &nbsp;&nbsp;&#125;<br />
  &#125;</p>
  <h4>The Output:</h4>
        {this.state.names.map(rows => (
          <div className="card mt-3" key={rows.id}>
            <div className="card-body">
              <p className="card-text">
                {rows.title} ({rows.job})
              </p>
            </div>
          </div>
        ))}
        {this.state.names.map(rows => (
          <p key={rows.id} onClick={this.switchNameHandler}>
            {rows.job === "Builder"
              ? "The only builder in the list is " + rows.title + "."
              : null}
          </p>
        ))}
        {/* Dynamic Data */}
        <h2>Manipulating the State</h2>
        <p>Enter your name in the text field below:</p>
        <input
          className="form-control"
          value={this.state.data}
          placeholder="Enter your name..."
          onChange={this.updateState}
          ref="myInput"
        />
        <p className="alert alert-secondary mt-3">
          {this.state.data ? this.state.data : "The text input is empty..."}
        </p>
        <p>
          <button
            className={this.state.data === "" ? "btn btn-secondary disabled" : "btn btn-secondary"}
            onClick={this.switchNameHandler}
          >
            Clear Input
          </button>
        </p>
      </React.Fragment>
    );
  }
}

export default StateExample;
