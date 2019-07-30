import React, { Component } from "react";
import FormInput from "../examples/forminput";
import Updatechild from "../examples/updatechild";
import Clearme from "../examples/clearme";
import SignIn from "../examples/savedata";
import Title from "../modules/title";
//import FormValidate from "../modules/formvalidate";

class Forms extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const title = "React Forms";
    return (
      <React.Fragment>
        <div className="container" style={{ marginTop: 0 }}>
          <Title title={title} />
          {/*<FormValidate />*/}
          <p>
            This is a form built using React and has all of the basic form
            elements one would tend to need to build a basic form.
          </p>
          <p className="alert alert-info">
            Go through the{" "}
            <a
              href="https://getbootstrap.com/docs/4.0/components/forms"
              tartget="boot-forms"
            >
              Bootstrap documentation
            </a>{" "}
            on forms for this section. Also look at the{" "}
            <a
              href="https://getbootstrap.com/docs/4.0/components/input-group"
              target="input-groups"
            >
              Bootstrap documentation
            </a>{" "}
            on input groups for this section.
          </p>
          <hr />
          <FormInput />
          <hr />
          <Updatechild />
          <hr />
          <Clearme />
          <h3>Storing Form Values</h3>
          <SignIn />
        </div>
      </React.Fragment>
    );
  }
}

export default Forms;
