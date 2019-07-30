import React, { Component } from "react";
import Popover from "../modules/popover";

class PopoversSection extends Component {
  state = {
    // Popover
    poptext:
      "This is the text inside the popover which has html content to display a link to the <a href='https://getbootstrap.com/docs/4.0/components/popovers' target='bootstrap'>documentation</a> on Bootstrap popovers.",
    poptitle: "This is the Heading",
    popbtn: "Click Me"
  };
  render() {
    return (
      <div className="section-wrap">
        <span id="spy-12" className="anchor" />
        <h2>Popovers</h2>
        <p>
          Below is an example of a Bootstrap popover component which can be used
          to display usefull information which can include html code inside the
          content of the popover.
        </p>
        <p>
          <Popover
            poptext={this.state.poptext}
            poptitle={this.state.poptitle}
            popbtn={this.state.popbtn}
          />
        </p>
        <p>Use the following to create a popover:</p>
        <p className="alert alert-secondary">
          &lt;Popover
          <br />
          &nbsp;&nbsp;poptext=&#123;this.state.poptext&#125;
          <br />
          &nbsp;&nbsp;poptitle=&#123;this.state.poptitle&#125;
          <br />
          &nbsp;&nbsp;popbtn=&#123;this.state.popbtn&#125;
          <br />
          /&gt;
        </p>
        <p>Put the following data in your state for the popover:</p>
        <p className="alert alert-secondary">
          poptext:&nbsp; "&lt;p&gt;This is the text inside the popover and can
          include html.&lt;p&gt;",
          <br />
          poptitle: "This is the Heading",
          <br />
          popbtn: "Click Me",
        </p>
        <p>
          To be able to close the popovers by clicking on the page instead of
          just on the button that opened the popover, you need to include the
          following function just before the start of your render method:
        </p>
        <p className="alert alert-secondary">
          $("html").on("click", function(e) &#123;
          <br />
          &nbsp;&nbsp;if (<br />
          &nbsp;&nbsp;&nbsp;&nbsp;typeof $(e.target).data("original-title") ==
          "undefined" &amp;&amp;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;!$(e.target)
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.parents()
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.is(".popover.in")
          <br />
          &nbsp;&nbsp;) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;$("[data-original-title]").popover("hide");
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;);
        </p>
        <p>
          You will also need to include jQuery in your app by doing the
          following:
        </p>
        <p className="alert alert-secondary">import $ from "jquery";</p>
        <p>
          Also include jQuery just before the &lt;/body&gt; tag on your
          index.html file as follows:
        </p>
        <p className="alert alert-secondary">
          &lt;script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"&gt;&lt;/script&gt;
        </p>
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/popovers"
            target="boot-popovers"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default PopoversSection;
