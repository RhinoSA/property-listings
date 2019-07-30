import React, { Component } from "react";

class ScrollspyMenu extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var element = document.getElementById("slider");
    element.classList.toggle("slidein");
  }

  render() {
    return (
      <div className="slideout" id="slider">
        <button
          className="btn btn-secondary btn-sm"
          id="toggler"
          onClick={this.handleClick}
        >
          <span>Menu</span>
        </button>
        <div id="spymenu" className="list-group">
          <a className="list-group-item list-group-item-action" href="#spy-1">
            Alerts (1)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-2">
            Button &amp; Badge (2)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-3">
            Cards (3)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-4">
            Carousel (4)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-5">
            Collapse (5)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-6">
            Dropdowns (6)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-7">
            Input Groups (7)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-8">
            List Groups (8)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-9">
            Modals (9)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-10">
            Navbars (10)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-11">
            Pagination (11)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-12">
            Popovers (12)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-13">
            Scrollspy (13)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-14">
            Tabs (14)
          </a>
          <a className="list-group-item list-group-item-action" href="#spy-15">
            Tooltips (15)
          </a>
        </div>
      </div>
    );
  }
}

export default ScrollspyMenu;
