import React, { useState } from "react";
import "./Modal.css";

const Backdrop = (props) => {
  return <div className="backdrop"></div>;
};
const Overlay = (props) => {
  return (
    <div className="modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const overlayRoot = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop />
      <Overlay>{props.children}</Overlay>
    </React.Fragment>
  );
};

export default Modal;
