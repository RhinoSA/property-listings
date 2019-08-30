import React, { Component } from "react";
import { ProModeContext } from "./promodecontext";

class ConsumeContext extends Component {
  render() {
    return (
      <ProModeContext.Consumer>
        {contextData => (
          <React.Fragment>
            <h4>{contextData.heading}</h4>
            <ul className="list-unstyled">
              {contextData.todoItems
                .filter(item => item.done === false)
                .map(item => {
                  return <li key={item.id}>{item.action}</li>;
                })}
            </ul>
          </React.Fragment>
        )}
      </ProModeContext.Consumer>
    );
  }
}

export default ConsumeContext;
