import React, { Component } from "react";

import BuiltInArrayMethods from "./includes/builtinarraymethods";
import JavaScriptOperators from "./includes/javascriptoperators";
import JavaScriptStrings from "./includes/javascriptstrings";
import ProductInventory from "./includes/productinventory";
import IfAndElse from "./includes/ifandelse";
import IfAndElseIf from "./includes/ifandelseif";
import ToggleButton from "./includes/togglebutton";
import Replace from "./includes/replace";
import SimpleFunction from "./includes/simplefunction";
import MappingFunction from "./includes/mappingfunction";
import ComponentsAndProps from "./includes/componentsandprops";
import { Message } from "./includes/message";
import { Response } from "./includes/response";
import { Summary } from "./includes/summary";
import { Table } from "./includes/table";
import EventsExample from "./includes/eventsexample";
import { DirectionDisplay } from "./includes/directiondisplay";
import { MessageNew } from "./includes/messagenew";
import { MessageSimple } from "./includes/messagesimple";
import { MessageFancy } from "./includes/messagefancy";
import { HooksMessage } from "./includes/hooksmessage";
import { List } from "./includes/list";
import { ExternalCounter } from "./includes/externalcounter";
import ControlledUpdates from "./includes/controlledupdates";
import { FunctionProps } from "./includes/functionprops";
import { SimpleButtonClass } from "./includes/simplebuttonclass";
import { SimpleButtonHooks } from "./includes/simplebuttonhooks";
import Lists from "./includes/lists";
import ListsPro from "./includes/listspro";
import ListsProState from "./includes/listsprostate";
import ListsProContext from "./includes/listsprocontext";
import ConsumeContext from "./includes/consumecontext";
import StateChild from "./includes/statechild";
import CommaList from "./includes/commalist";

// REDUX EXAMPLE
import { Provider } from "react-redux";
import dataStore from "../../store";
//import { Selector } from "./products/selector";
// REDUX AUTO
import { SelectorAuto } from "./products/selectorauto";
import { PRODUCTS, SUPPLIERS } from "../../store/datatypes";

// Module Example
import totalValues from "./includes/totalvalues";
import { subtract, multiply, add } from "./includes/operations";

