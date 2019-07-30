import React, { Component } from "react";
import Title from "../modules/title";

const linkList = [
  {
    id: 1,
    title: "React JS -  Events",
    target: "react-events",
    link: "https://reactjs.org/docs/events.html#supported-events",
    description: "The React website documentation on how to use events.",
    category: "react"
  },
  {
    id: 2,
    title: "Bootstrap Components",
    target: "linkBootstrap",
    link: "https://getbootstrap.com/docs/4.0/components",
    description:
      "Bootstrap is a complete component based system which has all the basic elements which one would need to build responsive websites.",
    category: "css"
  },
  {
    id: 3,
    title: "React JS Examples",
    target: "linkReactExamples",
    link: "https://reactjsexample.com",
    description: "",
    category: "react"
  },
  {
    id: 4,
    title: "React JS - Context",
    target: "linkContext",
    link: "https://reactjs.org/docs/context.html",
    description: "",
    category: "react"
  },
  {
    id: 5,
    title: "React JS - Error Boundaries",
    target: "linkErrors",
    link: "https://reactjs.org/docs/error-boundaries.html",
    description: "",
    category: "react"
  },
  {
    id: 6,
    title: "React JS - Render Props",
    target: "linkRenderProps",
    link: "https://reactjs.org/docs/render-props.html",
    description: "",
    category: "react"
  },
  {
    id: 7,
    title: "React JS - Higher-Order Components",
    target: "linkHigherOrder",
    link: "https://reactjs.org/docs/higher-order-components.html",
    description: "",
    category: "react"
  },
  {
    id: 8,
    title: "React JS - Hooks",
    target: "linkHooks",
    link: "https://reactjs.org/docs/hooks-intro.html",
    description: "",
    category: "react"
  },
  {
    id: 9,
    title: "React Training - Router",
    target: "linkReactRouter",
    link: "https://reacttraining.com/react-router/core/guides/philosophy",
    description: "",
    category: "react"
  },
  {
    id: 10,
    title: "Shopping Cart Tutorial",
    target: "linkShopTutorial",
    link:
      "https://youtu.be/wPQ1-33teR4?list=PLWKjhJtqVAbkArDMazoARtNz1aMwNWmvC",
    description:
      "Tutorial explaining how to build an e-commerce site from scratch using React and Netlify. The demo shop on this website was created using this tutorial.",
    category: "tutorials"
  },
  {
    id: 11,
    title: "Code Camp Tutorials",
    target: "linkCodeCamp",
    link: "https://learn.freecodecamp.org",
    description:
      "Code Camp has a long list of exercises which test to see if you know all the relevant skills to be a web developer.",
    category: "tutorials"
  },
  {
    id: 12,
    title: "Redux",
    target: "linkRedux",
    link: "https://redux.js.org",
    description: "",
    category: "react"
  },
  {
    id: 13,
    title: "Material UI - React Components",
    target: "linkRlinkMaterialUidux",
    link: "https://material-ui.com",
    description:
      "A comprehensive system which has pre-built components built which can be used with React for faster and easier web development.",
    category: "ui"
  },
  {
    id: 14,
    title: "Robin Wieruch Blog - Managing the React State with Arrays",
    target: "linkArrays",
    link: "https://www.robinwieruch.de/react-state-array-add-update-remove",
    description: "",
    category: "react"
  },
  {
    id: 15,
    title: "Robin Wieruch Blog - React Articles",
    target: "linkRobin",
    link: "https://www.robinwieruch.de/categories/react",
    description: "",
    category: "react"
  },
  {
    id: 16,
    title: "Robin Wieruch Blog - Session Storage & Local Storage",
    target: "linkRobinSessions",
    link: "https://www.robinwieruch.de/local-storage-react",
    description: "",
    category: "react"
  },
  {
    id: 17,
    title: "Robin Wieruch Blog - React Conditional Rendering Techniques",
    target: "linkRobinConditional",
    link: "https://www.robinwieruch.de/conditional-rendering-react",
    description: "",
    category: "react"
  },
  {
    id: 18,
    title: "Robin Wieruch Blog - How to Use Web Components in React",
    target: "linkRobinComponents",
    link: "https://www.robinwieruch.de/react-web-components",
    description: "",
    category: "react"
  },
  {
    id: 19,
    title: "MDN - JavaScript",
    target: "linkReactCourse",
    link:
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS",
    description: "",
    category: "javascript"
  },
  {
    id: 20,
    title: "Object Orientated Programming - Mosh",
    target: "linkMoshJSCourse",
    link: "https://youtu.be/PFmuCDHHpwk",
    description: "",
    category: "javascript"
  },
  {
    id: 21,
    title: "Creating a Property Listing Website with React",
    target: "linkProperty",
    link:
      "https://developerhandbook.com/react/build-a-complete-property-listings-page-with-react",
    description: "",
    category: "tutorials"
  },
  {
    id: 22,
    title: "Mastering React - Mosh",
    target: "linkReactMosh",
    link: "https://codewithmosh.teachable.com/p/mastering-react",
    description: "",
    category: "tutorials"
  },
  {
    id: 23,
    title: "React / Redux Tutorial",
    target: "linkReactRedux",
    link: "https://www.robinwieruch.de/react-redux-tutorial",
    description: "",
    category: "tutorials"
  },
  {
    id: 24,
    title: "JavaScript Tutorial - Mosh",
    target: "linkMoshJS",
    link: "https://youtu.be/W6NZfCO5SIk",
    description: "",
    category: "tutorials"
  },
  {
    id: 25,
    title: "Styled Components",
    target: "linkStyled",
    link: "https://www.styled-components.com",
    description: "",
    category: "css"
  },
  {
    id: 26,
    title: "ProGit",
    target: "linkProgit",
    link: "../../assets/pdf/progit.pdf",
    description: "Everything you need to know about GIT",
    category: "react"
  },
  {
    id: 27,
    title: "Semantics UI",
    target: "linkSemantics",
    link: "https://semantic-ui.com",
    description: "",
    category: "ui"
  },
  {
    id: 28,
    title: "Frontend Masters",
    target: "linkFront",
    link: "https://frontendmasters.com",
    description: "",
    category: "tutorials"
  },
  {
    id: 29,
    title: "Parcel JS",
    target: "linkParcel",
    link: "https://parceljs.org",
    description: "",
    category: "react"
  },
  {
    id: 30,
    title: "Gatsby",
    target: "linkGatsby",
    link: "https://www.gatsbyjs.org",
    description: "",
    category: "react"
  },
  {
    id: 31,
    title: "Webpack",
    target: "linkWebpack",
    link: "https://webpack.js.org",
    description: "",
    category: "react"
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
      <div>
        <h4>React</h4>
        <ul className="list-unstyled">
              <li>
                <a
                  href="https://app.netlify.com/teams/andrewvg/sites"
                  target="netify"
                >
                  Netify
                </a>
              </li>
              <li>
                <a href="https://developer.paypal.com/" target="paypal">
                  PayPal Developer
                </a>
              </li>
              <li>
                <a href="https://firebase.google.com/" target="firebase">
                  Firebase
                </a>
              </li>
            </ul>
        <ul className="list-group mb-2" list={listOfLinks}>
          {listOfLinks.map(rows =>
            rows.category === "react" ? (
              <li key={rows.id} className="list-group-item">
                <a href={rows.link} target={rows.target}>
                  {rows.title}
                </a>
                <span style={{ display: rows.description ? "block" : "none" }}>
                  {rows.description}
                </span>
              </li>
            ) : null
          )}
        </ul>
        <h4>Tutorials</h4>
        <ul className="list-group mb-2" list={listOfLinks}>
          {listOfLinks.map(rows =>
            rows.category === "tutorials" ? (
              <li key={rows.id} className="list-group-item">
                <a href={rows.link} target={rows.target}>
                  {rows.title}
                </a>
                <span style={{ display: rows.description ? "block" : "none" }}>
                  {rows.description}
                </span>
              </li>
            ) : null
          )}
        </ul>
        <h4>CSS</h4>
        <ul className="list-group mb-2" list={listOfLinks}>
          {listOfLinks.map(rows =>
            rows.category === "css" ? (
              <li key={rows.id} className="list-group-item">
                <a href={rows.link} target={rows.target}>
                  {rows.title}
                </a>
                <span style={{ display: rows.description ? "block" : "none" }}>
                  {rows.description}
                </span>
              </li>
            ) : null
          )}
        </ul>
        <h4>JavaScript</h4>
        <ul className="list-group mb-2" list={listOfLinks}>
          {listOfLinks.map(rows =>
            rows.category === "javascript" ? (
              <li key={rows.id} className="list-group-item">
                <a href={rows.link} target={rows.target}>
                  {rows.title}
                </a>
                <span style={{ display: rows.description ? "block" : "none" }}>
                  {rows.description}
                </span>
              </li>
            ) : null
          )}
        </ul>
        <h4>User Interface Systems</h4>
        <ul className="list-group mb-2" list={listOfLinks}>
          {listOfLinks.map(rows =>
            rows.category === "ui" ? (
              <li key={rows.id} className="list-group-item">
                <a href={rows.link} target={rows.target}>
                  {rows.title}
                </a>
                <span style={{ display: rows.description ? "block" : "none" }}>
                  {rows.description}
                </span>
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
  }
}

class Links extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: 0 }}>
          <Title title="Links" />
          {List()}
        </div>
      </React.Fragment>
    );
  }
}

export default Links;
