import React from "react";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";

const SectionEditControlBar = ({ saveText, handleCancel, isEdit }) => {
  const [saveBtnText, setSaveBtnText] = useState("Save text");

  // Resets the save button text when editView changes.
  useEffect(() => {
    setSaveBtnText("Save text");
  }, [isEdit]);

  const handleClick = async () => {
    setSaveBtnText("Saving...");
    saveText();
  };

  return (
    <nav>
      <Button onClick={handleClick} variant="success" className="nav-btn">
        {saveBtnText}
      </Button>
      <Button onClick={handleCancel} variant="warning" className="nav-btn">
        Cancel edit
      </Button>
    </nav>
  );
};

export default SectionEditControlBar;