class Exercise01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Andrew",
      counter: 100,
      showMessage: true,
      namesNew: ["John", "Simon", "Patrick", "Michael"]
    };
  }

  alertme = () => {
    alert("You clicked on the button.");
  };

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

  returnValues = () => {
    let values = [10, 20, 30, 40, 50, 60, 70, 80];
    let total = totalValues(values);
    let subtracted = subtract(values, 460);
    let sumtotal = add(values);
    let multiplied = multiply(values[0], values[3]);
    return (
      <React.Fragment>
        <p>
          Total: ${total}
          <br />
          Subtracted: ${subtracted}
          <br />
          Added: ${sumtotal}
          <br />
          Multiplied: {values[0]} * {values[3]} = {multiplied}
        </p>
      </React.Fragment>
    );
  };

  render = () => {
    return (
      <div className="row">
        <div className="col-md-12">
          <CommaList />
          <StateChild />
          <h2>Using URL Routing</h2>
          <Provider store={dataStore}>
            <SelectorAuto>
              <data name="Products" datatype={PRODUCTS} />
              <data name="Suppliers" datatype={SUPPLIERS} />
            </SelectorAuto>
          </Provider>
          {/*<Provider store={dataStore}>
            <Selector />
    </Provider>*/}
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>path</td>
                <td>
                  The prop that is used to specify the URL or URLs that the
                  component should wait for.
                </td>
              </tr>
              <tr>
                <td>exact</td>
                <td>
                  When this prop is true, only the URLs that precisely equal the
                  path prop are matched.
                </td>
              </tr>
              <tr>
                <td>sensitive</td>
                <td>
                  When this prop is true, matching URLs is case sensitive.
                </td>
              </tr>
              <tr>
                <td>strict</td>
                <td>
                  When this prop is true, path values that end in a / will only
                  match URLs whose corresponding segment also ends with a /.
                </td>
              </tr>
              <tr>
                <td>component</td>
                <td>
                  This prop is used to specify a single component that will be
                  displayed when the path prop mathes the browser's current URL.
                </td>
              </tr>
              <tr>
                <td>render</td>
                <td>
                  This prop is used to specify a function that returns the
                  content that will be displayed when the path prop matches the
                  browser's current URL.
                </td>
              </tr>
              <tr>
                <td>children</td>
                <td>
                  This prop is used to specify a function that will always
                  render content, even when the URL specified by the path prop
                  does not match. This is useful for displaying content in
                  descendent components or components that are not rendered in
                  response to URL changes.
                </td>
              </tr>
            </tbody>
          </table>
          <h4>Simple Routing</h4>
          <p>
            This is a simple use of a Route to render a component based on a
            URL:
          </p>
          <p className="alert alert-secondary">
            &lt;Route path="/products" component=&#123; ProductDisplay &#125;
            /&gt;
          </p>
          <h4>Passing Props Using Routing</h4>
          <p>
            This is how one would pass on props to the component that is
            rendered based on the URL using the render prop:
          </p>
          <p className="alert alert-secondary">
            &lt;Link to="/javascript/products"&gt;Products&lt;/Link&gt;
            <br />
            &lt;Link to="/javascript/suppliers"&gt;Suppliers&lt;/Link&gt;
            <br />
            <br />
            &lt;Route
            <br />
            &nbsp;&nbsp;path="/javascript/products"
            <br />
            &nbsp;&nbsp;render=&#123;routeProps =&gt; &lt;ProductDisplay
            heading="Products" /&gt;&#125;
            <br />
            /&gt;
            <br />
            &lt;Route
            <br />
            &nbsp;&nbsp;path="/javascript/suppliers"
            <br />
            &nbsp;&nbsp;render=&#123;routeProps =&gt; &lt;SupplierDisplay
            heading="Suppliers" /&gt;&#125;
            <br />
            /&gt;
          </p>
          <p>
            In the above example the first route passes down a prop named
            "heading" to the "ProductDisplay" component. The second route passes
            down a bit of extra markup inside a React.Fragment container.
          </p>
          <h4>Restricting Matching with Props</h4>
          <p>
            The default behaviour of the Route component can lead to
            over-matching, where a component matches a URL when you do not want
            it to. You might want to distinguish between the /data and /data/one
            URLs for example, so that the first URL displays a list of data
            items and the second displays the details of a specific product. The
            default matching makes this difficult because a path prop of /data
            matches any URL whose first segment is /data, regardless of how many
            segments the URL contains in total. To help restrict the range of
            URLs that a path will match, the Route component supports three
            additional props: exact, strict and sensitive. The most useful of
            these three props is exact, which will match any URL only if it
            exactly matches the path prop value so that a URL of data/one won't
            be matched by a path of /data.
          </p>
          <p className="alert alert-secondary">
            &lt;Link to="/javascript/data" /&gt;
            <br />
            &lt;Link to="/javascript/data/one" /&gt;
            <br />
            <br />
            &lt;Route path="/javascript/data" exact=&#123;true&#125;
            <br />
            &nbsp;&nbsp;render=&#123; () =&gt; &lt;Data heading="Data Intro"
            /&gt;
            <br />
            &lt;Route path="/javascript/data/one"
            <br />
            &nbsp;&nbsp;render=&#123; () =&gt; &lt;Data heading="Data One" /&gt;
          </p>
          <p>
            In the above example the use of the exact prop is demonstrated. If
            one did not specify the exact property, then both the components
            would be displayed on the path /javascript/data.
          </p>
          <h4>Matching URLs with Regular Expressions</h4>
          <p>
            Not all combinations of URLs can be expressed using individual
            segments, and the Route component supports regular expressions in
            its path prop for more complex matches.
          </p>
          <p className="alert alert-secondary">
            &lt;Link to="/javascript/staff/bob"&gt;Bob&lt;/Link&gt;
            <br />
            &lt;Link to="/javascript/staff/alice"&gt;Alice&lt;/Link&gt;
            <br />
            <br />
            &lt;Route
            <br />
            &nbsp;&nbsp;&nbsp;path=&#123;["/javascript/staff/*"]&#125;
            <br />
            &nbsp;&nbsp;&nbsp;render=&#123;() =&gt;
            this.renderMessage("Staff")&#125;
            <br />
            /&gt;
          </p>
          <p>
            In the above simplified example the Route for all links to
            /javascript/staff/(person's name here) go to the same address.
          </p>
          <p className="alert alert-secondary">
            &lt;Link to="/javascript/data/three"&gt;Data Three&lt;/Link&gt;
            <br />
            &lt;Link to="/javascript/data/four"&gt;Data Four&lt;/Link&gt;
            <br />
            <br />
            &lt;Route
            <br />
            &nbsp;&nbsp;path=&#123;["/javascript/data/(three|four)"]&#125;
            <br />
            &nbsp;&nbsp;render=&#123;() =&gt; this.renderMessage("Regular
            Expressions")&#125;
            <br />
            /&gt;
          </p>
          <p>
            In the example above, this part of the Route: "(three|four)" directs
            both combinations of links to the same URL.
          </p>
          <h4>Defining a Default Route</h4>
          <p>
            Below is an example of using the React Router Swith to create a
            default view:
          </p>
          <p className="alert alert-secondary">
            &lt;Link to="/javascript/products"&gt;Products&lt;/Link&gt;
            <br />
            &lt;Link to="/javascript/suppliers"&gt;Suppliers&lt;/Link&gt;
            <br />
            <br />
            &lt;Switch&gt;
            <br />
            &nbsp;&nbsp;&lt;Route path="/javascript/products"
            component=&#123;ProductDisplay&#125; /&gt;
            <br />
            &nbsp;&nbsp;&lt;Route path="/javascript/suppliers"
            component=&#123;SupplierDisplay&#125; /&gt;
            <br />
            &nbsp;&nbsp;&lt;Route
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;render=&#123;routeProps =&gt; (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;The
            Default Route&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
            className="bg-secondary text-white p-2"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is
            the default route.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;)&#125;
            <br />
            &nbsp;&nbsp;/&gt;
            <br />
            &lt;/Switch&gt;
          </p>
          <p>
            By not specifying a path in a Route, as seen in the above example, a
            Route component will always match the current URL and can be used as
            the default Route by the Switch component to display a default
            component. If one does not have a default route, then there is
            nothing displayed when one first goes to the link.
          </p>
          <p>
            One also has to include the Switch component in the import statement
            as follows:
          </p>
          <p className="alert alert-secondary">
            import &#123; BrowserRouter as Router, Link, Route, Switch &#125;
            from "react-router-dom";
          </p>
          <h4>Using Redirection to Create a Default Route</h4>
          <p>
            In the previous example a default route was created by not
            specifying a path for the Route. Another way to handle this is to
            use the Redirect option. To make use of the Redirect option, you
            need to include the following import statement:
          </p>
          <p className="alert alert-secondary">
            import &#123; BrowserRouter as Router, Link, Route, Switch, Redirect
            &#125; from "react-router-dom";
          </p>
          <p>To use the Redirect option you would do the following:</p>
          <p className="alert alert-secondary">
            &lt;Link to="/javascript/products"&gt;Products&lt;/Link&gt;
            <br />
            &lt;Link to="/javascript/suppliers"&gt;Suppliers&lt;/Link&gt;
            <br />
            <br />
            &lt;Switch&gt;
            <br />
            &nbsp;&nbsp;&lt;Route path="/javascript/products"
            component=&#123;ProductDisplay&#125; /&gt;
            <br />
            &nbsp;&nbsp;&lt;Route path="/javascript/suppliers"
            component=&#123;SupplierDisplay&#125; /&gt;
            <br />
            &nbsp;&nbsp;&lt;Redirect to="/javascript" /&gt;
            <br />
            &lt;/Switch&gt;
          </p>
          <p>
            Another use of the Redirect option is to redirect a link which no
            longer is in use to a new path as follows:
          </p>
          <p className="alert alert-secondary">
            &lt;Redirect from="/oldpath/data" to="/javascript" /&gt;
          </p>
          <h4>Indicating the Active Route</h4>
          <p>
            React Router has a built in active route function which one can use
            to indicate which route is active. To make use of the active route
            functionality you need to change the type of link from a regular
            "Link" to a "NavLink" as follows:
          </p>
          <p className="alert alert-secondary">
            &lt;NavLink to="/javascript/suppliers"&gt;Suppliers&lt;/Link&gt;
          </p>
          <p>
            React Router automatically then adds an active class to links which
            are currently active. If you want to change the class name of the
            class that is added to active links, you can do the following to
            change the default active class from "active" to "live":
          </p>
          <p className="alert alert-secondary">
            &lt;NavLink to="/javascript/suppliers"&gt;Suppliers&lt;
            activeClassName="live" /Link&gt;
          </p>
          <h2>Advanced URL Routing</h2>
          <h4>Creating Router Aware Components</h4>
          <p>
            When a Route displays a component, it provides it with context data
            that describes the current route and with access to an API that can
            be used for navigation, allowing the components to be aware of the
            current location and to participate in the routing. When the
            component prop is used, the Route passes the data and API to the
            component it displays as props, named "match", "location" and
            "history". When the render prop is used, the render function is
            passed an object that has "match", "location" and "history"
            properties whose values are the same objects used as render props.
          </p>
          <p>
            To demonstate the use of routing props, a component named
            "RoutingInfo" was created which displays the "match" and "location"
            properties.
          </p>
          <h4>Using URL Parameters</h4>
          <p>
            URL parameters are specified as path prop segments that start with a
            colon like the following example:
          </p>
          <p className="alert alert-secondary">
            &lt;Route path="/javascript/info/:datatype"
            component=&#123;RoutingInfo&#125; /&gt;
          </p>
          <p>
            When the Route matches a URL, it will assign the value of the second
            segment to a URL parameter called "datatype", which will be passed
            on to the RoutingInfo component through the "match" prop's params
            property. If you click on the link in the products table named
            "Match Info", you will see the value displayed for the params
            property of the "Match Info" link.
          </p>
          <p>
            In the RoutingInfo component the data that is displayed is
            determined by the datatype parameter as follows:
          </p>
          <p className="alert alert-secondary">
            &#123;(this.props.match.params.datatype === undefined ||
            <br />
            this.props.match.params.datatype === "match") &amp;&amp;
            <br />
            this.renderTable("Match", this.props.match, [<br />
            "url",
            <br />
            "path",
            <br />
            "params",
            <br />
            "isExact"
            <br />
            ])&#125;
            <br />
            &#123;(this.props.match.params.datatype === undefined ||
            <br />
            this.props.match.params.datatype === "location") &amp;&amp;
            <br />
            this.renderTable("Location", this.props.location, [<br />
            "key",
            <br />
            "pathname",
            <br />
            "search",
            <br />
            "hash",
            <br />
            "state"
            <br />
            ])&#125;
          </p>
          <p>
            What the above code does is instruct the component to display either
            the "match" info or the "location" info depending on which of the
            two parameters was passed down via the URL. Each of the data
            switching statements also has an undefined paramater option that
            instructs the component to render the data if no parameter for
            datatype is matched. This can be used to show the information for
            both datatypes by using a link like this:
          </p>
          <p className="alert alert-secondary">
            &lt;Link
            <br />
            &nbsp;&nbsp;to="/javascript/info"
            <br />
            &nbsp;&nbsp;className="btn btn-secondary mb-2"
            <br />
            &gt;
            <br />
            &nbsp;&nbsp;All Routing Info
            <br />
            &lt;/Link&gt;
          </p>
          <p>
            To view the information on the "match" properties on would use a
            link like this:
          </p>
          <p className="alert alert-secondary">
            &lt;Link
            <br />
            &nbsp;&nbsp;to="/javascript/info/match"
            <br />
            &nbsp;&nbsp;className="btn btn-secondary mb-2"
            <br />
            &gt;
            <br />
            &nbsp;&nbsp;Match Info
            <br />
            &lt;/Link&gt;
          </p>
          <p>To use these two links one would add the following Routes:</p>
          <p className="alert alert-secondary">
            &lt;Route
            <br />
            &nbsp;&nbsp;path="/javascript/info/:datatype"
            <br />
            &nbsp;&nbsp;component=&#123;RoutingInfo&#125;
            <br />
            /&gt;
            <br />
            &lt;Route
            <br />
            &nbsp;&nbsp;path="/javascript/info/:datatype?"
            <br />
            &nbsp;&nbsp;component=&#123;RoutingInfo&#125;
            <br />
            /&gt;
          </p>
          <p>
            The first Route specifies Links which include a "datatype" parameter
            and the second Route deals with Links which do not have a "datatype"
            parameter.
          </p>
          <h4>Accessing Routing Data in Other Components</h4>
          <p>
            A Route will add props to the components it displays but can't
            provide them directly to other components, including the descendants
            of the components it displays. To avoid prop threading, the
            React-Router package provides two different approaches for providing
            access to routing data in descendant components. In the example
            below the component accesses the routing data directly by using a
            Route in the render method. This example creates a custom link to
            replace the standard "Link" used by React-Router.
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import &#123; Route, Link &#125; from "react-router-dom";
            <br />
            <br />
            export class ToggleLink extends Component &#123;
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path=&#123;this.props.to&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;exact=&#123;this.props.exact&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;children=&#123;routeProps
            =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const
            baseClasses = this.props.className || "m-2 btn btn-block";
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const
            activeClass = this.props.activeClass || "btn-info";
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const
            inActiveClass = this.props.inActiveClass || "btn-secondary";
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;const
            combinedClasses = `&#36;{/**/}&#123;baseClasses&#125; &#36;{/**/}
            &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;routeProps.match
            ? activeClass : inActiveClass
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;`;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Link
            to=&#123;this.props.to&#125;
            className=&#123;combinedClasses&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.children&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Link&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <p>
            To use the custom link one would replace the normal "Link" call with
            the following:
          </p>
          <p className="alert alert-secondary">
            &lt;ToggleLink
            <br />
            to="/javascript/products"
            <br />
            className="btn btn-secondary mb-2" &gt;
            <br />
            Products
            <br />
            &lt;/ToggleLink&gt;
          </p>
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
          {/* TEMPLATE STRINGS */}
          <h2>Template Strings</h2>
          <p>
            This is exercise demonstates the use of template strings which are
            used to add JavaScript into a string.
          </p>
          <p>{`This is a message to ${this.state.username} using JS.`}</p>
          <p className="alert alert-secondary">
            &#123;`This is a message to &#36;{/**/}
            &#123;this.state.username&#125; using JS.`&#125;
          </p>
          {/* END TEMPLATE STRINGS */}
          <SimpleFunction />
          <IfAndElse />
          <IfAndElseIf />
          <MappingFunction />
          <ToggleButton />
          <Replace />
          <ProductInventory />
          <h1>JavaScript Reference</h1>
          <JavaScriptStrings />
          <h2>Converting Strings to Numbers</h2>
          <p>
            This example demonstrates how one can convert strings to numbers.
          </p>
          <p className="alert alert-secondary">
            let firstval = "5";
            <br />
            let secondval = "8";
            <br />
            <br />
            let result = Number(firstval) + Number(secondval);
            <br />
            console.log(result)
          </p>
          <JavaScriptOperators />
          <BuiltInArrayMethods />
          {/* USING FOR AND PUSH */}
          <h2>Using for and push to Output an Array</h2>
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="list-group
            mb-3 mt-3"&gt;
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
          {/* END USING FOR AND PUSH */}
          {/* TABLE GENERATOR */}
          <h2>Table Generator Using Row Mapping</h2>
          <p>
            This function outputs a table with an array of names, a number
            (count) and a total number of characters (letters) in the name.
          </p>
          <p className="alert alert-secondary">
            import React from "react";
            <br />
            <br />
            export function Table(&#123; names &#125;) &#123;
            <br />
            &nbsp;&nbsp;if (names.length > 0) &#123;
            <br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;table className="table
            table-striped mt-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;thead
            className="thead-dark"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;#&lt;/th&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Name&lt;/th&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;th&gt;Letters&lt;/th&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/thead&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tbody&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;names.map((name,
            index) => (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;tr
            key=&#123;index&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&#123;index
            + 1&#125;&lt;/td&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&#123;name&#125;&lt;/td&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;td&gt;&#123;name.length&#125;&lt;/td&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tr&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/tbody&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/table&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125; else &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;p&gt;There are no names in the
            list to display.&lt;/p&gt;;
            <br />
            &nbsp;&nbsp; &#125;
            <br />
            &#125;
            <br />
            <br />
            export default Table;
          </p>
          <p>
            To create a table, use the following in the component where the
            table is going to be rendered:
          </p>
          <p className="alert alert-secondary">
            &lt;Table names=&#123;["Bob", "Alice", "Simon", "Andrew"]&#125;
            /&gt;
          </p>
          <p>
            Ensuring that you have also imported the component containing the
            function:
          </p>
          <p className="alert alert-secondary">
            import &#123; Table &#125; from "./includes/table";
          </p>
          <h4>The Rendered Table</h4>
          <Table names={["Bob", "Alice", "Simon", "Andrew"]} />
          {/* END TABLE GENERATOR */}
          {/* JAVASCRIPT MODULES */}
          <h2>JavaScript Modules</h2>
          <p>
            Modules contain JavaScript code that other parts of an application
            depend on. This is an example of creating a module which adds up the
            numbers in an array to get the total. This is the JavaScript for the
            file named "totalvalues.jsx" which does the calculations for adding
            up the totals:
          </p>
          <p className="alert alert-secondary">
            export default function(values) &#123;
            <br />
            &nbsp;&nbsp;return values.reduce((total, val) => total + val, 0);
            <br />
            &#125;
          </p>
          <p>
            This is another component which has more than one function included
            that is also used to calculate values:
          </p>
          <p className="alert alert-secondary">
            export function subtract(values, amount)&#123;
            <br />
            &nbsp;&nbsp;return values.reduce((total, val) => total - val,
            amount);
            <br />
            &#125;
            <br />
            <br />
            export function add(values) &#123;
            <br />
            &nbsp;&nbsp;return values.reduce((total, val) => total + val, 200);
            <br />
            &#125;
            <br />
            <br />
            export function divide(first, second) &#123;
            <br />
            &nbsp;&nbsp;return first / second;
            <br />
            &#125;
          </p>
          <p>
            Then to use these two modules, include the following import
            statement:
          </p>
          <p className="alert alert-secondary">
            import totalValues from "./includes/totalvalues";
            <br />
            import operations from "./includes/operations";
          </p>
          <p>
            Then to use the function from the module inside another function on
            the page you use the following:
          </p>
          <p className="alert alert-secondary">
            returnValues = () => &#123;
            <br />
            &nbsp;&nbsp;let values = [10, 20, 30, 40, 50, 60, 70, 80];
            <br />
            &nbsp;&nbsp;let total = totalValues(values);
            <br />
            &nbsp;&nbsp;let subtracted = subtract(values, 460);
            <br />
            &nbsp;&nbsp;let sumtotal = add(values);
            <br />
            &nbsp;&nbsp;let multiplied = multiply(values[0], values[3]);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total: &#36;{/**/}
            &#123;total&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subtracted: &#36;
            {/**/}
            &nbsp;&nbsp;&#123;subtracted&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Added: &#36;{/**/}
            &#123;sumtotal&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Multiplied:
            &nbsp;&nbsp;&#123;values[0]&#125; * &#123;values[3]&#125; =
            &#123;multiplied&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;;
          </p>
          {this.returnValues()}
          {/* END JAVASCRIPT MODULES */}
          <h1>Static Content</h1>
          <p>
            This example shows how one can include files which are inside the
            public folder.
          </p>
          <p className="alert alert-secondary">
            &lt;link rel="stylesheet" href=&#123; process.env.PUBLIC_URL +
            "/assets/css/static.css" &#125; /&gt;
            <br />
            &lt;img src=&#123; process.env.PUBLIC_URL +
            "/assets/images/logo.png" &#125; alt="logo" /&gt;
          </p>
          <h1>Components &amp; Props</h1>
          {/* COMPONENTS AND PROPS */}
          <ComponentsAndProps />
          <Message type="Heading" title="Creating a Messages Component" />
          <p>
            This is a function to output a message component. The message
            component also allows you to create a heading instead of a message.
            If the type of message is set to heading, then a heading is output,
            if no type is specified, then the default message format is used.
            There is also a built in switch function added, which determines
            what background color is used for the message. If the name of Mark
            is used, then a className of "alert alert-warning" is used, if the
            name Andrew is used, then a className of "alert alert-info" is used.
            If the names "Andrew" or "Mark" are not used as names, then the
            defaul className is used "alert alert-secondary".
          </p>
          <h4>The Messages Component:</h4>
          <p>Create a file named message.jsx and use the following code:</p>
          <p className="alert alert-secondary">
            import React from "react";
            <br />
            <br />
            export function Message(&#123; type, title, name, message &#125;)
            &#123;
            <br />
            &nbsp;&nbsp;let classes;
            <br />
            &nbsp;&nbsp;switch (name) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;case "Mark":
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;classes = "alert alert-warning
            mb-0";
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;case "Andrew":
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;classes = "alert alert-info
            mb-0";
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;default:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;classes = "alert alert-secondary
            mb-0";
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;if (type === "Heading") &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;&#123;title&#125;&lt;/h2&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125; else &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="card mt-3 mb-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="card-body"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4
            className="card-title"&gt;&#123;name&#125;'s Message:&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="card-text"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
            className=&#123;classes&#125;&gt;&#123;message&#125;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
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
          </p>
          <h4>The Response Component:</h4>
          <p>
            Create another file named Response.jsx and use the following code:
          </p>
          <p className="alert alert-secondary">
            import React from "react";
            <br />
            <br />
            export function Response(&#123; name, response &#125;) &#123;
            <br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card mt-3
            mb-3 ml-3 mr-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="card-body"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
            className="card-text"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;name&#125;:
            &#123;response&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;
          </p>
          <p>To display a simple heading use:</p>
          <p className="alert alert-secondary">
            &lt;Message type="Heading" title="Using Components Example" /&gt;
          </p>
          <p>To display a message:</p>
          <p className="alert alert-secondary">
            &lt;Message
            <br />
            &nbsp;&nbsp;name="Mark"
            <br />
            &nbsp;&nbsp;message="The aliens have just landed outside my town."
            <br />
            /&gt;
          </p>
          <p>To display a response:</p>
          <p className="alert alert-secondary">
            &lt;Response
            <br />
            &nbsp;&nbsp;name="Andrew"
            <br />
            &nbsp;&nbsp;response="Do they seem aggressive or peaceful?"
            <br />
            /&gt;
          </p>
          <Message
            name="Mark"
            message="The aliens have just landed outside my town."
          />
          <Response
            name="Andrew"
            response="Do they seem aggressive or peaceful?"
          />
          <Response
            name="Mark"
            response="This does not look good, rather disturbing."
          />
          <Message
            name="Andrew"
            message="Mark messaged me to tell me that aliens had just landed outside his town."
          />
          <Response
            name="Jessica"
            response="That is crazy, what do they look like?"
          />
          <Message
            name="Jessica"
            message="Andrew messaged me to tell me that aliens had just landed outside Mark's town."
          />
          {/* END COMPONENTS AND PROPS */}
          {/* FUNCTION PROPS */}
          <h2>Function Props</h2>
          <p>
            The previous message component example demonstated the use of data
            props, which provide a child component with a read-only data value.
            React also supports function props, where the parent component
            provides a child with a function that it can invoke to notify the
            parent that something important has happened. The parent component
            can respond by changing the value of the data props, which will
            trigger an update and allow the child to present updated content to
            the user.
          </p>
          <FunctionProps names={this.state.namesNew} />
          {/* END FUNCTION PROPS */}
          {/* DEFAULT PROPS */}
          <h2>Defining the Default Props</h2>
          <p>
            As the number of props used in an application grows, you may find
            yourself repeating the same set of prop values, even though the
            values are generally the same most of the time. An alternative
            approach is to define a set of defaults and only override them when
            you need to use a different value.
          </p>
          <p className="alert alert-secondary">
            import React from "react";
            <br />
            import &#123; SimpleButton &#125; from "./simplebutton;
            <br />
            <br />
            export function CallbackButton(props) &#123;
            <br />
            &nbsp;&nbsp;let &#123; theme, childProps &#125; = props;
            <br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;SimpleButton &#123;...ChildProps&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;`btn btn-&#36;
            {/* */}
            &#123;props.theme&#125; btn-sm`&#125;
            <br />
            &nbsp;&nbsp;)
            <br />
            &#125;
            <br />
            <br />
            CallbackButton.defaultProps = &#123;
            <br />
            &nbsp;&nbsp;text: "Default Text"
            <br />
            &nbsp;&nbsp;theme: "warning"
            <br />
            &#125;
          </p>
          {/* END DEFAULT PROPS */}
          {/* START STATEFUL */}
          <h2>Stateful Components</h2>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>What are they?</td>
                <td>
                  Components are the key building blocks in React applications.
                  Stateful components have their own data that can be used to
                  alter the content the component renders.
                </td>
              </tr>
              <tr>
                <td>Why are they useful?</td>
                <td>
                  Stateful components make it easier to keep track of the
                  application state provided by each component and provide the
                  means to alter the data values and reflect the change in the
                  content presented to the user.
                </td>
              </tr>
              <tr>
                <td>How are they used?</td>
                <td>
                  Stateful components are defined by using a class or by adding
                  hooks to a functional component.
                </td>
              </tr>
              <tr>
                <td>Are there any pitfalls or limitations?</td>
                <td>
                  Care must be taken to ensure that the state data is modified
                  correctly, as described in the "Modifying State Data" section
                  of these notes.
                </td>
              </tr>
              <tr>
                <td>Are there any alternatives?</td>
                <td>
                  Components are the key building blocks in a React application,
                  and there is no way to avoid their use. There are alternatives
                  to props that can be useful in larger and more complex
                  projects, as described later.
                </td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th style={{ width: "40%" }}>Problem</th>
                <th style={{ width: "60%" }}>Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Add state data to a component</td>
                <td>
                  Define a class whose constructor sets the state property or
                  call the useState function to create a property and function
                  for a single state property
                </td>
              </tr>
              <tr>
                <td>Modify state data</td>
                <td>
                  Call the setState function or call the function returned by
                  useState
                </td>
              </tr>
              <tr>
                <td>Share data between components</td>
                <td>
                  Lift the state data to an ancestor component and distribute it
                  using props
                </td>
              </tr>
              <tr>
                <td>
                  Define prop types and default values in a class-based
                  component
                </td>
                <td>
                  Apply the properties to the class or define static properties
                  within the class
                </td>
              </tr>
            </tbody>
          </table>
          <h4>A Stateful Component Example</h4>
          <p>
            A stateful component has its own data that influences the content
            the component renders. This data, which is known as state data, is
            separate from the parent component and the props it provides. In
            this example the button receives props from the parent component,
            but also has its own state data, which for this example is the
            hasButtonBeenClicked state property. When the user first clicks on
            the button it alters the component's state and sets the
            hasButtonBeenClicked property to true and adds the word "Clicked" to
            the button text.
          </p>
          <p>
            <SimpleButtonClass
              className="secondary"
              disabled="false"
              text="Click Me"
              callback={this.alertme}
            />
          </p>
          <p>
            Below is the code used to create the SimpleButtonClass component
            used in the above example of a stateful component:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            <br />
            export class SimpleButtonClass extends Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hasButtonBeenClicked: false,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter: 0
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;onMouseDown = () => &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; hasButtonBeenClicked:
            true &#125;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; counter:
            this.state.counter + 1 &#125;);
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;this.props.callback&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onMouseDown=&#123;this.onMouseDown&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;`btn
            btn-&#36;{/**/}&#123;this.props.className&#125;`&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled=&#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.props.disabled
            === true || this.props.disabled === "true"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.text&#125;
            (&#123;this.state.counter&#125;)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.hasButtonBeenClicked
            &amp;&amp; <span>- Clicked</span>&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <p>
            To use the component, add the following component call to the
            component using the SimpleButtonClass component:
          </p>
          <p className="alert alert-secondary">
            &lt;SimpleButtonClass
            <br />
            &nbsp;&nbsp;text="Click Me"
            <br />
            &nbsp;&nbsp;className="secondary"
            <br />
            &nbsp;&nbsp;disabled="false"
            <br />
            &nbsp;&nbsp;callback=&#123;this.alertme&#125;
            <br />
            /&gt;
          </p>
          <h4>A Stateful Functional Component Using Hooks</h4>
          <p>
            In the previous exampe we create a stateful component using a class.
            In this example we will create the same component, but using a
            functional component that relies on hooks to create a stateful
            functional component.
          </p>
          <p>
            <SimpleButtonHooks
              text="Click Me"
              className="secondary"
              disabled="false"
              callback={this.alertme}
            />
          </p>
          <p>This is the code for the stateful functional component:</p>
          <p className="alert alert-secondary">
            import React, &#123; useState &#125; from "react";
            <br />
            <br />
            export function SimpleButtonHooks(props) &#123;
            <br />
            &nbsp;&nbsp;const [counter, setCounter] = useState(0);
            <br />
            &nbsp;&nbsp;const [hasButtonBeenClicked, setHasButtonBeenClicked] =
            useState(false);
            <br />
            &nbsp;&nbsp;const handleClick = () =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;setCounter(counter + 1);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;setHasButtonBeenClicked(true);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;props.callback();
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;button
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onClick=&#123;handleClick&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;`btn btn-&#36;
            {/**/}&#123;props.className&#125;`&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;disabled=&#123;props.disabled
            === "true" || props.disabled === true&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.text&#125;
            (&#123;counter&#125;) &#123;hasButtonBeenClicked &amp;&amp;
            &lt;span&gt;- Clicked&lt;/span&gt;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
            <br />
            &nbsp;&nbsp;);
            <br />
            &#125;
          </p>
          <p>
            To use the component, add the following component call to the
            component using the SimpleButtonHooks component:
          </p>
          <p className="alert alert-secondary">
            &lt;SimpleButtonHooks
            <br />
            &nbsp;&nbsp;text="Click Me"
            <br />
            &nbsp;&nbsp;className="secondary"
            <br />
            &nbsp;&nbsp;disabled="false"
            <br />
            &nbsp;&nbsp;callback=&#123;this.alertme&#125;
            <br />
            /&gt;
          </p>
          {/* END STATEFUL */}
          {/* EVENTS */}
          <EventsExample />
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
          <h4>A Simple Application</h4>
          <MessageSimple
            message={`Counter: ${this.state.counter}`}
            callback={this.incrementCounter}
            text="Increment Counter"
          />
          <p>
            Above is a good example of how components interact. The main
            component displays the MessageSimple and ActionButton components and
            configures them so that clicking the button will update the counter
            state data, which has been passed up as a prop to the MessageSimple
            component. The basic relationship that is used underpins the React
            development process: parent components configure children with data
            props and receive notifications through function props, which leads
            to state data changes and triggers the update process.
          </p>
          <p>
            This is the code for the MessageSimple component used in the above
            example of a simple application:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import &#123; ActionButton &#125; from "./actionbutton";
            <br />
            import &#123; CountDisplay &#125; from "./countdisplay";
            <br />
            <br />
            export class MessageSimple extends Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter: 0<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;incrementCounter = () =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; counter:
            this.state.counter + 1 &#125;);
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CountDisplay
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme="secondary"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message=&#123;`Counter:
            &#36;{/**/}&#123;this.state.counter&#125;`&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ActionButton
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme="secondary"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;...this.props&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;callback=&#123;this.incrementCounter&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.counter
            === 0 ? (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
            className="mt-2"&gt;Click on the "Increment Counter"
            button...&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) : (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
            className="mt-2"&gt;Thank you for clicking on the button
            :)&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <p>
            This is the code for the ActionButton component used by the
            MessageSimple component:
          </p>
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
          <p>This is the CountDisplay component code:</p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            <br />
            export class CountDisplay extends Component &#123;
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
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div id="messageDiv"
            className="h5 mt-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.message&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <p>To display the components use the following code:</p>
          <p className="alert alert-secondary">
            &lt;MessageSimple
            <br />
            &nbsp;&nbsp;message=&#123;`Counter: &#36;{/**/}
            &#123;this.state.counter&#125;`&#125;
            <br />
            &nbsp;&nbsp;callback=&#123;this.incrementCounter&#125;
            <br />
            &nbsp;&nbsp;text="Increment Counter"
            <br />
            /&gt;
          </p>
          <h4>Using the Children Prop</h4>
          <p>
            In this example we will use the simple component created in the
            previous example and use the children property to modify the basic
            component and add new features. This example uses the same
            components as the previous example, but with one minor alteration to
            the MessageSimple component. On the MessageSimple component replace
            the &lt;React.Fragment&gt; and the &lt;/React.Fragment&gt; tags with
            &lt;ThemeSelector&gt; and &lt;/ThemeSelector&gt;. You will also need
            to add the following import statement to the MessageSimple
            component:
          </p>
          <p className="alert alert-secondary">
            import &#123; ThemeSelector &#125; from "./themeselector";
          </p>
          <p>
            A new component also needs to be created called "ThemeSelector" with
            the following code:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            <br />
            export class ThemeSelector extends Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;theme: "secondary",
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverseChildren: false
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.themes = ["primary", "secondary",
            "danger", "warning", "dark"];
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;setTheme = event =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; theme:
            event.target.value &#125;);
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;toggleReverse = () =&gt; &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; reverseChildren:
            !this.state.reverseChildren &#125;);
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;let modChildren =
            React.Children.map(this.props.children, c =&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;React.cloneElement(c, &#123;
            theme: this.state.theme &#125;)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;if (this.state.reverseChildren) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modChildren.reverse();
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="bg-dark p-2
            mt-3 mb-3"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button
            className="btn btn-secondary"
            onClick=&#123;this.toggleReverse&#125;&globalThis;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reverse
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&globalThis;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="form-group text-left"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;label
            className="text-white"&gt;Theme:&lt;/label&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;select
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className="form-control"
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value=&#123;this.state.theme&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;onChange=&#123;this.setTheme&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.themes.map(theme
            =&gt; (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;option
            key=&#123;theme&#125; value=&#123;theme&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;theme&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/option&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/select&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="bg-white p-2"&gt;&#123;modChildren&#125;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <h4>The Output:</h4>
          <MessageFancy
            message={`Counter: ${this.state.counter}`}
            callback={this.incrementCounter}
            text="Increment Counter"
          />
          <h4>A Simplified MessageSimple Component</h4>
          <p>
            To explain how the children property works this is a simplified
            version of the MessageSimple component.
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import &#123; ActionButton &#125; from "./actionbutton";
            <br />
            import &#123; CountDisplay &#125; from "./countdisplay";
            <br />
            <br />
            export class MessageSimple extends Component &#123;
            <br />
            &nbsp;&nbsp;constructor(props) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;super(props);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counter: 0<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ThemeSelector&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;CountDisplay
            /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ActionButton
            /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p
            className="mt-2"&gt;Click on the "Increment Counter"
            button...&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ThemeSelector&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <p>
            From the above you can see that there are three basic elements
            inside the MessageSimple component, a CountDisplay component, an
            ActionButton component and a paragraph Element. These three elements
            are wrapped inside the component call for the ThemeSelector
            component and this makes them children of the ThemeSelector
            component. To output the three child components inside the
            ThemeSelector component one would use the following code:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            <br />
            export class Themeselector extends Component &#123;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="bg-dark
            p-2"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            className="bg-white p-2"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
            this.props.children &#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;)
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
          </p>
          <p>
            When the component ThemeSelector is rendered it inserts the three
            child elements where the following code is in the component:
          </p>
          <p className="alert alert-secondary">
            &#123; this.props.children &#125;
          </p>
          <p>
            So what it has effectively done is wrap the three elements inside
            two outer div elements. What this enables one to do is create more
            complex components which are nested inside other components which
            depend on the nested components to create a more complex component.
          </p>
          <p>
            The ThemeSelector component uses a special mapping function to clone
            and map the three child elements with the following code:
          </p>
          <p className="alert alert-secondary">
            render() &#123;
            <br />
            &nbsp;&nbsp;let modChildren =
            React.Children.map(this.props.children, c =&gt;
            <br />
            &nbsp;&nbsp;React.cloneElement(c, &#123; theme: this.state.theme
            &#125;)
            <br />
            );
          </p>
          <p>
            Then to output the three cloned children the ThemeSelector component
            uses this code:
          </p>
          <p className="alert alert-secondary">
            &lt;div className="bg-white
            p-2"&gt;&#123;modChildren&#125;&lt;/div&gt;
          </p>
          <p>
            What this allows the ThemeSelector component to do, is place the
            three cloned elements inside the component's code in a specific
            location. The other added elements, namely the "Reverse" button and
            the theme switching selector. What this demonstrates is how one can
            combine components into a more complex component using the children
            props feature of React.
          </p>
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
          <h2 className="mt-3">Using Contexts for Global Data</h2>
          <p>
            The management of props can become difficult, regardless of how you
            choose to compose your application. As the complexity of the
            application increases, so does the number of components that need to
            cooperate. As the hierachy of components grows, the state data gets
            lifted up higher in the application, further away from where the
            data is used, with the result that every component has to pass on
            props that it doesn't use directly but that it's descendants rely
            on. To help avoid this problem, React provides the context feauture,
            which allows state data to be passed from where it is defined to
            where it is needed without having to be relayed through the
            intermediate components.
          </p>
          <h4>Defining the Context</h4>
          <p>
            The first step is to define the context, which is the mechanism by
            which the state data is distributed. Contexts can be defined
            anywhere in the application. Below is the context component:
          </p>
          <p className="alert alert-secondary">
            import React from "react";
            <br />
            <br />
            export const ProModeContext = React.createContext(&#123;
            <br />
            &nbsp;&nbsp;heading: "Todo List",
            <br />
            &nbsp;&nbsp;todoItems: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 1, action: "Buy flowers", done:
            false &#125;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 2, action: "Clean the house",
            done: true &#125;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 3, action: "Mow the lawn", done:
            false &#125;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 4, action: "Wash the car", done:
            false &#125;
            <br />
            &nbsp;&nbsp;]
            <br />
            &#125;);
          </p>
          <h4>The Context Consumer</h4>
          <p>
            Below is the code for the component which uses the data that is
            defines in the context:
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import &#123; ProModeContext &#125; from "./promodecontext";
            <br />
            console.log(ProModeContext);
            <br />
            <br />
            class ConsumeContext extends Component &#123;
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ProModeContext.Consumer&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;contextData
            =&gt; (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;&#123;contextData.heading&#125;&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul
            className="list-unstyled"&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;contextData.todoItems
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.filter(item
            =&gt; item.done === false)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.map(item
            => &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
            &lt;li
            key=&#123;item.id&#125;&gt;&#123;item.action&#125;&lt;/li&gt;;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;)&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;)&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ProModeContext.Consumer&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
            <br />
            export default ConsumeContext;
          </p>
          <ConsumeContext />
          <h2>Context Example</h2>
          <ListsProContext />
          <h2>Using Refs &amp; Portals</h2>
        </div>
      </div>
    );
  };
}

export default Exercise01;
