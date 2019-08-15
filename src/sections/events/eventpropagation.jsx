import React, { Component } from "react";
import Menu from "../menu";
import ThemeButton from "./themebutton";

class EventPropagation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
      counter: 0,
      theme: "btn btn-secondary ml-2",
      themeButton: "btn btn-secondary ml-2"
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

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
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Managing Event Propagation</h1>
            <p>
              Events have a lifecycle that allows an element's ancestors to
              receive events triggered by their descendants and also to
              intercept events before they reach an element. In this example it
              is demonstrated how events are propagated through HTML elements
              and the effect it has on React applications, using the properties
              and methods defined by the SyntheticEvent described in the table
              below:
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
                    However, the way that React handles events means this
                    property is not useful, as described in the "Determinging
                    the Event Phase" section.
                  </td>
                </tr>
                <tr>
                  <td>bubbles</td>
                  <td>
                    This property returns true if the event will enter the
                    bubble phase.
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
                    This method is called to stop event propagation, as
                    described in the "Stopping Event Propagation" section.
                  </td>
                </tr>
                <tr>
                  <td>isPropagationStopped()</td>
                  <td>
                    This method returns true if stopPropagation has been called
                    on an event.
                  </td>
                </tr>
              </tbody>
            </table>
            <h4>Target &amp; Bubble Phases</h4>
            <p>
              In the example below there are three component calls for the
              ThemeButton component. The component has a button which is wrapped
              by a span. The button and the span both have the event hanler
              which invokes the onClick() method. These three buttons are then
              wrapped in a div which also has an onClick event handler which
              invokes the handleClickWrap() method. When the user clicks on one
              of the buttons it invokes the onClick() handler for the button and
              then the span, and then lastly the one for the div that wraps the
              three buttons. The first click initiates the capture phase when
              the event is first captured. After this the event moves up the
              hierachy and initiates the other events in sequence in the
              bubbling phase. There is also a condition applied for buttons
              using the "danger" theme, which stops the event after the initial
              capture phase. You will see if you check the console log after
              clicking on the button using the "danger" theme, you will see the
              following output:
            </p>
            <p className="alert alert-secondary">
              ThemeButton: Type: clickTarget: BUTTON CurrentTarget: SPAN Theme:
              danger
              <br />
              Stopped event
            </p>
            <p>
              You can see that the clickTarget, which is the element which is
              initially clicked on, is set as the SPAN element. This means that
              the event handling method onClick() was called by the BUTTON and
              the event stopped when it reached the SPAN. If you click on one of
              the other buttons which do not use the "danger" theme, you will
              see a different output in the console log:
            </p>
            <p className="alert alert-secondary">
              ThemeButton: Type: clickTarget: BUTTON CurrentTarget: SPAN Theme:
              info
              <br />
              Skipped function prop: capture phase
              <br />
              ThemeButton: Type: clickTarget: BUTTON CurrentTarget: BUTTON
              Theme: info
              <br />
              Invoked function prop
              <br />
              ThemeButton: Type: clickTarget: BUTTON CurrentTarget: SPAN Theme:
              info
              <br />
              Skipped function prop: bubble phase
              <br />
              App: Type: click Target: BUTTON CurrentTarget: DIV
            </p>
            <p>
              From the above you can see that when the button is clicked, the
              event used fot the capture phase is skipped and
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
              &nbsp;&nbsp;`App: Type: &#36;{/**/}&#123;event.type&#125; ` +
              <br />
              &nbsp;&nbsp;`Target: &#36;{/**/}&#123;event.target.tagName&#125; `
              +
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
              You then also need to create the component for the three
              ThemeButton elements
              (src/components/exercises/includes/themebutton.jsx).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventPropagation;
