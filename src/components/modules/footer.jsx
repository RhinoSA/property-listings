import React, { Component } from "react";
const thisyear = new Date().getFullYear();
class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-center text-muted">
                &copy; {this.props.sitename} {thisyear}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
