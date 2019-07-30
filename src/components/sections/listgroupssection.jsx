import React, { Component } from "react";
import ListGroup from "../modules/listgroup";
import ListGroupTabs from "../modules/listgrouptabs";

class ListGroupsSection extends Component {
  state = {};
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-8" className="anchor" />
        <h2>List Groups</h2>
        <p>
          This is an example of a list group with the items sorted
          alphabetically. There is also a fallback if the list is empty and a
          paragraph of text appears instead mentioning the fact that the list is
          empty.
        </p>
        <ListGroup />
        <h2>List Group Tabs</h2>
        <p>
          Below is an example of how to use list groups to create tabs or a
          submenu on a page.
        </p>
        <ListGroupTabs />
        <p className="mt-3">
          There are three components used to create the tabs, the first
          component is the basic shell which then imports the two components
          which make the menu and then the other one that displays the content
          based on which menu item is selected.
        </p>
        <h4>The Controller</h4>
        <p>
          This is the file that is used as the controller. It has the data in an
          array and the basic structure of the page with the two component calls
          for the menu and tab content generating components.
        </p>
        <p className="alert alert-secondary">
          &lt;div className="row mt-0"&gt;
          <br />
          &nbsp;&nbsp;&lt;div className="col-3 mt-2"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="list-group" id="list-tab"
          role="tablist"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.navLinks.map(rows
          => (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListGroupTabsMenu
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key=&#123;rows.id&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active=&#123;rows.active&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title=&#123;rows.title&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
          <br />
          &lt;/div&gt;
          <br />
          &nbsp;&nbsp;&lt;div className="col-9"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;div className="tab-content"
          id="nav-tabContent"&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.state.navLinks.map(rows
          => (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;ListGroupTabContent
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;key=&#123;rows.id&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active=&#123;rows.active&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title=&#123;rows.title&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;subHead=&#123;rows.subHead&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tabContent=&#123;rows.tabContent&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;))&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
          <br />
          &nbsp;&nbsp;&lt;/div&gt;
          <br />
          &lt;/div&gt;
        </p>
        <h4>The Menu Component</h4>
        <p>
          This component creates the menu for the tabbed list groups example:
        </p>
        <p className="alert alert-secondary">
          class ListGroupTabsMenu extends Component &#123;
          <br />
          &nbsp;&nbsp;render() &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const menuID = "list-" + this.props.title +
          "-list";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const menuHref = "#list-" + this.props.title;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const ariaCtrl = this.props.title;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const menuClass = "list-group-item
          list-group-item-action";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const menuClassActive = menuClass + " active";
          <br />
          &nbsp;&nbsp;return (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;React.Fragment&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;a
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;this.props.active
          === true ? menuClassActive : menuClass&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id=&#123;menuID&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;data-toggle="list"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;href=&#123;menuHref&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role="tab"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aria-controls=&#123;ariaCtrl&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.title&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/a&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/React.Fragment&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;);
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;
        </p>
        <h4>The Tab Content Component</h4>
        <p>
          This is the component the will create the tabbed conente based on what
          the user chooses from the menu with the links.
        </p>
        <p className="alert alert-secondary">
          class ListGroupTabContent extends Component &#123;
          <br />
          &nbsp;&nbsp;render() &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const contentID = "list-" + this.props.title;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const ariaLabel = "list-" + this.props.title +
          "-list";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const menuSubClass = "tab-pane fade";
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;const menuSubClassActive = menuSubClass + "
          show active";
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className=&#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.props.active
          === true ? menuSubClassActive : menuSubClass
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;id=&#123;contentID&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;role="tabpanel"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;aria-labelledby=&#123;ariaLabel&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;&#123;this.props.subHead&#125;&lt;/h1&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#123;this.props.tabContent&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;);
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;
        </p>
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/list-group"
            target="boot-list-group"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default ListGroupsSection;
