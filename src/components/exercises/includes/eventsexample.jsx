import React, { Component } from "react";
import ThemeButton from "./themebutton";

class EventsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
      counter: 0,
      theme: "btn btn-secondary ml-2",
      themeButton: "btn btn-secondary ml-2"
    };
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

  render() {
    return (
      <div>
        <h2>Working with Events</h2>
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
          This is an example of a basic event which invokes a method to handle
          an event. Below is the code for the button:
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
          which triggered the event. Below is the button code used to trigger
          the event:
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
          This is an example of an event which has two options inside the event
          hanler based on what the event type it is that invoked the method
          handler. This is the code for the button:
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
          &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; message: "Down" &#125;);
          <br />
          &nbsp;&nbsp;&#125; else &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; message: "Up" &#125;);
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;;
        </p>
        <h4>Button Four</h4>
        <p>
          This is an example of an event which updates the state. This event
          uses the event.persist() function to ensure that a value of null is
          not returned.
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
          This is an event which uses a custom argument to alter the class of
          the button:
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
          &nbsp;&nbsp;onMouseLeave=&#123;e =&gt; &nbsp;this.handleEventFive(e,
          "btn btn-secondary ml-2")&#125;
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
          This example demonstrates how to use the preventDefault() method on
          the toggleCheckBox menthod when a user clicks on the checkbox. The
          preventDefault() method is called when the user clicks on the checkbox
          and the value of the state data property for the count is zero, with
          the result that the checkbox cannot be toggled until after the count
          is changed to no longer be zero.
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
        <h4>Managing Event Propagation</h4>
        <p>
          Events have a lifecycle that allows an element's ancestors to receive
          events triggered by their descendants and also to intercept events
          before they reach an element. In this example it is demonstrated how
          events are propagated through HTML elements and the effect it has on
          React applications, using the properties and methods defined by the
          SyntheticEvent described in the table below:
        </p>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>eventPhase</td>
              <td>
                This property returns the propagation phase of an event.
                However, the way that React handles events means this property
                is not useful, as described in the "Determinging the Event
                Phase" section.
              </td>
            </tr>
            <tr>
              <td>bubbles</td>
              <td>
                This property returns true if the event will enter the bubble
                phase.
              </td>
            </tr>
            <tr>
              <td>currentTarget</td>
              <td>
                This property returns an object that represents the element
                whose event handler is processing the event.
              </td>
            </tr>
            <tr>
              <td>stopPropagation()</td>
              <td>
                This method is called to stop event propagation, as described in
                the "Stopping Event Propagation" section.
              </td>
            </tr>
            <tr>
              <td>isPropagationStopped()</td>
              <td>
                This method returns true if stopPropagation has been called on
                an event.
              </td>
            </tr>
          </tbody>
        </table>
        <h4>Target &amp; Bubble Phases</h4>
        <p>
          In the example below there are three component calls for the
          ThemeButton component. The component has a button which is wrapped by
          a span. The button and the span both have the event hanler which
          invokes the onClick() method. These three buttons are then wrapped in
          a div which also has an onClick event handler which invokes the
          handleClickWrap() method. When the user clicks on one of the buttons
          it invokes the onClick() handler for the button and then the span, and
          then lastly the one for the div that wraps the three buttons. The
          first click initiates the capture phase when the event is first
          captured. After this the event moves up the hierachy and initiates the
          other events in sequence in the bubbling phase. There is also a
          condition applied for buttons using the "danger" theme, which stops
          the event after the initial capture phase. You will see if you check
          the console log after clicking on the button using the "danger" theme,
          you will see the following output:
        </p>
        <p className="alert alert-secondary">
          ThemeButton: Type: clickTarget: BUTTON CurrentTarget: SPAN Theme:
          danger
          <br />
          Stopped event
        </p>
        <p>
          You can see that the clickTarget, which is the element which is
          initially clicked on, is set as the SPAN element. This means that the
          event handling method onClick() was called by the BUTTON and the event
          stopped when it reached the SPAN. If you click on one of the other
          buttons which do not use the "danger" theme, you will see a different
          output in the console log:
        </p>
        <p className="alert alert-secondary">
          ThemeButton: Type: clickTarget: BUTTON CurrentTarget: SPAN Theme: info
          <br />
          Skipped function prop: capture phase
          <br />
          ThemeButton: Type: clickTarget: BUTTON CurrentTarget: BUTTON Theme:
          info
          <br />
          Invoked function prop
          <br />
          ThemeButton: Type: clickTarget: BUTTON CurrentTarget: SPAN Theme: info
          <br />
          Skipped function prop: bubble phase
          <br />
          App: Type: click Target: BUTTON CurrentTarget: DIV
        </p>
        <p>
          From the above you can see that when the button is clicked, the event
          used fot the capture phase is skipped and
        </p>
        <div onClick={this.handleClickWrap} className="mb-3">
          <ThemeButton theme="danger" callback={this.selectTheme} />
          <ThemeButton theme="info" callback={this.selectTheme} />
          <ThemeButton theme="secondary" callback={this.selectTheme} />
        </div>
        <p>Below is the code to create the three ThemeButton components:</p>
        <p className="alert alert-secondary">
          &lt;div onClick=&#123;this.handleClickWrap&#125;&gt;
          <br />
          &nbsp;&nbsp;&lt;ThemeButton theme="danger"
          callback=&#123;this.selectTheme&#125; /&gt;
          <br />
          &nbsp;&nbsp;&lt;ThemeButton theme="info"
          callback=&#123;this.selectTheme&#125; /&gt;
          <br />
          &nbsp;&nbsp;&lt;ThemeButton theme="secondary"
          callback=&#123;this.selectTheme&#125; /&gt;
          <br />
          &lt;/div&gt;
        </p>
        <p>These two event hanlers must also be included:</p>
        <p className="alert alert-secondary">
          selectTheme = newTheme => &#123;
          <br />
          &nbsp;&nbsp;this.setState(&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;theme: newTheme,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;message: `Theme: &#36;{/**/}
          &#123;newTheme&#125;`
          <br />
          &nbsp;&nbsp;&#125;);
          <br />
          &#125;;
          <br />
          <br />
          handleClickWrap = event =&gt; &#123;
          <br />
          &nbsp;&nbsp;console.log(
          <br />
          &nbsp;&nbsp;`App: Type: &#36;{/**/}&#123;event.type&#125; ` +<br />
          &nbsp;&nbsp;`Target: &#36;{/**/}&#123;event.target.tagName&#125; ` +
          <br />
          &nbsp;&nbsp;`CurrentTarget: &#36;{/**/}
          &#123;event.currentTarget.tagName&#125;`
          <br />
          &nbsp;&nbsp;);
          <br />
          &#125;;
        </p>
        <p>
          This is the contructor funtion which also needs to be added to the
          page with the three ThemeButton components:
        </p>
        <p className="alert alert-secondary">
          constructor(props) &#123;
          <br />
          &nbsp;&nbsp;super(props);
          <br />
          &nbsp;&nbsp;this.state = &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;message: "Hello",
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;counter: 0,
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;theme: "btn btn-secondary ml-2"
          <br />
          &nbsp;&nbsp;&#125;;
          <br />
          &#125;
        </p>
        <p>
          You then also need to create the component for the three ThemeButton
          elements (src/components/exercises/includes/themebutton.jsx).
        </p>
      </div>
    );
  }
}

export default EventsExample;
