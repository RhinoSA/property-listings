import React, { Component } from "react";
import Menu from "../menu";
import { HooksMessage } from "./hooksmessage";
import { ExternalCounter } from "./externalcounter";
import { MessageNew } from "./messagenew";
import { List } from "./list";
import ControlledUpdates from "./controlledupdates";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Andrew",
      counter: 100,
      showMessage: true,
      intervalId: 0,
      showBanner: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleChange = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h1>Reconciliation &amp; Lifecycles</h1>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th style={{ width: "25%" }}>Question</th>
                  <th style={{ width: "75%" }}>Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>What is it?</td>
                  <td>
                    Reconcillition is the process of efficiently handling the
                    content produced by components to minimize the changes to
                    the Document Object Model (DOM). Reconcilliation is part of
                    a larger lifecycle that is applied to stateful components.
                  </td>
                </tr>
                <tr>
                  <td>Why is it useful?</td>
                  <td>
                    The reconcilliation process helps application performance,
                    while the broader component lifecycle provides a consistent
                    model for application development and provides useful
                    features for advanced projects.
                  </td>
                </tr>
                <tr>
                  <td>How is it used?</td>
                  <td>
                    The reconcilliation process is performed automatically, and
                    no explicit action is required. All stateful components go
                    through the same lifecycle and can participate actively by
                    implementing specific methods (for class-based components)
                    or effect hook (for funtional components).
                  </td>
                </tr>
                <tr>
                  <td>Are there any pitfalls or limitations?</td>
                  <td>
                    Care must be taken to write components so they fit into the
                    overall lifecycle, which includes being able to render
                    content even though it may not be used to update the DOM.
                  </td>
                </tr>
                <tr>
                  <td>Are there any alternatives?</td>
                  <td>
                    No, the lifecycle and reconcilliation process are
                    fundamental React features.
                  </td>
                </tr>
              </tbody>
            </table>
            <h4 className="mb-3">Reconcilliation Example</h4>
            <p>
              This example uses various components to demonstrate the
              reconcilliation process. Below is a list of all the components
              used:
            </p>
            <ol>
              <li>ActionButton - the component that creates the buttons.</li>
              <li>
                MessageNew - this component displays a message received as a
                prop and passes a function prop as the callback for an
                ActionButton.
              </li>
              <li>
                List - this component has its own state data, which it uses to
                render a list. An ActionButton component is also provided with
                the reverseList method as its function prop, which reverses the
                order of the items in the list.
              </li>
              <li>
                HooksMessage - functional component that uses the useState and
                useEffect methods to update the state.
              </li>
              <li>
                External Counter - this component uses the forceUpdate method to
                explicity trigger an update to the component's state data.
              </li>
            </ol>
            <p>This is the code for the ActionButton component:</p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              <br />
              export class ActionButton extends Component &#123;
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;console.log(`Render ActionButton (&#36;
              {/**/}&#123;this.props.text&#125;) Component `);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;`btn
              btn-&#36;{/**/}&#123;this.props.theme&#125;`&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;this.props.callback&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.text&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <p>This is the code for the MessageNew component:</p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              import &#123; ActionButton &3125; from "./actionbutton";
              <br />
              <br />
              export class MessageNew extends Component &#123;
              <br />
              &nbsp;&nbsp;constructor(props) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;super(props);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showSpan: false
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;componentDidMount() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;console.log("Messages component mounted");
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;componentDidUpdate() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;console.log("Messages component updated");
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;handleClick = event =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; showSpan:
              !this.state.showSpan &#125;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.props.callback(event);
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              <br />
              &nbsp;&nbsp;getMessageElement() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;let div = (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="messageDiv"
              className="h5 mt-3"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.message&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return this.state.showSpan ?
              &lt;span&gt;&#123;div&#125;&lt;/span&gt; : div;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;console.log(`Render Message Component `);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ActionButton
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme="secondary"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;...this.props&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback=&#123;this.handleClick&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.getMessageElement()&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;shouldComponentUpdate(newProps, newState) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;let change = newProps.message !==
              this.props.message;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;if (change) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`shouldComponentUpdate
              &#36;{/**/}&#123;this.props.text&#125;: Update Allowed`);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125; else &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(`shouldComponentUpdate
              &#36;{/**/}&#123;this.props.text&#125;: Update Prevented`);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return change;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <p>This is the code for the List component:</p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              import &#123; ActionButton &#125; from "./actionbutton";
              <br />
              <br />
              export class List extends Component &#123;
              <br />
              &nbsp;&nbsp;constructor(props) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;super(props);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;names: ["Andrew", "Bob",
              "Mike", "Simon"]
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;reverseList = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; names:
              this.state.names.reverse() &#123;);
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;console.log("Render List Component");
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ActionButton
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme="secondary"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback=&#123;this.reverseList&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text="Reverse
              Names"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul
              className="list-unstyled"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.names.map((name,
              index) =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
              (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li
              id=&#123;name.toLowerCase()&#125; key=&#123;name&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;name&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;)&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <p>This is the HooksMessage component:</p>
            <p className="alert alert-secondary">
              import React, &#123; useState, useEffect &#125; from "react";
              <br />
              import &#123; ActionButton &#125; from "./actionbutton";
              <br />
              <br />
              export function HooksMessage(props) &#123;
              <br />
              &nbsp;&nbsp;const [showSpan, setShowSpan] = useState(false);
              <br />
              <br />
              &nbsp;&nbsp;useEffect(() =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;console.log("useEffect function invoked");
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return () =&gt; console.log("useEffect
              cleanup");
              <br />
              &nbsp;&nbsp;&#125;);
              <br />
              <br />
              &nbsp;&nbsp;const handleClick = event =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;setShowSpan(!showSpan);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;props.callback(event);
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              <br />
              &nbsp;&nbsp;const getMessageElement = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;let div = (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="messageDiv"
              className="h5 mt-3 mb-3"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.message&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return showSpan ?
              &lt;span&gt;&#123;div&#125; &lt;/span&gt; : div;
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ActionButton
              theme="secondary" &#123;...props&#125;
              callback=&#123;handleClick&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;getMessageElement()&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&globalThis;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
            </p>
            <p>This is the ExternalCounter component:</p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              import &#123; ActionButton &#125; from "./actionbutton";
              <br />
              <br />
              let externalCounter = 0;
              <br />
              <br />
              export class ExternalCounter extends Component &#123;
              <br />
              &nbsp;&nbsp;incrementCounter = () =&gt; &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;externalCounter++;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.forceUpdate();
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ActionButton
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme="secondary"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback=&#123;this.incrementCounter&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text="External
              Counter"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              className="h5 mt-3"&gt;External:
              &#123;externalCounter&#125;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;);
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <p>
              This is the code that is used on the component that has all of the
              child components:
            </p>
            <p className="alert alert-secondary">
              &lt;HooksMessage
              <br />
              message=&#123;`Counter: &#36;{/**/}
              &#123;this.state.counter&#125;`&#125;
              <br />
              callback=&#123;this.incrementCounter&#125;
              <br />
              text="Increment Counter"
              <br />
              /&gt;
              <br />
              &lt;div className="form-check mb-3"&gt;
              <br />
              &nbsp;&nbsp;&lt;input
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;type="checkbox"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;className="form-check-input"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;checked=&#123;this.state.showMessage&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;onChange=&#123;this.handleChange&#125;
              <br />
              &nbsp;&nbsp;/&gt;
              <br />
              &nbsp;&nbsp;&lt;label
              className="form-check-label"&gt;Show&lt;/label&gt;
              <br />
              &lt;/div&gt;
              <br />
              &lt;div className="row"&gt;
              <br />
              &nbsp;&nbsp;&lt;div className="col-md-4"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.showMessage &amp;&amp;
              &lt;ExternalCounter /&gt;&#125;
              <br />
              &nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&lt;div className="col-md-4"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;MessageNew
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message=&#123;`Counter: &#36;
              {/**/}&#123;this.state.counter&#125;`&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback=&#123;this.incrementCounter&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text="Increment Counter"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;/&gt;
              <br />
              &nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&lt;div className="col-md-4"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;List /&gt;
              <br />
              &nbsp;&nbsp;&lt;/div&gt;
              <br />
              &lt;/div&gt;
            </p>
            <p>
              In the example below, when one clicks on the "Increment Counter"
              button it updates the components state data, but it also marks the
              component as "stale", meaning that the HTML content displayed to
              the user may be out-of-date. Once the state data is updated, React
              invokes the render method for each of the children which need to
              be updated. Since the component which has the state for the
              counter is in the topmost level of the component hierachy, the
              render method is invoked on all the child components. React only
              updates the components that are affected by the change, limiting
              the amount of work that the application has to do before it is
              reconciled again. When one clicks on the "Reverse Names" button it
              only affects the state of the List component and React only
              invokes the render method for the List component.
            </p>
            <p>
              One somethimes has to force the reconcilliation process when the
              updated state data in a child component is not reflected
              automatically in the parent component. One uses the forceUpdate
              method to accomplish this. See the ExternalCounter component to
              see how one uses the forceUpdate method.
            </p>
            <HooksMessage
              message={`Counter: ${this.state.counter}`}
              callback={this.incrementCounter}
              text="Increment Counter"
            />
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                checked={this.state.showMessage}
                onChange={this.handleChange}
              />
              <label className="form-check-label">Show</label>
            </div>
            <div className="row">
              <div className="col-md-4">
                {this.state.showMessage && <ExternalCounter />}
              </div>
              <div className="col-md-4">
                <MessageNew
                  message={`Counter: ${this.state.counter}`}
                  callback={this.incrementCounter}
                  text="Increment Counter"
                />
              </div>
              <div className="col-md-4">
                <List />
              </div>
            </div>
            <h4>Component Lifecyle</h4>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>constructor</td>
                  <td>
                    This special method is called when a new instance of a
                    component class is created.
                  </td>
                </tr>
                <tr>
                  <td>render</td>
                  <td>
                    This method is called when React requires content from the
                    component.
                  </td>
                </tr>
                <tr>
                  <td>componentDidMount</td>
                  <td>
                    This method is called after the initial content rendered by
                    the component has been processed.
                  </td>
                </tr>
                <tr>
                  <td>componentDidUpdate</td>
                  <td>
                    This method is called after React has completed the
                    reconciliation process following an update.
                  </td>
                </tr>
                <tr>
                  <td>componentWillUnmount</td>
                  <td>
                    This method is called before a component is destroyed.
                  </td>
                </tr>
                <tr>
                  <td>componentDidCatch</td>
                  <td>This method is used to handle errors.</td>
                </tr>
              </tbody>
            </table>
            <h4>Advanced Lifecycle Methods</h4>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>shouldComponentUpdate</td>
                  <td>
                    This method allows a component to indicate that it does not
                    need to be updated.
                  </td>
                </tr>
                <tr>
                  <td>getDerivedStateFromProps</td>
                  <td>
                    This method allows a component to set its state data values
                    based on the props it receives.
                  </td>
                </tr>
                <tr>
                  <td>getSnapshotBeforeUpdate</td>
                  <td>
                    This method allows a component to capture information about
                    its state before the reconciliation process updates the DOM.
                    This method is used in conjunction with the ref feature.
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              React's default behaviour is to mark a component as "stale" and
              render its content whenever its state data changes. And, since a
              component's state can be passed on to its children as props, the
              descendant components are rendered as well. Components can
              override the default behaviour by implementing the
              shouldComponentUpdate method. This feature allows components to
              improve the application's performance by avoiding calls to the
              render method when they are not required. The
              shouldComponentUpdate method is called in the update phase, and
              its result determines whether React will call the render method to
              get fresh content from the component. The arguments to the
              shouldComponentUpdate method are new props and state objects that
              can be inspected and compared to existing values. React will
              continue with the update phase if the shouldComponentUpdate method
              returns true. If the shouldComponentUpdate method returns false,
              React will abandon the update phase for the component and will not
              call the render and componentDidUpdate methods. See the MessageNew
              component used in the Reconciliation Example above for an example
              of the shouldComponentUpdate method in action.
            </p>
            <h4>Controlled Updates Example</h4>
            <p>
              In the example below the render method is only invoked for the
              component that needs to be reconciled.
            </p>
            <ControlledUpdates />
            <p>
              This is the code for the component named "ControlledUppdates":
            </p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from "react";
              <br />
              import &#123; MessageNew &#125; from "./messagenew";
              <br />
              <br />
              class ControlledUpdates extends Component &#123;
              <br />
              &nbsp;&nbsp;constructor(props) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;super(props);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counterLeft: 0,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counterRight: 0<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              <br />
              &nbsp;&nbsp;incrementCounter = counter => &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;if (counter === "left") &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;
              counterLeft: this.state.counterLeft + 1 &#125;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125; else &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123;
              counterRight: this.state.counterRight + 1 &#125;);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;
              <br />
              &nbsp;&nbsp;&#125;;
              <br />
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="row"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              className="col-md-6"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MessageNew
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message=&#123;`Left:
              &#36;{/**/}&#123;this.state.counterLeft&#125;`&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback=&#123;()
              =&gt; this.incrementCounter("left")&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text="Increment
              Left"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              className="col-md-6"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;MessageNew
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message=&#123;`Right:
              &#36;{/**/}&#123;this.state.counterRight&#125;`&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback=&#123;()
              => this.incrementCounter("right")&#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text="Increment
              Right"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
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
              export default ControlledUpdates;
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Lifecycle;
