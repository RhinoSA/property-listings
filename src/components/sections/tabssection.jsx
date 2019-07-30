import React, { Component } from "react";
//import TabsPills from "../modules/tabspills";
import Tabs from "../modules/tabs/tabs";

class TabsSection extends Component {
  state = {
    tabs: [
      {
        id: 1,
        title: "Tab One",
        tabContent: "This is the content for tab one."
      },
      {
        id: 2,
        title: "Tab Two",
        tabContent: "This is the content for tab two."
      },
      {
        id: 3,
        title: "Tab Three",
        tabContent: "This is the content for tab three."
      }
    ]
  };

  render() {
    return (
      <div className="section-wrap">
        <span id="spy-14" className="anchor" />
        <h2>Tabs</h2>
        <p>This is an example of how one can create tabbed interfaces.</p>
        <Tabs>
          {this.state.tabs.map(rows => (
            <div key={rows.id} label={rows.title}>
              {rows.tabContent}
            </div>
          ))}
        </Tabs>
        <p className="alert alert-secondary mt-3">The code...</p>
        <p>
          For more information you can view the&nbsp;
          <a
            href="https://getbootstrap.com/docs/4.0/components/navs"
            target="boot-tabs"
          >
            documentation
          </a>
          &nbsp; on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default TabsSection;
