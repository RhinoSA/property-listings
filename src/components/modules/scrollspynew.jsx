import React, { Component } from "react";

class ScrollspyNew extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <p>
          Create a few wrappers for the sections that will be tied to the
          scrollspy menu:
        </p>
        <p className="alert alert-secondary">
          &lt;div className="section-wrap" id="spy-1"&gt;
          <br />
          &nbsp;&nbsp;&lt;h2&gt;Section 01&lt;/h2&gt;
          <br />
          &nbsp;&nbsp;&lt;p&gt;The content for section one...&lt;/p&gt;
          <br />
          &lt;/div&gt;
        </p>
        <p>Next create a container to wrap all the sections you created:</p>
        <p className="alert alert-secondary">
          &lt;div &nbsp;&nbsp;className="row"
          <br />
          &nbsp;&nbsp;data-spy="scroll"
          <br />
          &nbsp;&nbsp;data-target="#spymenu"
          <br />
          &nbsp;&nbsp;data-offset="0"
          <br />
          &gt;
          <br />
          &nbsp;&nbsp;// Put all the sections you created inside this wrapper...
          <br />
          &lt;/div&gt;
        </p>
        <p>Create the menu which will be the scrollspy menu:</p>
        <p className="alert alert-secondary">
          &lt;div id="spymenu" className="list-group"&gt;
          <br />
          &nbsp;&nbsp;&lt;a
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;className="list-group-item
          list-group-item-action"
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;href="#spy-1"
          <br />
          &nbsp;&nbsp;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Section 01
          <br />
          &nbsp;&nbsp;&lt;/a&gt;
          <br />
          &nbsp;&nbsp;// Include the rest of the links needed here...
          <br />
          &lt;/div&gt;
        </p>
        <p>Add this script to your page:</p>
        <p className="alert alert-secondary">
          $("body").scrollspy(&#123; target: "#spymenu" &#125;);
        </p>
        <p>Lastly you need to add the following css to your body tag:</p>
        <p className="alert alert-secondary">
          body &#123;
          <br />
          &nbsp;&nbsp;position: relative;
          <br />
          &nbsp;&nbsp;width: 100%;
          <br />
          &nbsp;&nbsp;height: 100%;
          <br />
          &#125;
        </p>
      </React.Fragment>
    );
  }
}

export default ScrollspyNew;
