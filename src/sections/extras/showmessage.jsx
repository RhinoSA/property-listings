import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import "./styles.css";

function ShowMessage() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div>
      {showButton && (
        <button
          className="btn btn-sm btn-secondary"
          onClick={() => setShowMessage(true)}
        >
          Show Message
        </button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div
          className="alert alert-info alert-dismissable"
          onClose={() => setShowMessage(false)}
        >
          This alert message is being transitioned in and out of the DOM.
          <button
            onClick={() => setShowMessage(false)}
            className="btn btn-sm btn-secondary"
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              marginRight: 5,
              marginTop: 5
            }}
          >
            X
          </button>
        </div>
      </CSSTransition>
    </div>
  );
}

export default ShowMessage;
