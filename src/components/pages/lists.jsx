import React, { Component } from "react";

import ApidataNew from "../examples/apidatanew";
import Title from "../modules/title";
//import RepeatComponents from "./examples/repeatcomponents";

class Lists extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const title = "Filtering Lists";
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: 0 }}>
          <Title title={title} />
          <p>
            The example below outputs repeating components and also adds the
            prices of all the products listed and displays the total cost of the
            items. It also shows the total number of items in the list of
            products. The items in the array of products are also sorted
            alphabetically using the array sort method.
          </p>
          <h4>Shopping Cart</h4>
          <ApidataNew />
          <hr />
          <p>
            To find out more about lists &amp; keys, view the&nbsp;
            <a
              href="https://reactjs.org/docs/lists-and-keys.html"
              target="list-keys"
            >
              documentation
            </a>
            &nbsp;on the React website.
          </p>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Lists;
