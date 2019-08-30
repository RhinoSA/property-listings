import React, { Component } from "react";
import NavBrand from "./navbrand";
import NavToggle from "./navtoggle";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import $ from "jquery";

$(document).on(
  "click",
  ".navbar-nav>li>a, .navbar-brand, .dropdown-menu>a",
  function(e) {
    if (
      $(e.target).is("a") &&
      $(e.target).attr("class") !== "nav-link dropdown-toggle"
    ) {
      $(".navbar-collapse").collapse("hide");
    }
  }
);

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      navBarID: "mynavbar",
      navBrandLink: "/home",
      navBrandTitle: "Reactor",
      navLinks: [
        //{ id: 1, title: "home", linkURL: "/home", linkType: "" },
        { id: 1, title: "animals", linkURL: "/animals", linkType: "" },
        {
          id: 2,
          title: "bootstrap",
          linkURL: "/bootstrap",
          linkType: "sub",
          submenu: [
            {
              id: 0,
              title: "basics",
              linkURL: "/bootstrap#spy-0",
              linkType: ""
            },
            {
              id: 1,
              title: "alerts",
              linkURL: "/bootstrap#spy-1",
              linkType: ""
            },
            {
              id: 2,
              title: "Button & Badge",
              linkURL: "/bootstrap#spy-2",
              linkType: ""
            },
            {
              id: 3,
              title: "Cards",
              linkURL: "/bootstrap#spy-3",
              linkType: ""
            },
            {
              id: 4,
              title: "Carousel",
              linkURL: "/bootstrap#spy-4",
              linkType: ""
            },
            {
              id: 5,
              title: "Collapse",
              linkURL: "/bootstrap#spy-5",
              linkType: ""
            },
            {
              id: 6,
              title: "Dropdowns",
              linkURL: "/bootstrap#spy-6",
              linkType: ""
            },
            {
              id: 7,
              title: "Input Groups",
              linkURL: "/bootstrap#spy-7",
              linkType: ""
            },
            {
              id: 8,
              title: "List Groups",
              linkURL: "/bootstrap#spy-8",
              linkType: ""
            },
            {
              id: 9,
              title: "Modals",
              linkURL: "/bootstrap#spy-9",
              linkType: ""
            },
            {
              id: 10,
              title: "Navbars",
              linkURL: "/bootstrap#spy-10",
              linkType: ""
            },
            {
              id: 11,
              title: "Pagination",
              linkURL: "/bootstrap#spy-11",
              linkType: ""
            },
            {
              id: 12,
              title: "Popovers",
              linkURL: "/bootstrap#spy-12",
              linkType: ""
            },
            {
              id: 13,
              title: "Scrollspy",
              linkURL: "/bootstrap#spy-13",
              linkType: ""
            },
            {
              id: 14,
              title: "Tabs",
              linkURL: "/bootstrap#spy-14",
              linkType: ""
            },
            {
              id: 15,
              title: "Tooltips",
              linkURL: "/bootstrap#spy-15",
              linkType: ""
            }
          ]
        },
        { id: 3, title: "Search", linkURL: "/search", linkType: "" },
        { id: 4, title: "forms", linkURL: "/forms", linkType: "" },
        { id: 5, title: "Links", linkURL: "/links", linkType: "" },
        { id: 6, title: "Shop", linkURL: "/shop", linkType: "" },
        { id: 7, title: "Cart", linkURL: "/cart", linkType: "" },
        { id: 8, title: "Rooms", linkURL: "/rooms", linkType: "" },
        { id: 9, title: "ToDo", linkURL: "/todo/todo", linkType: "" }
      ]
    };
  }

  render() {
    //title = this.state.navLinks.title;
    //const nameCapitalized = title.charAt(0).toUpperCase() + title.slice(1);
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <NavBrand
          navBrandLink={this.state.navBrandLink}
          navBrandTitle={this.state.navBrandTitle}
        />
        <NavToggle navBarID={this.state.navBarID} />
        <div className="collapse navbar-collapse" id={this.state.navBarID}>
          <ul className="navbar-nav mr-auto">
            {this.state.navLinks.map(rows =>
              rows.linkType === "sub" ? (
                <li key={rows.id} className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    activeClassName="active"
                    to={rows.linkURL}
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {rows.title.charAt(0).toUpperCase() + rows.title.slice(1)}
                  </NavLink>
                  <div
                    id="scrollspy"
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                    style={{ maxHeight: 200, overflowY: "scroll" }}
                  >
                    {rows.submenu.map(rows => (
                      <Link
                        to={rows.linkURL}
                        className="dropdown-item"
                        //activeClassName="active"
                        key={rows.id}
                      >
                        {rows.title.charAt(0).toUpperCase() +
                          rows.title.slice(1)}
                      </Link>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={rows.id} className="nav-item">
                  <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to={rows.linkURL}
                  >
                    {rows.title.charAt(0).toUpperCase() + rows.title.slice(1)}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
