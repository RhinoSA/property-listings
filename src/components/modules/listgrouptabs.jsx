import React, { Component } from "react";
import ListGroupTabsMenu from "./listgrouptabsmenu";
import ListGroupTabContent from "./listgrouptabcontent";

class ListGroupTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navLinks: [
        {
          id: 1,
          active: true,
          title: "Home",
          subHead: "Welcome to Reactor",
          tabContent: "This is the content of the home page to see it working."
        },
        {
          id: 2,
          active: false,
          title: "Bootstrap",
          subHead: "Bootstrap Modules",
          tabContent: "This is the content of the Bootstrap page."
        },
        {
          id: 3,
          active: false,
          title: "Components",
          subHead: "Creating Components",
          tabContent:
            "This is a brief introduction to what components are all about."
        },
        {
          id: 4,
          active: false,
          title: "Forms",
          subHead: "Forms & React",
          tabContent: "This is the page about how to make use of React forms."
        },
        {
          id: 5,
          active: false,
          title: "Router",
          subHead: "Using the React Router",
          tabContent:
            "This is the page about the React router system which allows one to create multiple pages on what is essentially a one page system."
        }
      ]
    };
  }

  render() {
    return (
      <div className="row mt-0">
        {/* Start of left side pamel */}
        <div className="col-3 mt-2">
          <div className="list-group" id="list-tab" role="tablist">
            {this.state.navLinks.map(rows => (
              <ListGroupTabsMenu
                key={rows.id}
                active={rows.active}
                title={rows.title}
              />
            ))}
          </div>
        </div>
        {/* End of left side pamel */}
        {/* Start of right side pamel */}
        <div className="col-9">
          <div className="tab-content" id="nav-tabContent">
            {this.state.navLinks.map(rows => (
              <ListGroupTabContent
                key={rows.id}
                active={rows.active}
                title={rows.title}
                subHead={rows.subHead}
                tabContent={rows.tabContent}
              />
            ))}
          </div>
        </div>
        {/* End of right side pamel */}
      </div>
    );
  }
}

export default ListGroupTabs;
