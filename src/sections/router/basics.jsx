import React, { Component } from "react";
import Menu from "../menu";

class RouterBasics extends Component {
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
            <h1>React Router</h1>
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
                    When this prop is true, only the URLs that precisely equal
                    the path prop are matched.
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
                    When this prop is true, path values that end in a / will
                    only match URLs whose corresponding segment also ends with a
                    /.
                  </td>
                </tr>
                <tr>
                  <td>component</td>
                  <td>
                    This prop is used to specify a single component that will be
                    displayed when the path prop mathes the browser's current
                    URL.
                  </td>
                </tr>
                <tr>
                  <td>render</td>
                  <td>
                    This prop is used to specify a function that returns the
                    content that will be displayed when the path prop matches
                    the browser's current URL.
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
            <h2>React Router</h2>
            <p>
              To install the React Router module run the following command in
              terminal:
            </p>
            <p className="alert alert-secondary">
              npm install react-router-dom
            </p>
            <p>
              To get rid of the annoying error that appears when you use the
              feature to add an active class to links on a "NavLink", you need
              to run the following command in terminal to install the
              "babel-react html attributes" plugin.
            </p>
            <p className="alert alert-secondary">
              npm install --save-dev babel-plugin-react-html-attrs
            </p>
            <p>
              To allow for anchor links using hashtags one needs to install
              "react-router-hash-link" using the following command in terminal:
            </p>
            <p className="alert alert-secondary">
              npm install --save react-router-hash-link
            </p>
            <p>
              Then on components using hashtag links add the following import
              statement:
            </p>
            <p className="alert alert-secondary">
              import &#123; HashLink as Link &#125; from
              'react-router-hash-link';
            </p>
            <p>Now open your App.js file and add the following:</p>
            <p className="alert alert-secondary">
              import React from "react";
              <br />
              import &#123;
              <br />
              &nbsp;&nbsp;BrowserRouter as Router,
              <br />
              &nbsp;&nbsp;Route,
              <br />
              &nbsp;&nbsp;NavLink,
              <br />
              &nbsp;&nbsp;Link,
              <br />
              &nbsp;&nbsp;Switch
              <br />
              &#125; from "react-router-dom";
              <br />
              <br />
              import Home from "./pages/home";
              <br />
              import Components from "./pages/about";
              <br />
              import Default from "./components/pages/default";
              <br />
              <br />
              import Footer from "./components/modules/footer";
              <br />
              <br />
              function App() &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;Router&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Header /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              className="container"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Switch&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route
              exact path="/home" component=&#123;Home&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route
              path="/about" component=&#123;About&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Route
              component=&#123;Default&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Switch&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Footer /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Router&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
              <br />
              <br />
              function Header() &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;nav&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul className="navbar-nav
              mr-auto"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li
              className="nav-item"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;NavLink
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className="nav-link"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;activeClassName="active"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to="/home"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/NavLink&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li
              className="nav-item"&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;NavLink
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className="nav-link"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;activeClassName="active"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;to="/about"
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/NavLink&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/li&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/nav&gt;
              <br />
              &nbsp;&nbsp;);
              <br />
              &#125;
              <br />
              <br />
              export default App;
            </p>
            <p>
              If you use any links on your pages that are not part of the main
              navigation, you will need to include the following import
              statement on the component which has the link:
            </p>
            <p className="alert alert-secondary">
              import &#123; NavLink &#125; from "react-router-dom";
            </p>
            <p>This would be an example of using a link on a component:</p>
            <p className="alert alert-secondary">
              &lt;NavLink activeClassName="active" to="/about"&gt;
              <br />
              &nbsp;&nbsp;About
              <br />
              &lt;/NavLink&gt;
            </p>
            <p>
              Adding the "activeClassName" attribute creates an automatic
              "active" class on links. One can also use &lt;Link
              activeClassName="active" to="/about" /&gt; instead of "NavLink".
              If you used "Link" instead of "NavLink" then you need to import it
              as follows:
            </p>
            <p className="alert alert-secondary">
              import &#123; Link &#125; from "react-router-dom";
            </p>
            <p>
              The "NavLink" one can use for the main navigation links and the
              "Link" option one can use for regular links.
            </p>
            <hr />
            <p>
              To find out more about all the possibile uses of the router
              module, visit the{" "}
              <a
                href="https://reacttraining.com/react-router/web/guides/quick-start"
                target="router"
              >
                React Training website
              </a>
              .
            </p>
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
              "heading" to the "ProductDisplay" component. The second route
              passes down a bit of extra markup inside a React.Fragment
              container.
            </p>
            <h4>Restricting Matching with Props</h4>
            <p>
              The default behaviour of the Route component can lead to
              over-matching, where a component matches a URL when you do not
              want it to. You might want to distinguish between the /data and
              /data/one URLs for example, so that the first URL displays a list
              of data items and the second displays the details of a specific
              product. The default matching makes this difficult because a path
              prop of /data matches any URL whose first segment is /data,
              regardless of how many segments the URL contains in total. To help
              restrict the range of URLs that a path will match, the Route
              component supports three additional props: exact, strict and
              sensitive. The most useful of these three props is exact, which
              will match any URL only if it exactly matches the path prop value
              so that a URL of data/one won't be matched by a path of /data.
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
              &nbsp;&nbsp;render=&#123; () =&gt; &lt;Data heading="Data One"
              /&gt;
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
              In the example above, this part of the Route: "(three|four)"
              directs both combinations of links to the same URL.
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
              is the default route.
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
              By not specifying a path in a Route, as seen in the above example,
              a Route component will always match the current URL and can be
              used as the default Route by the Switch component to display a
              default component. If one does not have a default route, then
              there is nothing displayed when one first goes to the link.
            </p>
            <p>
              One also has to include the Switch component in the import
              statement as follows:
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
              import &#123; BrowserRouter as Router, Link, Route, Switch,
              Redirect &#125; from "react-router-dom";
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
              React Router has a built in active route function which one can
              use to indicate which route is active. To make use of the active
              route functionality you need to change the type of link from a
              regular "Link" to a "NavLink" as follows:
            </p>
            <p className="alert alert-secondary">
              &lt;NavLink to="/javascript/suppliers"&gt;Suppliers&lt;/Link&gt;
            </p>
            <p>
              React Router automatically then adds an active class to links
              which are currently active. If you want to change the class name
              of the class that is added to active links, you can do the
              following to change the default active class from "active" to
              "live":
            </p>
            <p className="alert alert-secondary">
              &lt;NavLink to="/javascript/suppliers"&gt;Suppliers&lt;
              activeClassName="live" /Link&gt;
            </p>
            <h2>Advanced URL Routing</h2>
            <h4>Creating Router Aware Components</h4>
            <p>
              When a Route displays a component, it provides it with context
              data that describes the current route and with access to an API
              that can be used for navigation, allowing the components to be
              aware of the current location and to participate in the routing.
              When the component prop is used, the Route passes the data and API
              to the component it displays as props, named "match", "location"
              and "history". When the render prop is used, the render function
              is passed an object that has "match", "location" and "history"
              properties whose values are the same objects used as render props.
            </p>
            <p>
              To demonstate the use of routing props, a component named
              "RoutingInfo" was created which displays the "match" and
              "location" properties.
            </p>
            <h4>Using URL Parameters</h4>
            <p>
              URL parameters are specified as path prop segments that start with
              a colon like the following example:
            </p>
            <p className="alert alert-secondary">
              &lt;Route path="/javascript/info/:datatype"
              component=&#123;RoutingInfo&#125; /&gt;
            </p>
            <p>
              When the Route matches a URL, it will assign the value of the
              second segment to a URL parameter called "datatype", which will be
              passed on to the RoutingInfo component through the "match" prop's
              params property. If you click on the link in the products table
              named "Match Info", you will see the value displayed for the
              params property of the "Match Info" link.
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
              What the above code does is instruct the component to display
              either the "match" info or the "location" info depending on which
              of the two parameters was passed down via the URL. Each of the
              data switching statements also has an undefined paramater option
              that instructs the component to render the data if no parameter
              for datatype is matched. This can be used to show the information
              for both datatypes by using a link like this:
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
              The first Route specifies Links which include a "datatype"
              parameter and the second Route deals with Links which do not have
              a "datatype" parameter.
            </p>
            <h4>Accessing Routing Data in Other Components</h4>
            <p>
              A Route will add props to the components it displays but can't
              provide them directly to other components, including the
              descendants of the components it displays. To avoid prop
              threading, the React-Router package provides two different
              approaches for providing access to routing data in descendant
              components. In the example below the component accesses the
              routing data directly by using a Route in the render method. This
              example creates a custom link to replace the standard "Link" used
              by React-Router.
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
              (
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
              To use the custom link one would replace the normal "Link" call
              with the following:
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
          </div>
        </div>
      </div>
    );
  }
}

export default RouterBasics;
