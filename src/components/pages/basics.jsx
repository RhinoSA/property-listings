import React, { Component, useState, useEffect } from "react";
import Title from "../modules/title";
import ListGroupTabs from "../modules/listgrouptabs";
import TempCalculator from "../examples/tempcalculator";
import { FaAddressBook, FaCamera } from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import MappingParts from "../examples/mappingparts";
import Jokes from "../examples/jokes";
import Events from "./events";
import StateExample from "./stateexample";
import Users from "../users/users";
import Block from "../hoc/block";
import Photo from "../../images/lion.jpg";

import ApidataNew from "../examples/apidatanew";

import $ from "jquery";

import PropTypes from 'prop-types';

const listUnsorted = [
  { id: 1, title: "Peter", details: "These are the details for Peter." },
  { id: 2, title: "John", details: "These are the details for Peter." },
  { id: 3, title: "Andrew", details: "These are the details for Peter." }
];

function HooksExampleTwo() {
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
    document.getElementById("demo").innerHTML = `${countTwo} X 2 = ${countTwo * 2}`;
  });

  return (
    <div>
      <p className="alert alert-warning">You clicked {countTwo} times.</p>
      <p>
        <button className="btn btn-secondary" onClick={() => setCountTwo(countTwo + 1)}>
          Click Me
        </button>
        <button className={countTwo === 0 ? "btn btn-secondary ml-2 disabled" : "btn btn-secondary ml-2"} onClick={() => setCountTwo(0)}>
          Reset
        </button>
      </p>
    </div>
  );
}

function HooksExample() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="alert alert-warning">You clicked {count} times.</p>
      <p>
        <button className="btn btn-secondary" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
        <button className={count === 0 ? "btn btn-secondary ml-2 disabled" : "btn btn-secondary ml-2"} onClick={() => setCount(0)}>
          Reset
        </button>
      </p>
    </div>
  );
}

const list = listUnsorted.sort((a, b) => (a.title > b.title ? 1 : -1));

function List() {
  if (!list) {
    return null;
  }

  if (!list.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return (
      <div list={list}>
        {list.map(rows => (
          <div key={rows.id}>
            {rows.title} - ({rows.id})
          </div>
        ))}
      </div>
    );
  }
}

function Person(props) {
  return (
    <div className="card mt-3">
      <p className="card-body" style={{paddingBottom:0}}>
        Name: {props.name}
        <br />
        Age: {props.age}
        {props.children === "" ? "" : props.children}
      </p>
    </div>
  );
}

const desc = 'This is the description...';

class BlogPostExcerpt extends Component {
  render() {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h4 className="card-title">
            {this.props.title}
          </h4>
          <div className="card-text">
            {this.props.description}
          </div>
        </div>
      </div>
    )
  }
}

BlogPostExcerpt.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

BlogPostExcerpt.defaultProps = {
  title: 'Anonymous',
  description: ''
}




class Basics extends Component {

  constructor(props) {
    super(props);

    this.state = {
      names: [{ objectID: 1, name: "Andrew" }, { objectID: 2, name: "Peter" }],
      searchTerm: ""
    };
  }

