import React, { Component } from "react";

class ModalsSection extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-wrap">
          <span id="spy-9" className="anchor" />
          <h2>Modals</h2>
          <p>
            This is a module which creates a modal which one can use to create a
            Bootstrap modal. The module allows you to choose whether the modal
            is centered or on top of the page, as well as the option to enable
            scrolling. It also lets you add or remove the footer. The modal
            title and the content is also easy to customise. Create the
            following component call in order to create the modal:
          </p>
          <p className="alert alert-secondary">
            &lt;Modal
            <br />
            &nbsp;&nbsp;modalID=&#123;this.state.modalID&#125;
            <br />
            &nbsp;&nbsp;modalTitle=&#123;this.state.modalTitle&#125;
            <br />
            &nbsp;&nbsp;modalContent=&#123;this.state.modalContent&#125;
            <br />
            &nbsp;&nbsp;modalClass=&#123;this.state.modalClass&#125;
            <br />
            &nbsp;&nbsp;modalFooter=&#123;this.state.modalFooter&#125;
            <br />
            /&gt;
          </p>
          <p>Next create the button to call up the modal:</p>
          <p className="alert alert-secondary">
            &lt;button
            <br />
            &nbsp;&nbsp;type="button"
            <br />
            &nbsp;&nbsp;className="btn btn-secondary btn-sm"
            <br />
            &nbsp;&nbsp;data-toggle="modal"
            <br />
            &nbsp;&nbsp;data-target=&#123;this.state.modalCall&#125;
            <br />
            &gt;
            <br />
            &nbsp;&nbsp;Modal One
            <br />
            &lt;/button&gt;
          </p>
          <p>Then lastly, you will need to add the following to your state:</p>
          <p className="alert alert-secondary">
            modalID: "two",
            <br />
            modalCall: "#two",
            <br />
            modalTitle: "Modal Title",
            <br />
            modalContent: modalContent,
            <br />
            modalClass: "scrollable",
            <br />
            modalFooter: true,
          </p>
          <p>
            The "modalContent" you can either add into your state or you can
            create a "const" which you then can use to create a more complex
            markup for your modal content. To then include it in your modal you
            will use the name of the constant in the state for the
            "modalContent" option, which in the above example is named
            "modalContent". The other option you can control are the positioning
            of the modal, either top, centered or scrollable. To include a
            footer on the modal, set the "modalFooter" value to true.
          </p>
          <p>
            For more information you can view the{" "}
            <a
              href="https://getbootstrap.com/docs/4.0/components/modal"
              target="boot-modal"
            >
              documentation
            </a>{" "}
            on the Bootstrap website.
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default ModalsSection;
