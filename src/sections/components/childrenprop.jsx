import React, { Component } from "react";
import Menu from "../menu";
import MessageSimple from "./messagesimple";
import MessageFancy from "./messagefancy";
import Lists from "./lists";

class ChildrenProp extends Component {
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
            <h1>Specialized Components</h1>
            <h2>Using the Children Prop</h2>
            <h4>A Simple Application</h4>
            <MessageSimple
              message={`Counter: ${this.state.counter}`}
              callback={this.incrementCounter}
              text="Increment Counter"
            />
            <p>
              Above is a good example of how components interact. The main
              component displays the MessageSimple and ActionButton components
              and configures them so that clicking the button will update the
              counter state data, which has been passed up as a prop to the
              MessageSimple component. The basic relationship that is used
              underpins the React development process: parent components
              configure children with data props and receive notifications
              through function props, which leads to state data changes and
              triggers the update process.
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
              components as the previous example, but with one minor alteration
              to the MessageSimple component. On the MessageSimple component
              replace the &lt;React.Fragment&gt; and the &lt;/React.Fragment&gt;
              tags with &lt;ThemeSelector&gt; and &lt;/ThemeSelector&gt;. You
              will also need to add the following import statement to the
              MessageSimple component:
            </p>
            <p className="alert alert-secondary">
              import &#123; ThemeSelector &#125; from "./themeselector";
            </p>
            <p>
              A new component also needs to be created called "ThemeSelector"
              with the following code:
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
              ActionButton component and a paragraph Element. These three
              elements are wrapped inside the component call for the
              ThemeSelector component and this makes them children of the
              ThemeSelector component. To output the three child components
              inside the ThemeSelector component one would use the following
              code:
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
              depend on the nested components to create a more complex
              component.
            </p>
            <p>
              The ThemeSelector component uses a special mapping function to
              clone and map the three child elements with the following code:
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
              Then to output the three cloned children the ThemeSelector
              component uses this code:
            </p>
            <p className="alert alert-secondary">
              &lt;div className="bg-white
              p-2"&gt;&#123;modChildren&#125;&lt;/div&gt;
            </p>
            <p>
              What this allows the ThemeSelector component to do, is place the
              three cloned elements inside the component's code in a specific
              location. The other added elements, namely the "Reverse" button
              and the theme switching selector. What this demonstrates is how
              one can combine components into a more complex component using the
              children props feature of React.
            </p>
            <h2>Specialized Components</h2>
            <p>
              Some components provide specialized versions of the features
              provided by another, more general, component. React relies on the
              specialized component rendering the more general component and
              managing the behaviour via props. In the example below there are
              two list of names, the one on the left is a simple component which
              outputs the list of names, and on the right there is a more
              specialized version of the same list which one can sort
              alphabetically by clicking on the "Sort" button. Both of the lists
              are rendered using the same component, but the one which is
              sortable is customized.
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
              option to be able to sort the list alphabetically. This component
              is named SortedList and uses the following code:
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
              &nbsp;&nbsp;&nbsp;&nbsp;this.setState(&#123; sort:
              !this.state.sort &#125;);
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
          </div>
        </div>
      </div>
    );
  }
}

export default ChildrenProp;
