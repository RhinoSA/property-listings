import React, { Component } from "react";

class Events extends Component {
  state = {
    name: "John",
    surname: "Doe"
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleClick = e => {
    //console.log(this.state);
    this.setState({
      name: "John"
    });
  };

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(`Form submited by ${this.state.name}`);
  };

  render() {
    return (
      <div>
        <h2>Using Event Handlers</h2>
        <p>
          Below are two variables which are in the state. Try changing the name
          in the text input below and see how it updates the original name in
          the state. After updating the name in the input field, click on the
          "Submit" button. This calls the "onSubmit" handler, which prevents the
          default behaviour of the onSubmit event (to refresh the page).
        </p>
        <p className="alert alert-secondary">
          <b>Name:</b> {this.state.name}
          <br />
          <b>Surname:</b> {this.state.surname}
        </p>
        <div className="form-group mb-2 form-inline">
          <form onSubmit={this.handleSubmit}>
            <input
              className="form-control"
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <button className="btn btn-secondary ml-2">Submit</button>
          </form>

          <button className="btn btn-secondary ml-2" onClick={this.handleClick}>
            Reset
          </button>
        </div>
        <p>Below is what the state for this example and the event handlers:</p>
        <p className="alert alert-secondary">
          state = &#123;
          <br />
          &nbsp;&nbsp;name: "John",
          <br />
          &nbsp;&nbsp;surname: "Doe"
          <br />
          &#125;;
          <br />
          <br />
          handleClick = e => &#123;
          <br />
          &nbsp;&nbsp;console.log(this.state);
          <br />
          &nbsp;&nbsp;this.setState(&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;name: "John"
          <br />
          &nbsp;&nbsp;&#125;);
          <br />
          &#125;;
          <br />
          <br />
          handleChange = e => &#123;
          <br />
          &nbsp;&nbsp;this.setState(&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;name: e.target.value
          <br />
          &nbsp;&nbsp;&#125;);
          <br />
          &#125;;
          <br />
          <br />
          handleSubmit = e => &#123;
          <br />
          &nbsp;&nbsp;e.preventDefault();
          <br />
          &nbsp;&nbsp;alert(`Form submited by
          $dollar;&#123;this.state.name&#125;`);
          <br />
          &#125;;
        </p>
        <p>The code structure for the component:</p>
        <p className="alert alert-secondary">
          &lt;div className="form-group mb-2 form-inline"&gt;
          <br />
          &nbsp;&nbsp;&lt;form onSubmit=&#123;this.handleSubmit&#125;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;input
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className="form-control"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="text"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange=&#123;this.handleChange&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value=&#123;this.state.name&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;button className="btn btn-secondary
          ml-2"&gt;Submit&lt;/button&gt;
          <br />
          &nbsp;&nbsp;&lt;/form&gt;
          <br />
          &nbsp;&nbsp;&lt;button
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;className="btn btn-secondary ml-2"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;this.handleClick&#125;
          <br />
          &nbsp;&nbsp;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Reset
          <br />
          &nbsp;&nbsp;&lt;/button&gt;
          <br />
          &lt;/div&gt;
        </p>
      </div>
    );
  }
}

export default Events;
