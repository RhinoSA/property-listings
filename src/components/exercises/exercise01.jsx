import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import ToggleButton from "./includes/togglebutton";
// LISTS
import { DirectionDisplay } from "./includes/directiondisplay";
import { MessageNew } from "./includes/messagenew";
import { HooksMessage } from "./includes/hooksmessage";
import { List } from "./includes/list";
import { ExternalCounter } from "./includes/externalcounter";
import ControlledUpdates from "./includes/controlledupdates";
import Lists from "./includes/lists";
import ListsPro from "./includes/listspro";
import ListsProState from "./includes/listsprostate";
import ListsProContext from "./includes/listsprocontext";
import StateChild from "./includes/statechild";

// REDUX EXAMPLE
//import { Provider } from "react-redux";
//import dataStore from "../../store";
//import { Selector } from "./products/selector";
// REDUX AUTO
//import { SelectorAuto } from "./products/selectorauto";
//import { PRODUCTS, SUPPLIERS } from "../../store/datatypes";

class Exercise01 extends Component {
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

  changeCounter = val => {
    this.setState({ counter: this.state.counter + val });
  };

  incrementCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  handleChange = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  handleScroll = e => {
    if (window.pageYOffset > 100) {
      console.log("scrolled");
      this.setState({
        showBanner: true
      });
    } else {
      this.setState({
        showBanner: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  render = () => {
    return (
      <div className="row" ref={elem => (this.nv = elem)}>
        <div className="col-md-12">
          <Link
            activeClass="active"
            to="section01"
            spy={true}
            smooth={true}
            offset={-70}
            duration={300}
            className="link btn btn-secondary"
          >
            Section 1
          </Link>
          <StateChild />
          {/*<Provider store={dataStore}>
            <SelectorAuto>
              <data name="Products" datatype={PRODUCTS} />
              <data name="Suppliers" datatype={SUPPLIERS} />
            </SelectorAuto>
    </Provider>*/}
          {/*<Provider store={dataStore}>
            <Selector />
    </Provider>*/}
          {/* BOOK STORE */}
          <h2>Book Source Code GitHub</h2>
          <p>
            To access the files used in the book, click on the button below:
          </p>
          <p>
            <a
              href="https://github.com/Apress/pro-react-16"
              target="github"
              className="btn btn-secondary mb-2"
            >
              Pro React 16 - GitHub
            </a>
          </p>
          <hr />
          {/* END BOOK STORE */}
          <ToggleButton />
          {/* EVENTS */}
          <h2>Reconciliation &amp; Lifecycles</h2>
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
                  content produced by components to minimize the changes to the
                  Document Object Model (DOM). Reconcilliation is part of a
                  larger lifecycle that is applied to stateful components.
                </td>
              </tr>
              <tr>
                <td>Why is it useful?</td>
                <td>
                  The reconcilliation process helps application performance,
                  while the broader component lifecycle provides a consistent
                  model for application development and provides useful features
                  for advanced projects.
                </td>
              </tr>
              <tr>
                <td>How is it used?</td>
                <td>
                  The reconcilliation process is performed automatically, and no
                  explicit action is required. All stateful components go
                  through the same lifecycle and can participate actively by
                  implementing specific methods (for class-based components) or
                  effect hook (for funtional components).
                </td>
              </tr>
              <tr>
                <td>Are there any pitfalls or limitations?</td>
                <td>
                  Care must be taken to write components so they fit into the
                  overall lifecycle, which includes being able to render content
                  even though it may not be used to update the DOM.
                </td>
              </tr>
              <tr>
                <td>Are there any alternatives?</td>
                <td>
                  No, the lifecycle and reconcilliation process are fundamental
                  React features.
                </td>
              </tr>
            </tbody>
          </table>
          <h4 className="mb-3">Reconcilliation Example</h4>
          <p>
            This example uses various components to demonstrate the
            reconcilliation process. Below is a list of all the components used:
          </p>
          <ol>
            <li>ActionButton - the component that creates the buttons.</li>
            <li>
              MessageNew - this component displays a message received as a prop
              and passes a function prop as the callback for an ActionButton.
            </li>
            <li>
              List - this component has its own state data, which it uses to
              render a list. An ActionButton component is also provided with the
              reverseList method as its function prop, which reverses the order
              of the items in the list.
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;names: ["Andrew", "Bob", "Mike",
            "Simon"]
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
            component as "stale", meaning that the HTML content displayed to the
            user may be out-of-date. Once the state data is updated, React
            invokes the render method for each of the children which need to be
            updated. Since the component which has the state for the counter is
            in the topmost level of the component hierachy, the render method is
            invoked on all the child components. React only updates the
            components that are affected by the change, limiting the amount of
            work that the application has to do before it is reconciled again.
            When one clicks on the "Reverse Names" button it only affects the
            state of the List component and React only invokes the render method
            for the List component.
          </p>
          <p>
            One somethimes has to force the reconcilliation process when the
            updated state data in a child component is not reflected
            automatically in the parent component. One uses the forceUpdate
            method to accomplish this. See the ExternalCounter component to see
            how one uses the forceUpdate method.
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
                <td>This method is called before a component is destroyed.</td>
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
            descendant components are rendered as well. Components can override
            the default behaviour by implementing the shouldComponentUpdate
            method. This feature allows components to improve the application's
            performance by avoiding calls to the render method when they are not
            required. The shouldComponentUpdate method is called in the update
            phase, and its result determines whether React will call the render
            method to get fresh content from the component. The arguments to the
            shouldComponentUpdate method are new props and state objects that
            can be inspected and compared to existing values. React will
            continue with the update phase if the shouldComponentUpdate method
            returns true. If the shouldComponentUpdate method returns false,
            React will abandon the update phase for the component and will not
            call the render and componentDidUpdate methods. See the MessageNew
            component used in the Reconciliation Example above for an example of
            the shouldComponentUpdate method in action.
          </p>
          <h4>Controlled Updates Example</h4>
          <p>
            In the example below the render method is only invoked for the
            component that needs to be reconciled.
          </p>
          <ControlledUpdates />
          <p>This is the code for the component named "ControlledUppdates":</p>
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
          <h4>Setting State Data from Prop Values</h4>
          <p>
            The getDerivedStateFromProps method is called before the render
            method in the mounting sequence before the shouldComponentUpdate in
            the update phase. The getDerivedStateFromProps method provides
            components with the opportunity to inspect prop values and use them
            to update its state data before its content is rendered and is
            intended for use by components whose behaviour is affected by
            changing prop values over time. The getDerivedStateFromProps method
            is static, which means that it is unable to access any instance
            methods or properties via the this keyword. Instead, the method
            receives a props object, which contains the props values provided by
            the parent component, and a state object, which represents the
            current state data. The getDerivedStateFromProps method returns a
            new state data object that is derived from the prop data.
          </p>
          <p>
            In the example below, the component displays a numeric value with a
            background colour that indicates whether the current value is larger
            or smaller than the last value. The getDerivedStateFromProps method
            receives the new prop values and the component's current state data
            and uses them to create a new state data object that includes the
            direction in which the prop value has changed. The DirectionDisplay
            component and buttons that change its prop data value.
          </p>
          <DirectionDisplay value={this.state.counter} />
          <div className="text-center">
            <button
              className="btn btn-primary m-1"
              onClick={() => this.changeCounter(-1)}
            >
              Decrease
            </button>
            <button
              className="btn btn-info m-1"
              onClick={() => this.changeCounter(1)}
            >
              Increase
            </button>
          </div>
          <p>
            This is the code for the component named "DirectionDisplay" used in
            this example:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            <br />
            export class DirectionDisplay extends Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction: "up",
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastValue: 0<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;getClasses() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(this.state.direction === "up" ?
            "bg-secondary" : "bg-danger") +<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" text-white text-center p-2"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;h5
            className=&#123;this.getClasses()&#125;&gt;&#123;this.props.value&#125;&lt;/h5&gt;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;static getDerivedStateFromProps(props, state) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if (props.value !== state.lastValue) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lastValue:
            props.value,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;direction:
            state.lastValue > props.value ? "down" : "up"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return state;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <p>
            On the component which you will add the DirectionDisplay component
            add the following component call:
          </p>
          <p className="alert alert-secondary">
            &lt;DirectionDisplay value=&#123;this.state.counter&#125; /&gt;
          </p>
          <p>
            Below the call for the DirectionDisplay component you also need to
            include these two buttons:
          </p>
          <p className="alert alert-secondary">
            &lt;div className="text-center"&gt;
            <br />
            &nbsp;&nbsp;&lt;button
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className="btn btn-secondary m-1"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;() =>
            this.changeCounter(-1)&#125;
            <br />
            &nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Decrease
            <br />
            &nbsp;&nbsp;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;&lt;button
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;className="btn btn-secondary m-1"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;() =>
            this.changeCounter(1)&#125;
            <br />
            &nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Increase
            <br />
            &nbsp;&nbsp;&lt;/button&gt;
            <br />
            &lt;/div&gt;
          </p>
          <p>
            Lastly you will need to add the following constructor function to
            the component which has the DirectionDisplay component:
          </p>
          <p className="alert alert-secondary">
            constructor(props) &#123;
            <br />
            &nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;counter: 100
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            &#125;
          </p>
          <h2>Composing Applications</h2>
          <h4>Specialized Components</h4>
          <p>
            Some components provide specialized versions of the features
            provided by another, more general, component. React relies on the
            specialized component rendering the more general component and
            managing the behaviour via props. In the example below there are two
            list of names, the one on the left is a simple component which
            outputs the list of names, and on the right there is a more
            specialized version of the same list which one can sort
            alphabetically by clicking on the "Sort" button. Both of the lists
            are rendered using the same component, but the one which is sortable
            is customized.
          </p>
          <Lists />
          <p>
            The above example uses three components, the main component, named
            "List", uses the following code:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import &#123; GeneralList &#125; from "./generallist";
            <br />
            import &#123; SortedList &#125; from "./sortedlist";
            <br />
            <br />
            class Lists extends Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list: ["Zoe", "Bob", "Alice",
            "Dora", "Joe", "John"]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="row"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="col-6"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;List
            of Names&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;GeneralList
            theme="secondary" list=&#123;this.state.list&#125; /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="col-6"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;Sortable
            List of Names&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;SortedList
            theme="info" list=&#123;this.state.list&#125; /&gt;
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
            export default Lists;
          </p>
          <p>
            The component that generates the list of names, which is called
            GeneralList, uses the following code:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            <br />
            export class GeneralList extends Component &#123;
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className=&#123;`bg-&#36;{/**/}&#123;this.props.theme&#125;
            text-white p-2`&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.list.map((item,
            index) =&gt; (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            key=&#123;item&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;index
            + 1&#125;: &#123;item&#125;
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
          <p>
            Then lastly, we create the specialized component which adds the
            option to be able to sort the list alphabetically. This component is
            named SortedList and uses the following code:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import &#123; GeneralList &#125; from "./generallist";
            <br />
            import &#123; ActionButton &#125; from "./actionbutton";
            <br />
            import &#123; ErrorBoundary &#125; from "./errorboundary";
            <br />
            <br />
            export class SortedList extends Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sort: false
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;getList() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return this.state.sort ?
            [...this.props.list].sort() : this.props.list;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;toggleSort = () => &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; sort: !this.state.sort
            &#125;);
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ErrorBoundary&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;GeneralList
            list=&#123;this.getList()&#125; theme="info" /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="text-center m-2"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ActionButton
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme="secondary"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;text="Sort"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proMode=&#123;this.props.proMode&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback=&#123;this.toggleSort&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ErrorBoundary&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <h2>Stateless Higher-Order Components</h2>
          <p>
            Higher-order components (HOCs) provide an alternative to specialized
            components and are useful when components require common code but
            may not render related content. HOCs are often used for
            cross-cutting concerns, a term that refers to tasks that span the
            entire application and would otherwise lead to the same features
            being implemented in several places. The most commonly encountered
            examples of cross-cutting concerns are authorization, logging and
            data retrieval. An HOC is a function that accepts a component and
            returns a new component that should be presented to the user only
            when the value of the prop named pro is true, acting as a simple
            authorization feature. To display the component, the render method
            uses the compoment received as the function argument and passes on
            all of its props, except the one named pro.
          </p>
          <ListsPro />
          <p className="mt-3">
            Create a component named ProFeature with the following code:
          </p>
          <p className="alert alert-secondary">
            import React from "react";
            <br />
            <br />
            export function ProFeature(FeatureComponent) &#123;
            <br />
            &nbsp;&nbsp;return function(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if (props.pro) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let &#123; pro, ...childProps
            &#125; = props;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;FeatureComponent
            &#123;...childProps&#125; /&gt;;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125; else &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h5
            className="bg-warning text-white text-center p-2"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is
            a Pro Feature
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/h5&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            &#125;
          </p>
          <p>
            The above component acts as a toggle which switches between two
            modes, normal-mode and pro-mode, depending on whether pro-mode is
            enabled or not. Next create a component named ListsPro with the
            following code:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import &#123; GeneralList &#125; from "./generallist";
            <br />
            import &#123; SortedList &#125; from "./sortedlist";
            <br />
            import &#123; ProFeature &#125; from "./profeature";
            <br />
            <br />
            const ProList = ProFeature(SortedList);
            <br />
            <br />
            class ListsPro extends Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;list: ["Zoe", "Bob", "Alice",
            "Dora", "Joe", "John"],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cities: ["London", "New York",
            "Paris", "Milan", "Boston"],
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;proMode: false
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;toggleProMode = () =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; proMode:
            !this.state.proMode &#125;);
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="row"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="col-12 text-center p-2"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="form-check"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;input
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="checkbox"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className="form-check-input"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value=&#123;this.state.proMode&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange=&#123;this.toggleProMode&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label
            className="form-check-label"&gt;Pro Mode&lt;/label&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="row"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="col-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;List
            of Names&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;GeneralList
            theme="secondary" list=&#123;this.state.list&#125; /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="col-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;Sortable
            List of Names&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ProList
            list=&#123;this.state.list&#125; pro=&#123;this.state.proMode&#125;
            /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="col-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;List
            of Cities&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;GeneralList
            theme="secondary" list=&#123;this.state.cities&#125; /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="col-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;Sortable
            List of Cities&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ProList
            list=&#123;this.state.cities&#125;
            pro=&#123;this.state.proMode&#125; /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
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
            export default ListsPro;
          </p>
          <p>
            The other two components which are used in this example, namely
            GeneralList and SortedList, use the same code as the previous
            example about creating specialized components.
          </p>
          <h2>Stateful Higher-Order Components</h2>
          <ListsProState />

          <h2>Context Example</h2>
          <ListsProContext />

          <div className="section-content" id="section01">
            Moo
          </div>

          {(this.state.showBanner && (
            <button
              title="Back to top"
              className="back-to-top"
              onClick={this.scrollToTop}
              duration={300}
            >
              Top
            </button>
          )) ||
            null}
        </div>
      </div>
    );
  };
}

export default Exercise01;
