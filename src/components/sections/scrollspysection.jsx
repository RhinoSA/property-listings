import React, { Component } from "react";
import ScrollspyNew from "../modules/scrollspynew";

class ScrollspySection extends Component {
  state = {};
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-13" className="anchor" />
        <h2>Scrollspy</h2>
        <ScrollspyNew />
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/scrollspy"
            target="boot-scrollspy"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default ScrollspySection;
