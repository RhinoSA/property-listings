import React, { Component } from "react";
import BadgeBtn from "../modules/badgebtn";

class ButtonBadgeSection extends Component {
  state = {
    badgeBtnText: "Notifications",
    badgeBtnCount: 4,
    badgeBtnClass: "secondary"
  };
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-2" className="anchor" />
        <h2>Button &amp; Badge</h2>
        <p>
          To create a button with a badge, include the following in the state
          for the component:
        </p>
        <p className="alert alert-secondary">
          badgeBtnText: "Notifications",
          <br />
          badgeBtnCount: 4,
          <br />
          badgeBtnClass: "secondary"
        </p>
        <p>
          Then to create an instance of a button with a badge use the following:
        </p>
        <p className="alert alert-secondary">
          &lt;BadgeBtn
          <br />
          &nbsp;&nbsp;badgeBtnText=&#123;this.state.badgeBtnText&#125;
          <br />
          &nbsp;&nbsp;badgeBtnCount=&#123;this.state.badgeBtnCount&#125;
          <br />
          &nbsp;&nbsp;badgeBtnClass=&#123;this.state.badgeBtnClass&#125;
          <br />
          /&gt;
        </p>
        <p>
          <BadgeBtn
            badgeBtnText={this.state.badgeBtnText}
            badgeBtnCount={this.state.badgeBtnCount}
            badgeBtnClass={this.state.badgeBtnClass}
          />
        </p>
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/button-group"
            target="boot-btn-groups"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default ButtonBadgeSection;
