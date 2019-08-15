import React, { Component } from "react";
import Menu from "../menu";
import ConsumeContext from "./consumecontext";

class Context extends Component {
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
            <h1 className="mt-3">Using Contexts for Global Data</h1>
            <p>
              The management of props can become difficult, regardless of how
              you choose to compose your application. As the complexity of the
              application increases, so does the number of components that need
              to cooperate. As the hierachy of components grows, the state data
              gets lifted up higher in the application, further away from where
              the data is used, with the result that every component has to pass
              on props that it doesn't use directly but that it's descendants
              rely on. To help avoid this problem, React provides the context
              feauture, which allows state data to be passed from where it is
              defined to where it is needed without having to be relayed through
              the intermediate components.
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
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 3, action: "Mow the lawn",
              done: false &#125;,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 4, action: "Wash the car",
              done: false &#125;
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
          </div>
        </div>
      </div>
    );
  }
}

export default Context;
