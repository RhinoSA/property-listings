import React, { Component } from "react";
import Dropdown from "../modules/dropdown";

class DropdownsSection extends Component {
  state = {
    //Dropdown
    dropDownText: "Menu",
    dropdown: [
      { id: 1, title: "Home", linkUrl: "/home" },
      { id: 2, title: "Bootstrap", linkUrl: "/bootstrap" },
      { id: 3, title: "Components", linkUrl: "/components" },
      { id: 4, title: "Router", linkUrl: "/routers" }
    ]
  };
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-6" className="anchor" />
        <h2>Dropdowns</h2>
        <p>
          Below is an example of a dropdown module which uses data from an array
          to generat the list of links in the dropdown.
        </p>
        <Dropdown
          dropdown={this.state.dropdown}
          dropDownText={this.state.dropDownText}
        />
        <p>
          This is the array that was used for this example and the data field
          for the button text:
        </p>
        <p className="alert alert-secondary">
          dropDownText: "Menu",
          <br />
          dropdown: [<br />
          &nbsp;&nbsp;&#123; id: 1, title: "Home", linkUrl: "/home" &#125;,
          <br />
          &nbsp;&nbsp;&#123; id: 2, title: "Components", linkUrl: "/components"
          &#125;,
          <br />
          &nbsp;&nbsp;&#123; id: 3, title: "Router", linkUrl: "/routers" &#125;
          <br />]
        </p>
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/dropdowns"
            target="boot-dropdowns"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default DropdownsSection;
