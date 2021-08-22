import React from "react";
import "../assets/modal.css";
export default function Modal(
  props = {
    active: false || "false",
    closeFn: () => {},
    installFn: () => {},
  }
) {
  if (props.active === "true" || props.active === true) {
    return (
      <div className="r-modal-container">
        <div className="r-modal">
          <div className="r-modal-title">Install this app to your device</div>
          <div className="r-modal-body">
            <div>
              You can install this dashboard on your device. Then you can easily
              access this application even if you do not have internet
              connection
            </div>
            <div className="r-buttons">
              <button className="btn outline" onClick={props.closeFn}>
                Close
              </button>
              <button className="btn" onClick={props.installFn}>
                Install
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
