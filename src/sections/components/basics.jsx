import React, { Component } from "react";
import Menu from "../menu";
import Block from "./hoc/block";
import ListsPro from "./hoc/listspro";
import ListsProState from "./hoc/listsprostate";
import ListsProContext from "./hoc/listsprocontext";

class HOCBasics extends Component {
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <h2>Higher Order Components</h2>
            <Block />
            <p>
              The photo featured above is selected randomly from an array of
              images. Every time you refresh the page, a new image is chosen
              from the array. First create a file named "block.js" and use the
              code below:
            </p>
            <p className="alert alert-secondary">
              import React from 'react';
              <br />
              import Rainbow from "./rainbow";
              <br />
              <br />
              const Block = () => &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;)
              <br />
              &#125;
              <br />
              <br />
              export default Rainbow(Block);
            </p>
            <p>This is the code for the file named "rainbow.jsx":</p>
            <p className="alert alert-secondary">
              import React from 'react';
              <br />
              <br />
              const Rainbow = (WrappedComponent) => &#123;
              <br />
              &nbsp;&nbsp;const images =
              ['lion','elephant','giraffe','hyaena','cheetah','white-rhino'];
              <br />
              &nbsp;&nbsp;const randomImage = images[Math.floor(Math.random() *
              5)];
              <br />
              &nbsp;&nbsp;const imageName = '../../../assets/images/animals/' +
              randomImage + '.jpg';
              <br />
              <br />
              &nbsp;&nbsp;return (props) => &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
              style=&#123;&#123;padding: "15px 15px 15px 15px", borderRadius: 6,
              border: "solid 1px #d8d8d8"&#125;&#125;&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;WrappedComponent
              &#123;...props&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img
              src=&#123;imageName&#125; className="img-fluid"
              alt=&#123;imageName&#125; /&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;)
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              export default Rainbow;
            </p>
            <p>To call the random photo you would then use this:</p>
            <p className="alert alert-secondary">&lt;Block /&gt;</p>
            <p>And also am import statement must be added:</p>
            <p className="alert alert-secondary">
              import Block from "../hoc/block";
            </p>
            <h2>Stateless Higher-Order Components</h2>
            <p>
              Higher-order components (HOCs) provide an alternative to
              specialized components and are useful when components require
              common code but may not render related content. HOCs are often
              used for cross-cutting concerns, a term that refers to tasks that
              span the entire application and would otherwise lead to the same
              features being implemented in several places. The most commonly
              encountered examples of cross-cutting concerns are authorization,
              logging and data retrieval. An HOC is a function that accepts a
              component and returns a new component that should be presented to
              the user only when the value of the prop named pro is true, acting
              as a simple authorization feature. To display the component, the
              render method uses the compoment received as the function argument
              and passes on all of its props, except the one named pro.
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This
              is a Pro Feature
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
              list=&#123;this.state.list&#125;
              pro=&#123;this.state.proMode&#125; /&gt;
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
      </div>
    );
  }
}

export default HOCBasics;
