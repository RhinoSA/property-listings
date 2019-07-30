import React, { Component } from "react";
import Collapse from "../modules/collapse";
//import Accordion from "../modules/accordion";

class CollapseSection extends Component {
  state = {};
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-5" className="anchor" />
        <h2>Collapse</h2>
        {/*<Accordion />*/}
        <p>
          Below are two examples of the collapse feature that comes with
          Bootstrap, the first is an accordion-style menu, and the second one is
          a simple visibility toggle.
        </p>
        <Collapse />
        <p className="mt-3">
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/collapse"
            target="boot-collapse"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default CollapseSection;
