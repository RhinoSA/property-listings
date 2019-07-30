import React, { Component } from "react";
import StickyNav from "../modules/stickynav";

class NavbarsSection extends Component {
  state = {};
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-10" className="anchor" />
        <h2>Navbars</h2>
        <p>To do still...</p>
        <h4>Sticky Nav</h4>
        <p>
          Below is an example of a sticky nav. You can make any element behave
          like a sticky menu by adding the following:
        </p>
        <p className="alert alert-secondary">
          &lt;p data-toggle="sticky-onscroll"&gt;This will stick to the top of
          the page&lt;/p&gt;
        </p>
        <p>
          This item below will stick to the top of the page when you scroll
          down:
        </p>
        <StickyNav />
        <p>
          The css below is required in order for the sticky item to do it's
          thing:
        </p>
        <p className="alert alert-secondary">
          .sticky.is-sticky &#123;
          <br />
          &nbsp;&nbsp;position: fixed;
          <br />
          &nbsp;&nbsp;left: 0;
          <br />
          &nbsp;&nbsp;right: 0;
          <br />
          &nbsp;&nbsp;top: 0;
          <br />
          &nbsp;&nbsp;z-index: 1000;
          <br />
          &nbsp;&nbsp;width: 100%;
          <br />
          &nbsp;&nbsp;border-radius: 0rem;
          <br />
          &#125;
        </p>
        <p>
          <strong>Note: </strong>The JavaScript that makes the sticky work also
          needs to be added to the "componentDidMount()" method of the page or
          pages using sticky items. If it is used on all pages, then put it in
          the "componentDidMount()" method for your App.js file. To get a copy
          of the sticky script see the file bootstrap.jsx on this website.
        </p>
        <p className="alert alert-secondary">
          componentDidMount() &#123;
          <br />
          &nbsp;&nbsp;&frasl;&frasl;&nbsp;Sticky script goes here...
          <br />
          &#125;
        </p>
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/navbar"
            target="boot-navbar"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default NavbarsSection;
