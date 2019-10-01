import React from "react";
// npm i faker
// https://www.npmjs.com/package/faker

class ReportSize extends React.Component {
  refCallback = element => {
    if (element) {
      this.props.getSize(element.getBoundingClientRect());
    }
  };

  render() {
    return (
      <div
        ref={this.refCallback}
        style={{ backgroundColor: "rgba(0,0,0,0.1)", padding: 15 }}
      >
        <p>Text...</p>
      </div>
    );
  }
}

export default ReportSize;
