import React, { Component } from "react";

const linkList = [
  {
    id: 1,
    title: "React JS -  Events",
    target: "react-events",
    link: "https://reactjs.org/docs/events.html#supported-events",
    description: "The React website documentation on how to use events."
  },
  {
    id: 2,
    title: "Bootstrap Components",
    target: "linkBootstrap",
    link: "https://getbootstrap.com/docs/4.0/components",
    description:
      "Bootstrap is a complete component based system which has all the basic elements which one would need to build responsive websites."
  },
  {
    id: 3,
    title: "React JS Examples",
    target: "linkReactExamples",
    link: "https://reactjsexample.com",
    description: ""
  },
  {
    id: 4,
    title: "React JS - Context",
    target: "linkContext",
    link: "https://reactjs.org/docs/context.html",
    description: ""
  },
  {
    id: 5,
    title: "React JS - Error Boundaries",
    target: "linkErrors",
    link: "https://reactjs.org/docs/error-boundaries.html",
    description: ""
  },
  {
    id: 6,
    title: "React JS - Render Props",
    target: "linkRenderProps",
    link: "https://reactjs.org/docs/render-props.html",
    description: ""
  },
  {
    id: 7,
    title: "React JS - Higher-Order Components",
    target: "linkHigherOrder",
    link: "https://reactjs.org/docs/higher-order-components.html",
    description: ""
  },
  {
    id: 8,
    title: "React JS - Hooks",
    target: "linkHooks",
    link: "https://reactjs.org/docs/hooks-intro.html",
    description: ""
  },
  {
    id: 9,
    title: "React Training - Router",
    target: "linkReactRouter",
    link: "https://reacttraining.com/react-router/core/guides/philosophy",
    description: ""
  },
  {
    id: 10,
    title: "Shopping Cart Tutorial",
    target: "linkShopTutorial",
    link:
      "https://youtu.be/wPQ1-33teR4?list=PLWKjhJtqVAbkArDMazoARtNz1aMwNWmvC",
    description:
      "Tutorial explaining how to build an e-commerce site from scratch using React and Netlify. The demo shop on this website was created using this tutorial."
  },
  {
    id: 11,
    title: "Code Camp Tutorials",
    target: "linkCodeCamp",
    link: "https://learn.freecodecamp.org",
    description:
      "Code Camp has a long list of exercises which test to see if you know all the relevant skills to be a web developer."
  },
  {
    id: 12,
    title: "Redux",
    target: "linkRedux",
    link: "https://redux.js.org",
    description: ""
  },
  {
    id: 13,
    title: "Material UI - React Components",
    target: "linkRlinkMaterialUidux",
    link: "https://material-ui.com",
    description:
      "A comprehensive system which has pre-built components built which can be used with React for faster and easier web development."
  },
  {
    id: 14,
    title: "Robin Wieruch Blog - Managing the React State with Arrays",
    target: "linkArrays",
    link: "https://www.robinwieruch.de/react-state-array-add-update-remove",
    description: ""
  },
  {
    id: 15,
    title: "Robin Wieruch Blog - React Articles",
    target: "linkRobin",
    link: "https://www.robinwieruch.de/categories/react",
    description: ""
  },
  {
    id: 16,
    title: "Robin Wieruch Blog - Session Storage & Local Storage",
    target: "linkRobinSessions",
    link: "https://www.robinwieruch.de/local-storage-react",
    description: ""
  },
  {
    id: 17,
    title: "Robin Wieruch Blog - React Conditional Rendering Techniques",
    target: "linkRobinConditional",
    link: "https://www.robinwieruch.de/conditional-rendering-react",
    description: ""
  },
  {
    id: 18,
    title: "Robin Wieruch Blog - How to Use Web Components in React",
    target: "linkRobinComponents",
    link: "https://www.robinwieruch.de/react-web-components",
    description: ""
  }
];

const listOfLinks = linkList.sort((a, b) => (a.title > b.title ? 1 : -1));

function List() {
  if (!listOfLinks) {
    return null;
  }

  if (!listOfLinks.length) {
    return <p>Sorry, the list is empty.</p>;
  } else {
    return (
      <ul className="list-group" list={listOfLinks}>
        {listOfLinks.map(rows => (
          <li key={rows.id} className="list-group-item">
            <a href={rows.link} target={rows.target}>
              {rows.title}
            </a>
            <span style={{ display: rows.description ? "block" : "none" }}>
              {rows.description}
            </span>
          </li>
        ))}
      </ul>
    );
  }
}

class Links extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Useful Links</h1>
        {List()}
      </React.Fragment>
    );
  }
}

export default Links;
