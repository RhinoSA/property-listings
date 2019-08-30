import React from "react";
// Link
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <React.Fragment>
      <h1>Menu</h1>
      <ol>
        <li>
          JavaScript Basics
          <ol>
            <li>
              <Link to="/home/functions">Functions</Link>
            </li>
            <li>
              <Link to="/home/strings">Strings</Link>
            </li>
            <li>
              <Link to="/home/arrays">Arrays</Link>
            </li>
            <li>
              <Link to="/home/objects">Objects &amp; Classes</Link>
            </li>
            <li>
              <Link to="/home/operators">Operators</Link>
            </li>
            <li>
              <Link to="/home/conditionals">Conditionals</Link>
            </li>
            <li>
              <Link to="/home/modules">Modules</Link>
            </li>
            <li>
              <Link to="/home/promises">Promises</Link>
            </li>
          </ol>
        </li>
        <li>
          Components
          <ol>
            <li>
              <Link to="/home/components">Components</Link>
            </li>
            <li>
              <Link to="/home/hoc-basics">Higher-Order Components</Link>
            </li>
            <li>
              <Link to="/home/children-prop">Specialized Components</Link>
            </li>
          </ol>
        </li>
        <li>
          Lists &amp; Keys
          <ol>
            <li>
              <Link to="/home/lists">Creating Lists</Link>
            </li>
            <li>
              <Link to="/home/reordering">Reordering Lists</Link>
            </li>
            <li>
              <Link to="/home/filtering">Filtering Lists</Link>
            </li>
          </ol>
        </li>
        <li>
          <Link to="/home/conditional-rendering">Conditional Rendering</Link>
        </li>
        <li>
          State Data &amp; Props
          <ol>
            <li>
              <Link to="/home/props-basics">Basics</Link>
            </li>
            <li>
              <Link to="/home/defaultprops">Default Props</Link>
            </li>
            <li>
              <Link to="/home/proptypes">Prop Types</Link>
            </li>
            <li>
              <Link to="/home/state-from-props">Setting State from Props</Link>
            </li>
          </ol>
        </li>
        <li>
          <Link to="/home/functionprops">Function Props</Link>
        </li>
        <li>
          <Link to="/home/hooks">Hooks</Link>
        </li>
        <li>
          Handling Events
          <ol>
            <li>
              <Link to="/home/events">Basics</Link>
            </li>
            <li>
              <Link to="/home/event-propagation">Event Propagation</Link>
            </li>
          </ol>
        </li>
        <li>
          React Router
          <ol>
            <li>
              <Link to="/home/router">Routing Basics</Link>
            </li>
            <li>Matching Routes</li>
            <li>Defining a Default Route</li>
            <li>Redirection</li>
            <li>Indicating the Active Route</li>
          </ol>
        </li>
        <li>
          <Link to="/home/lifecycle">Reconciliation &amp; Lifecycles</Link>
        </li>
        <li>
          <Link to="/home/context">Context</Link>
        </li>
        <li>
          React Extras
          <ol>
            <li><Link to="/home/snap">Snap SVG</Link></li>
            <li>
              <Link to="/home/react-icons">React Icons</Link>
            </li>
            <li>
              <Link to="/home/react-reveal">React Reveal</Link>
            </li>
            <li>
              <Link to="/home/unique-id">Unique ID</Link>
            </li>
            <li>
              <Link to="/home/react-transition-group">
                React Transition Group
              </Link>
            </li>
            <li>
              <Link to="/home/css-switch">CSS Switch</Link>
            </li>
            <li>
              <Link to="/home/animate-on-scroll">Animate on Scroll</Link>
            </li>
            <li>
              <Link to="/home/react-motion">React Motion</Link>
            </li>
            <li>
              <Link to="/home/lightbox">Lightbox</Link>
            </li>
            <li>
              <Link to="/home/smoothscroll">Smooth Scroll</Link>
            </li>
            <li>
              <Link to="/home/spring">Spring</Link>
            </li>
            <li>
              <Link to="/home/react-animate">React Animate</Link>
            </li>
          </ol>
        </li>
      </ol>
    </React.Fragment>
  );
}
