import React, { Component } from "react";
import Menu from "../menu";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
      counter: 0,
      theme: "btn btn-secondary ml-2",
      themeButton: "btn btn-secondary ml-2",
      name: "John",
      surname: "Doe"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleEvent = () => {
    this.setState({ message: "Clicked" });
  };

  handleEventTwo = event => {
    this.setState({ message: `Event: ${event.type}` });
  };

  handleEventThree = event => {
    if (event.type === "mousedown") {
      this.setState({ message: "Down" });
    } else {
      this.setState({ message: "Up" });
    }
  };

  handleEventFour = event => {
    event.persist();
    this.setState({ counter: this.state.counter + 1 }, () =>
      this.setState({ message: `${event.type}: ${this.state.counter}` })
    );
  };

  handleEventFive = (event, newTheme) => {
    event.persist();
    this.setState(
      { counter: this.state.counter + 1, themeButton: newTheme },
      () => this.setState({ message: `${event.type}: ${this.state.counter}` })
    );
  };

  toggleCheckBox = event => {
    if (this.state.counter === 0) {
      event.preventDefault();
    }
  };

  selectTheme = newTheme => {
    this.setState({
      themeButton: newTheme,
      message: `Theme: ${newTheme}`
    });
  };

  handleClickWrap = event => {
    console.log(
      `App: Type: ${event.type} ` +
        `Target: ${event.target.tagName} ` +
        `CurrentTarget: ${event.currentTarget.tagName}`
    );
  };

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
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Working with Events</h1>
            <h2>Using Event Handlers</h2>
            <p>
              Below are two variables which are in the state. Try changing the
              name in the text input below and see how it updates the original
              name in the state. After updating the name in the input field,
              click on the "Submit" button. This calls the "onSubmit" handler,
              which prevents the default behaviour of the onSubmit event (to
              refresh the page).
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

              <button
                className="btn btn-secondary ml-2"
                onClick={this.handleClick}
              >
                Reset
              </button>
            </div>
            <p>
              Below is what the state for this example and the event handlers:
            </p>
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
            <h2>A Simple onClick Event</h2>
            <p>
              The example below demonstrates how to add an onClick event to an
              element.
            </p>
            <p className="alert alert-secondary">
              &lt;button
              <br />
              &nbsp;&nbsp;className="btn btn-secondary btn-sm"
              <br />
              &nbsp;&nbsp;onClick=&#123;() => alert("Button clicked!")&#125;
              <br />
              &gt;
              <br />
              &nbsp;&nbsp;Click Me
              <br />
              &lt;/button&gt;
            </p>
            <p>
              <button
                className="btn btn-secondary btn-sm"
                onClick={e => alert("Button clicked!")}
              >
                Click Me
              </button>
            </p>
            <div className="h4 bg-secondary text-white text-center p-2 mt-3">
              {this.state.message}
            </div>
            <p>
              <button className="btn btn-secondary" onClick={this.handleEvent}>
                One
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={this.handleEventTwo}
              >
                Two
              </button>
              <button
                className="btn btn-secondary ml-2"
                onMouseDown={this.handleEventThree}
                onMouseUp={this.handleEventThree}
              >
                Three
              </button>
              <button
                className="btn btn-secondary ml-2"
                onClick={this.handleEventFour}
              >
                Four
              </button>
              <button
                className={this.state.themeButton}
                onMouseDown={change =>
                  this.handleEventFive(change, "btn btn-danger ml-2")
                }
                onMouseUp={change =>
                  this.handleEventFive(change, "btn btn-secondary ml-2")
                }
                onMouseLeave={change =>
                  this.handleEventFive(change, "btn btn-secondary ml-2")
                }
              >
                Five
              </button>
            </p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                onClick={this.toggleCheckBox}
              />
              <label>This is a checkbox</label>
            </div>
            <h4>Button One</h4>
            <p>
              This is an example of a basic event which invokes a method to
              handle an event. Below is the code for the button:
            </p>
            <p className="alert alert-secondary">
              &lt;button className="btn btn-secondary"
              onClick=&#123;this.handleEvent&#125;&gt;
              <br />
              &nbsp;&nbsp;One
              <br />
              &lt;/button&gt;
            </p>
            <p>This is the event which is called when the button is clicked:</p>
            <p className="alert alert-secondary">
              handleEvent = () => &#123;
              <br />
              &nbsp;&nbsp;this.setState(&#123; message: "Clicked" &#125;);
              <br />
              &#125;;
            </p>
            <h4>Button Two</h4>
            <p>
              This is an example of an event which determines the type of event
              which triggered the event. Below is the button code used to
              trigger the event:
            </p>
            <p className="alert alert-secondary">
              &lt;button
              <br />
              &nbsp;&nbsp;className="btn btn-secondary ml-2"
              <br />
              &nbsp;&nbsp;onClick=&#123;this.handleEventTwo&#125;
              <br />
              &gt;
              <br />
              &nbsp;&nbsp;Two
              <br />
              &lt;/button&gt;
            </p>
            <p>This is the event that is called when the button is clicked:</p>
            <p className="alert alert-secondary">
              handleEventTwo = event =&gt; &#123;
              <br />
              &nbsp;&nbsp;this.setState&#40;&#123; message: `Event: &#36;{/**/}
              &#123;event.type&#125;` &#125;&#41;;
              <br />
              &#125;;
            </p>
            <h4>Button Three</h4>
            <p>
              This is an example of an event which has two options inside the
              event hanler based on what the event type it is that invoked the
              method handler. This is the code for the button:
            </p>
            <p className="alert alert-secondary">
              &lt;button
              <br />
              &nbsp;&nbsp;className="btn btn-secondary ml-2"
              <br />
              &nbsp;&nbsp;onMouseDown=&#123;this.handleEventThree&#125;
              <br />
              &nbsp;&nbsp;onMouseUp=&#123;this.handleEventThree&#125;
              <br />
              &gt;
              <br />
              &nbsp;&nbsp;Three
              <br />
              &lt;/button&gt;
            </p>
            <p>This is the code for the event hanler for this example:</p>
            <p className="alert alert-secondary">
              handleEventThree = event => &#123;
              <br />
              &nbsp;&nbsp;if (event.type === "mousedown") &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; message: "Down"
              &#125;);
              <br />
              &nbsp;&nbsp;&#125; else &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; message: "Up"
              &#125;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;;
            </p>
            <h4>Button Four</h4>
            <p>
              This is an example of an event which updates the state. This event
              uses the event.persist() function to ensure that a value of null
              is not returned.
            </p>
            <p className="alert alert-secondary">
              &lt;button
              <br />
              &nbsp;&nbsp;className="btn btn-secondary ml-2"
              <br />
              &nbsp;&nbsp;onClick=&#123;this.handleEventFour&#125;
              <br />
              &gt;
              <br />
              &nbsp;&nbsp;Four
              <br />
              &lt;/button&gt;
            </p>
            <p>This is the code for the event handler for this example:</p>
            <p className="alert alert-secondary">
              handleEventFour = event =&gt; &#123;
              <br />
              &nbsp;&nbsp;event.persist();
              <br />
              &nbsp;&nbsp;this.setState(&#123; counter: this.state.counter + 1
              &#125;, () =&gt;
              <br />
              &nbsp;&nbsp;this.setState(&#123; message: `&#36;{/**/}
              &#123;event.type&#125;: &#36;{/**/}&#123;this.state.counter&#125;`
              &#125;)
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;;
            </p>
            <h4>Button Five</h4>
            <p>
              This is an event which uses a custom argument to alter the class
              of the button:
            </p>
            <p className="alert alert-secondary">
              &lt;button
              <br />
              &nbsp;&nbsp;className=&#123;this.state.theme&#125;
              <br />
              &nbsp;&nbsp;onMouseDown=&#123;e =&gt; this.handleEventFive(e, "btn
              btn-danger ml-2")&#125;
              <br />
              &nbsp;&nbsp;onMouseUp=&#123;e =&gt; this.handleEventFive(e, "btn
              btn-secondary ml-2")&#125;
              <br />
              &nbsp;&nbsp;onMouseLeave=&#123;e =&gt;
              &nbsp;this.handleEventFive(e, "btn btn-secondary ml-2")&#125;
              <br />
              &gt;
              <br />
              &nbsp;&nbsp;Five
              <br />
              &lt;/button&gt;
            </p>
            <p>This is the code for the event handler:</p>
            <p className="alert alert-secondary">
              handleEventFive = (event, newTheme) =&gt; &#123;
              <br />
              &nbsp;&nbsp;event.persist();
              <br />
              &nbsp;&nbsp;this.setState(&#123; counter: this.state.counter + 1,
              theme: newTheme &#125;, () =&gt;
              <br />
              &nbsp;&nbsp;this.setState(&#123; message: `&#36;{/**/}
              &#123;event.type&#125;: &#36;{/**/}
              &#123;this.state.counter&#125;` &#125;)
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;;
            </p>
            <h4>Preventing the Default Behaviour</h4>
            <p>
              This example demonstrates how to use the preventDefault() method
              on the toggleCheckBox menthod when a user clicks on the checkbox.
              The preventDefault() method is called when the user clicks on the
              checkbox and the value of the state data property for the count is
              zero, with the result that the checkbox cannot be toggled until
              after the count is changed to no longer be zero.
            </p>
            <p className="alert alert-secondary">
              &lt;div className="form-check"&gt;
              <br />
              &nbsp;&nbsp;&lt;input
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;className="form-check-input"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;type="checkbox"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;this.toggleCheckBox&#125;
              <br />
              &nbsp;&nbsp;/&gt;
              <br />
              &nbsp;&nbsp;&lt;label&gt;This is a checkbox&lt;/label&gt;
              <br />
              &lt;/div&gt;
            </p>
            <p>The event handler for the checkbox:</p>
            <p className="alert alert-secondary">
              toggleCheckBox = event => &#123;
              <br />
              &nbsp;&nbsp;if (this.state.counter === 0) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;event.preventDefault();
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;;
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Events;
