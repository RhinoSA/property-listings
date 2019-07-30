import React, { Component } from "react";
import Alert from "../modules/alert";

class AlertSection extends Component {
  constructor() {
    super();
    this.state = {
      alertClass: "info",
      alertDismiss: true,
      alertHeading: "Well done!",
      alertText:
        "Holy guacamole! You should check in on some of those fields below."
    };
  }

  render() {
    return (
      <div className="section-wrap">
        <span id="spy-1" className="anchor" />
        <h2>Alerts</h2>
        <p>
          This is an alert module which allows you to choose whether the alert
          is dismissable, has a heading and what colour it will be.
        </p>
        <p className="alert alert-secondary">
          &lt;Alert
          <br />
          &nbsp;&nbsp;alertClass=&#123;this.state.alertClass&#125;
          <br />
          &nbsp;&nbsp;alertDismiss=&#123;this.state.alertDismiss&#125;
          <br />
          &nbsp;&nbsp;alertHeading=&#123;this.state.alertHeading&#125;
          <br />
          &nbsp;&nbsp;alertText=&#123;this.state.alertText&#125;
          <br />
          /&gt;
        </p>
        <p>Include the following in your state:</p>
        <p className="alert alert-secondary">
          alertClass: "warning",
          <br />
          alertDismiss: true,
          <br />
          alertHeading: "The Heading",
          <br />
          alertText: "This is the text.
        </p>
        <p>Below is what the output is when using this alert module:</p>
        <Alert
          alertClass={this.state.alertClass}
          alertDismiss={this.state.alertDismiss}
          alertHeading={this.state.alertHeading}
          alertText={this.state.alertText}
        />

        <p>
          If you want to use prop values instead of state variables then do this
          instead:
        </p>
        <p className="alert alert-secondary">
          &lt;Alert
          <br />
          &nbsp;&nbsp;alertClass="primary"
          <br />
          &nbsp;&nbsp;alertDismiss=&#123;true&#125;
          <br />
          &nbsp;&nbsp;alertHeading="The Alert"
          <br />
          &nbsp;&nbsp;alertText="This is the content of the alert."
          <br />
          /&gt;
        </p>
        <p>
          For more information you can view the{" "}
          <a
            href="https://getbootstrap.com/docs/4.0/components/alerts"
            target="boot-alerts"
          >
            documentation
          </a>{" "}
          on the Bootstrap website.
        </p>
      </div>
    );
  }
}

export default AlertSection;
