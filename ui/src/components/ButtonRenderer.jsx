import React from "react";
import Button from "react-bootstrap/Button";

// Renders a button. On click, will render children.
const ButtonRenderer = ({ buttonName, children, isContentActive, activateContent }) => {
  return !isContentActive ? (
    <Button className="new-section-btn" onClick={activateContent}>
      {buttonName}
    </Button>
  ) : isContentActive ? (children) : null;
};

export default ButtonRenderer;
