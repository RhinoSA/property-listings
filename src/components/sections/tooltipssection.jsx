import React, { Component } from "react";
import Tooltip from "../modules/tooltip";

class TooltipsSection extends Component {
  state = {
    // Tooltip Top
    tooltipClass: "secondary",
    tooltipPlace: "bottom",
    tooltipTitle: "This is a tooltip below the button.",
    tooltipName: "Tooltip Top",
    // Tooltip Right
    tooltipClass2: "secondary",
    tooltipPlace2: "top",
    tooltipTitle2: "This is a tooltip above the button.",
    tooltipName2: "Tooltip Bottom",
    // Tooltip Bottom
    tooltipClass3: "secondary",
    tooltipPlace3: "right",
    tooltipTitle3: "This is a tooltip facing to the right with more text.",
    tooltipName3: "Tooltip Right"
  };
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-15" className="anchor" />
        <h2>Tooltips</h2>
        <p>This is an example of a tooltip using the tooltip module:</p>
        <p>
          <Tooltip
            tooltipClass={this.state.tooltipClass}
            tooltipPlace={this.state.tooltipPlace}
            tooltipTitle={this.state.tooltipTitle}
            tooltipName={this.state.tooltipName}
          />
          &nbsp;&nbsp;
          <Tooltip
            tooltipClass={this.state.tooltipClass2}
            tooltipPlace={this.state.tooltipPlace2}
            tooltipTitle={this.state.tooltipTitle2}
            tooltipName={this.state.tooltipName2}
          />
          &nbsp;&nbsp;
          <Tooltip
            tooltipClass={this.state.tooltipClass3}
            tooltipPlace={this.state.tooltipPlace3}
            tooltipTitle={this.state.tooltipTitle3}
            tooltipName={this.state.tooltipName3}
          />
        </p>
        <p>The data attributes used for the tooltip:</p>
        <p className="alert alert-secondary">
          tooltipClass: "secondary",
          <br />
          tooltipPlace: "right",
          <br />
          tooltipTitle: "This is a tooltip.",
          <br />
          tooltipName: "Tooltip Top"
        </p>
        <p>Creating the tooltip component:</p>
        <p className="alert alert-secondary">
          &lt;Tooltip
          <br />
          &nbsp;&nbsp;tooltipClass=&#123;this.state.tooltipClass&#125;
          <br />
          &nbsp;&nbsp;tooltipPlace=&#123;this.state.tooltipPlace&#125;
          <br />
          &nbsp;&nbsp;tooltipTitle=&#123;this.state.tooltipTitle&#125;
          <br />
          &nbsp;&nbsp;tooltipName=&#123;this.state.tooltipName&#125;
          <br />
          /&gt;
        </p>
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/tooltips"
            target="boot-tooltips"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default TooltipsSection;