  componentDidMount() {
    // STICKY SCRIPT BELOW HERE
    // =========================
    var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
      var stickyHeight = sticky.outerHeight();
      var stickyTop = stickyWrapper.offset().top;
      if (scrollElement.scrollTop() >= stickyTop) {
        stickyWrapper.height(stickyHeight);
        sticky.addClass("is-sticky container");
      } else {
        sticky.removeClass("is-sticky");
        stickyWrapper.height("auto");
      }
    };
    $('[data-toggle="sticky-onscroll"]').each(function() {
      var sticky = $(this);
      var stickyWrapper = $("<div>").addClass("sticky-wrapper");
      sticky.before(stickyWrapper);
      sticky.addClass("stickytwo");
      $(window).on("scroll.sticky-onscroll resize.sticky-onscroll", function() {
        stickyToggle(sticky, stickyWrapper, $(this));
      });
      stickyToggle(sticky, stickyWrapper, $(window));
    });
    }
    render() {
    return (
      <div className="container" style={{ marginTop: 0 }}>
        <div className="row" style={{position: "relative"}}>
          <div className="col-md-3 floating-menu">
            <div className="wrapper" data-toggle="sticky-onscroll">
            <Title title="Overview" />
            <ol>
              <li><Link to="#spy-01">Creating an App</Link>
              </li>
              <li><Link to="#spy-02">Components</Link>
              </li>
              <li>
                <Link to="#spy-03">Lists &amp; Keys</Link>
              </li>
              <li>
                <Link to="#spy-04">Conditional Rendering</Link>
              </li>
              <li>
                <Link to="#spy-05">React Router</Link>
              </li>
              <li>
                <Link to="#spy-06">Handling Events</Link>
              </li>
              <li>
                <Link to="#spy-07">Props</Link>
              </li>
              <li>
                <Link to="#spy-08">Hooks</Link>
              </li>
              <li>
                <Link to="#spy-09">State</Link>
              </li>
              <li>
                <Link to="#spy-10">State &amp; Lifecycle</Link>
              </li>
              <li>
                <Link to="#spy-11">Forms</Link>
              </li>
              <li>
                <Link to="#spy-12">React Icons</Link>
              </li>
              <li>
                <Link to="#spy-13">Visual Studio Code</Link>
              </li>
            </ol>
            </div>
          </div>

          <div className="col-md-9">
            <span id="spy-01" className="anchor" />
            <Title title="Creating an App" />
            <h2>Higher Order Components</h2>
            <Block />
            <p>The photo featured above is selected randomly from  an array of images. Every time you refresh the page, a new image is chosen from the array. First create a file named "block.js" and use the code below:</p>
            <p className="alert alert-secondary">import React from 'react';<br />
import Rainbow from "./rainbow";<br /><br />
const Block = () => &#123;<br />
&nbsp;&nbsp;return (<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;)<br />
&#125;<br /><br />
export default Rainbow(Block);</p>
<p>This is the code for the file named "rainbow.jsx":</p>
<p className="alert alert-secondary">import React from 'react';<br /><br />
const Rainbow = (WrappedComponent) => &#123;<br />
&nbsp;&nbsp;const images = ['lion','elephant','giraffe','hyaena','cheetah','white-rhino'];<br />
&nbsp;&nbsp;const randomImage = images[Math.floor(Math.random() * 5)];<br />
&nbsp;&nbsp;const imageName = '../../../assets/images/animals/' + randomImage + '.jpg';<br /><br />
&nbsp;&nbsp;return (props) => &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div style=&#123;&#123;padding: "15px 15px 15px 15px", borderRadius: 6, border: "solid 1px #d8d8d8"&#125;&#125;&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;WrappedComponent &#123;...props&#125; /&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;img src=&#123;imageName&#125; className="img-fluid" alt=&#123;imageName&#125; /&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;)<br />
&nbsp;&nbsp;&#125;<br />
&#125;<br /><br />
export default Rainbow;</p>
<p>To call the random photo you would then use this:</p>
<p className="alert alert-secondary">&lt;Block /&gt;</p>
<p>And also am import statement must be added:</p>
<p className="alert alert-secondary">import Block from "../hoc/block";</p>


            <Users />
            <h2>Loading React Directly</h2>
            <p>
              If you want to load React directly to your website you can use the
              following script calls:
            </p>
            <p className="alert alert-secondary">
              &lt;html&gt;
              <br />
              &lt;body&gt;
              <br />
              &lt;script
              src="https:///cdnjs.cloudflare.com/ajax/libs/react/16.7.0-alpha.2/umd/react.development.js"
              crossorigin&gt;&lt;/script&gt;
              <br />
              &lt;script
              src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0-alpha.2/umd/react-dom.production.min.js"
              crossorigin&gt;&lt;/script&gt;
              <br />
              &lt;script
              src="https://unpkg.com/babel-standalone@6/babel.min.js"&gt;&lt;/script&gt;
              <br />
              &lt;script src="app.js" type="text/babel"&gt;&lt;/script&gt;
              <br />
              &lt;/body&gt;
              <br />
              &lt;/body&gt;
            </p>
            <h2>Create a Standalone React App</h2>
            <p>
              To create a standalone React app with all the modules installed
              and a basic app setup already created, run the following commands
              in terminal:
            </p>
            <p className="alert alert-secondary">
              npx create-react-app my-app
              <br />
              cd my-app
              <br />
              npm start
            </p>
            <h2>Uploading to GitHub</h2>
            <p>To upload the app to GitHub use the following commands in terminal:</p>
            <p className="alert alert-secondary">npm run build<br />git add .<br />git commit -m "Text to identify commit..."<br />git push -u origin master</p>
            <span id="spy-02" className="anchor" />
            <h1>Components</h1>
            <p>
              There are two types of components, functional components and class
              components.
            </p>
            <h2>Creating a Functional Component</h2>
            <p>Below is an example of a simple functional component:</p>
            <p className="alert alert-secondary">
              import React from 'react';<br /><br />
              const BlogPostExcerpt = () => &#123;
              <br />
              &nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Title&lt;/h1&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Description&lt;/p&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
              <br />
              &nbsp;&nbsp;)
              <br />
              &#125;
              <br />
              <br />
              export default BlogPostExcerpt;
            </p>
            <h2>Creating a Class Component</h2>
            <p>Below is an example of a simple class component:</p>
            <p className="alert alert-secondary">
              import React, &#123; Component &#125; from 'react';
              <br />
              <br />
              class BlogPostExcerpt extends Component &#123;
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Title&lt;/h1&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;Description&lt;/p&gt;
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
              export default BlogPostExcerpt;
            </p>
            <h2>Importing Images</h2>
            <div style={{margin: "15px 0px 15px 0px", padding: "15px 15px 15px 15px", borderRadius: 6, border: "solid 1px #d8d8d8"}}>
              <img className="img-fluid" src={Photo} alt="banner" />
            </div>
            <p>To load images into your component, you need to use the following import statement:</p>
            <p className="alert alert-secondary">import Photo from "../../images/lion.jpg";</p>
            <p>To display the image you will use the following:</p>
            <p className="alert alert-secondary">&lt;img className="img-fluid" src=&#123;Photo&#125; alt="banner" /&gt;</p>
            <span id="spy-03" className="anchor" />
            <h1>Lists &amp; Keys</h1>
            <h2>Mapping an Array</h2>
            <p>The example below shows how to map an array in React:</p>
            <p className="alert alert-secondary">
              const elements = ["one","two","three"];
              <br />
              <br />
              return &#123;
              <br />
              &nbsp;&nbsp;&lt;ul&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#123;elements.map((value, index) =>
              &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return &lt;li
              key=&#123;index&#125;&gt;&#123;value&#125;&lt;/li&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#125;)&#125;
              <br />
              &nbsp;&nbsp;&lt;/ul&gt;
              <br />)
            </p>
            <h2>Sorting Arrays &amp; Conditional Rendering</h2>
            <p>
            Below is a list which is generated from an array. If the array is
            empty then it will display a paragraph of text saying there is no
            list to display. The list is also sorted alphabetically using the
            JavaScript sort() function.
            </p>
            <p className="alert alert-secondary">
              const listUnsorted = [<br />
              &nbsp;&nbsp;&#123; id: 1, title: "Peter" &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 2, title: "John" &#125;,
              <br />
              &nbsp;&nbsp;&#123; id: 3, title: "Andrew" &#125;
              <br />
              ];
              <br />
              <br />
              const list = listUnsorted.sort((a, b) => (a.title > b.title ? 1 :
            -1));
            <br />
            <br />
            function List() &#123;
            <br />
            &nbsp;&nbsp;if (!list) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return null;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;if (!list.length) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return &lt;p&gt;Sorry, the list is
            empty.&lt;/p&gt;;
            <br />
            &nbsp;&nbsp;&#125; else &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            list=&#123;list&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;list.map(rows
            => (
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            key=&#123;rows.id&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;rows.title&#125;
            - (&#123;rows.id&#125;)
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
          <p>To display the list you will use the following function call:</p>
          <p className="alert alert-secondary">&#123;List()&#125;</p>
          <h4>List of Names</h4>
          <div className="mb-2">{List()}</div>

          <h2>Mapping Components &amp; Conditional Rendering</h2>
          <p>
            This example demonstrates how one can map an array and output the results in a component. Conditional rendering techniques are used to also control the output of the data.
          </p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import ListItem from "./listitem";
            <br />
            <br />
            class MappingParts extends Component &#123;
            <br />
            &nbsp;&nbsp;state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;listUnsorted: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 1, title: "Peter", job: "Plumber"
            &#125;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 2, title: "John", job: "Doctor"
            &#125;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123; id: 3, title: "Andrew", job: ""
            &#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;]
            <br />
            &nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;let list = this.state.listUnsorted.sort((a,
            b) =>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.title > b.title ? 1 : -1
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;function sortList() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            list=&#123;list&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;list.map(rows
            => (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListItem
            key=&#123;rows.id&#125; title=&#123;rows.title&#125;
            id=&#123;rows.id&#125; job=&#123;rows.job&#125; /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4&gt;List of
            Names&lt;/h4&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;sortList()&#125;
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
            export default MappingParts;
          </p>
          <p>The component that is mapped:</p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            <br />
            class ListItem extends Component &#123;
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.title&#125; - (&#123;this.props.id&#125;) &#123;this.props.job === "" ? null : " - " + this.props.job&#125;
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
            export default ListItem;
          </p>
          <div className="mb-2">
          <MappingParts />
          </div>
          <span id="spy-04" className="anchor" />
          <h1>Conditional Rendering</h1>
          <p>
            This is an example of repeating elements using a functional
            component. There is also javascript which detects if there is no
            question, but simply a joke without a question, which then renders
            that instance of the joke component differently to the others.
          </p>
          <p>The code for the page which outputs the exercise:</p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            import Joke from "./joke";
            <br />
            <br />
            class Jokes extends Component &#123;
            <br />
            &nbsp;&nbsp;state = &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;listJokesUnsorted: [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 1,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;question:
            "This is the first joke which asks a question.",
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer:
            "This is the answer to the first question."
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 2,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;question:
            "",
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This
            is the second joke without a question and renders differently to the
            other jokes."
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id: 3,
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;question:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This
            is the second joke without a question and renders differently to the
            other jokes.",
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;answer:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"This
            is the second joke without a question and renders differently to the
            other jokes."
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;render() &#123;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;let jokes =
            this.state.listJokesUnsorted;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;function sorttheList() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
            jokes=&#123;jokes&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;jokes.map(rows
            => (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Joke
            key=&#123;rows.id&#125; question=&#123;rows.question&#125;
            answer=&#123;rows.answer&#125; /&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;);
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return
            &lt;React.Fragment&gt;&#123;sorttheList()&#125;&lt;/React.Fragment&gt;;
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            &#125;
            <br />
            <br />
            export default Jokes;
          </p>

          <p>The file for the repeating component:</p>
          <p className="alert alert-secondary">
            import React, &#123; Component &#125; from "react";
            <br />
            <br />
            class Joke extends Component &#123;
            <br />
            &nbsp;&nbsp;render() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p style=&#123;
            display: this.props.question ? "block" : "none" &#125;&#125;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b&gt;Question:&lt;/b&gt;
            &#123;this.props.question&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style=&#123;&#123;
            display: this.props.question ? "inline-block" : "none" &#125;&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;b&gt;Answer:&lt;/b&gt;&nbsp;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/span&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.answer&#125;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;hr /&gt;
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
            export default Joke;
          </p>

          <h4>A List of Jokes</h4>
          <hr />
          <Jokes />

            <span id="spy-05" className="anchor" />
            <h1>React Router</h1>
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
                "react-router-hash-link" using the following command in
                terminal:
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
                If you used "Link" instead of "NavLink" then you need to import
                it as follows:
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
            <span id="spy-06" className="anchor" />
            <h1>Handling Events</h1>
            <h2>A Simple onClick Event</h2>
        <p>The example below demonstrates how to add an onClick event to an element.</p>
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
            onClick={(e) => alert("Button clicked!")}
          >
            Click Me
          </button>
        </p>
            <Events />

            <span id="spy-07" className="anchor" />
            <h1>Props</h1>
            <p>Below is a function which one could use to generate a component using prop values passed down via a component call:</p>
            <p className="alert alert-secondary">function Person(props) &#123;<br />
  &nbsp;&nbsp;return (<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card mt-3"&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="card-body" style=&#123;&#123;paddingBottom:0&#125;&#125;&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name:&nbsp;&#123;props.name&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;br /&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age:&nbsp;&#123;props.age&#125;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;props.children === "" ? "" : props.children&#125;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br />
    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
  &nbsp;&nbsp;);<br />
&#125;</p>
<p>To use the above function, one would do the following:</p>
<p className="alert alert-secondary">&lt;Person name="Andrew" age="9"&gt;<br />
          &nbsp;&nbsp;&lt;br /&gt;This is inside the tag...<br />
        &lt;/Person&gt;<br />
        &lt;Person name="John" age="23" /&gt;</p>
        <h4>The Output:</h4>
        <Person name="Andrew" age="9">
<br />This is inside the tag...
</Person>
<Person name="John" age="23" />
<p className="mt-3">From the above output you can see conditional rendering was used to output a result based on whether there was information inside the component call. This nested information inside a component call is accessed by using &#123;props.children&#125;. One could include further components inside the component declaration to create nested components which generate an output using the nested components.</p>

<h2>Using Prop Types</h2>
            <p>The example below shows how one can use "propTypes" to test the prop values used.</p>
            <p className="alert alert-secondary">
            import PropTypes from 'prop-types';<br /><br />
              const desc = 'This is the description...';<br /><br />
class BlogPostExcerpt extends Component &#123;<br />
&nbsp;&nbsp;render() &#123;<br />
&nbsp;&nbsp;&nbsp;&nbsp;return (<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card mb-3"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card-body"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h4 className="card-title"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.title&#125;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/h4&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="card-text"&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.description&#125;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;)<br />
&nbsp;&nbsp;&#125;<br />
&#125;<br /><br />
BlogPostExcerpt.propTypes = &#123;<br />
&nbsp;&nbsp;title: PropTypes.string,<br />
&nbsp;&nbsp;description: PropTypes.string<br />
&#125;<br /><br />
BlogPostExcerpt.defaultProps = &#123;<br />
&nbsp;&nbsp;title: 'Anonymous',<br />
&nbsp;&nbsp;description: ''<br />
&#125;</p>
            

<p>To pass down the prop values, one would do the following:</p>
            <p className="alert alert-secondary">
              &lt;BlogPostExcerpt title="A Blog Post"
              description=&#123;desc&#125; /&gt;
            </p>
            <h4>The Output:</h4>
            <BlogPostExcerpt title="A Blog Post" description={desc} />
            <p>If one used the following component call, omitting the "title" prop, then the default title declared in the "defaultProps" woulld be used.</p>
            <p className="alert alert-secondary">
              &lt;BlogPostExcerpt
              description=&#123;desc&#125; /&gt;
            </p>
            <p>This would be the output:</p>
            <BlogPostExcerpt description={desc} />
            <p>If one used the wrong type of prop type, for example an object instead of a string for the "title", then one would get an error message displayed in the console.</p>
            <p className="alert alert-secondary">
              &lt;BlogPostExcerpt
              title=&#123;4&#125; description=&#123;desc&#125; /&gt;
            </p>
            <h4>Available PropTypes:</h4>
            <ol>
              <li>PropTypes.array</li>
              <li>PropTypes.bool</li>
              <li>PropTypes.func</li>
              <li>PropTypes.number</li>
              <li>PropTypes.object</li>
              <li>PropTypes.symbol</li>
            </ol>
            
            <span id="spy-08" className="anchor" />
            <h1>Hooks</h1>
            <h2>Using the useState Hook</h2>
            <p>Below is a basic example of how one can use hooks in an app. Hooks allow one to alter the value of a constant inside a function.</p>
            <p className="alert alert-secondary">import React, &#123; Component, useState &#125; from "react";<br /><br />
            function HooksExample() &#123;<br />
  &nbsp;&nbsp;const [count, setCount] = useState(0);<br /><br />
  &nbsp;&nbsp;return (<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="alert alert-warning">You clicked &#123;count&#125; times.&lt;/p&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button className="btn btn-secondary" onClick=&#123;&#40;&#41; => setCount(count + 1)&#125;&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Me<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button className=&#123;count === 0 ? "btn btn-secondary ml-2 disabled" : "btn btn-secondary ml-2"&#125; onClick=&#123;() => setCount(0)&#125;&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reset<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
  &nbsp;&nbsp;);<br />
&#125;</p>
            <HooksExample />

            <h2>Using the useEffect Hook</h2>
            <p>This example makes use of the useEffect hook.</p>
            <p className="alert alert-secondary">import React, &#123; Component, useState, useEffect &#125; from "react";<br /><br />
            function HooksExampleTwo&#40;&#41; &#123;<br />
            &nbsp;&nbsp;const &#91;countTwo, setCountTwo&#93; = useState&#40;0&#41;;<br /><br />
  &nbsp;&nbsp;useEffect&#40;&#40;&#41; =&gt; &#123;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;document.getElementById&#40;"demo"&#41;.innerHTML = `{"$"}&#123;countTwo&#125; X 2 = {"$"}&#123;countTwo &#42; 2&#125;`;<br />
  &nbsp;&nbsp;&#125;&#41;;<br /><br />
  &nbsp;&nbsp;return &#40;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p className="alert alert-warning"&gt;You clicked &#123;countTwo&#125; times.&lt;/p&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button className="btn btn-secondary" onClick=&#123;&#40;&#41; =&gt; setCountTwo&#40;countTwo + 1&#41;&#125;&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Click Me<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;button className=&#123;countTwo === 0 ? "btn btn-secondary ml-2 disabled" : "btn btn-secondary ml-2"&#125; onClick=&#123;&#40;&#41; => setCountTwo&#40;0&#41;&#125;&gt;<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reset<br />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br />
&nbsp;&nbsp;&#41;;<br />
&#125;</p>
            <HooksExampleTwo />
            <h4 id="demo">Demo</h4>

            <span id="spy-09" className="anchor" />
            <h1>State</h1>
            <StateExample />

            <span id="spy-10" className="anchor" />
            <h1>State &amp; Lifecycle</h1>
            <p>This section deals with the lifecycle methods we can use to work with the state.</p>

            <span id="spy-11" className="anchor" />
            <h1>Forms</h1>
            <p>This is the section about forms and how to use them in react.</p>

            <span id="spy-12" className="anchor" />
            <h1>React Icons</h1>
            <p>Installing React icons using terminal:</p>
            <p className="alert alert-secondary">
              npm install react-icons --save
            </p>
            <p>
              View the{" "}
              <a
                href="https://www.npmjs.com/package/react-icons"
                target="react-icons"
              >
                documentation
              </a>
              &nbsp;about using React icons. To view a list of the available
              Font Awesome icons,{" "}
              <a href="https://fontawesome.com/icons" target="font-awesome">
                click here
              </a>
              .
            </p>
            <p className="alert alert-secondary">
              import &#123; FaBeer &#125; from 'react-icons/fa';
              <br />
              <br />
              class Question extends React.Component &#123;
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return &lt;h3&gt; Lets go for a &lt;FaBeer
              /&gt;? &lt;/h3&gt;
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
            </p>
            <h4>Examples:</h4>
            <p>Below are two examples of using Font Awesome icons:</p>
            <p><FaAddressBook style={{ fontSize: 40, color: "#9b9b9b" }} /> -
            FaAddressBook &nbsp;&nbsp;
            <FaCamera style={{ fontSize: 40, color: "#9b9b9b" }} /> - FaCamera</p>

            <span id="spy-13" className="anchor" />
            <h1>Shortcuts for Visual Studio Code</h1>
            <h4>doc - Create a Document</h4>
            <p className="alert alert-secondary">
              &lt;html lang="en"&gt;
              <br />
              &nbsp;&nbsp;&lt;head&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta charset="UTF-8"/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta name="viewport"
              content="width=device-width, initial-scale=1.0"/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;meta http-equiv="X-UA-Compatible"
              content="ie=edge"/&gt;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Document&lt;/title&gt;
              <br />
              &nbsp;&nbsp;&lt;/head&gt;
              <br />
              &nbsp;&nbsp;&lt;body&gt;
              <br />
              <br />
              &nbsp;&nbsp;&lt;/body&gt;
              <br />
              &lt;/html&gt;
            </p>
            <h4>imr - Import React</h4>
            <p className="alert alert-secondary">import React from 'react';</p>
            <h4>imrc - Import React &amp; Component</h4>
            <p className="alert alert-secondary">
              import React, &#123;Component&#125; from 'react';
            </p>
            <h4>cc - Make a Class Component &amp; export</h4>
            <p className="alert alert-secondary">
              class | extends Component &#123;
              <br />
              &nbsp;&nbsp;state = &#123; | &#125;,
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return ( | );
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              export default |;
            </p>
            <h4>sfc - Make a stateless function component</h4>
            <p className="alert alert-secondary">
              const | = props => &#123;
              <br />
              return ( | );
              <br />
              &#125;
              <br />
              export default |;
            </p>
            <h4>ccc - Class Component with Constructor</h4>
            <p className="alert alert-secondary">
              class | extends Component &#123;
              <br />
              <br />
              &nbsp;&nbsp;constructor(props) &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;super(props);
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;this.state = &#123; &#125;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&#123;
              <br />
              &nbsp;&nbsp;render() &#123;
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;return ( );
              <br />
              &nbsp;&nbsp;&#125;
              <br />
              &#125;
              <br />
              <br />
              export default |;
            </p>
            
            <h2>Temperature Calculator</h2>
            <TempCalculator />
            <hr />
            {/* Tabbed Content Starts Here */}
            <div className="row">
              <div className="col-md-12 mb-2">
                <ListGroupTabs />
              </div>
            </div>
            {/* Tabbed Content Ends Here */}

            <h2>Animal List</h2>
          <p>
            The example below outputs repeating components and also adds the
            prices of all the products listed and displays the total cost of the
            items. It also shows the total number of items in the list of
            products. The items in the array of products are also sorted
            alphabetically using the array sort method.
          </p>
          <h4>Shopping Cart</h4>
          <ApidataNew />

          </div>
        </div>
      </div>
    );
  }
}

export default Basics;
