import React from "react";
import Button from "react-bootstrap/Button";

const SectionEditControlBar = ({ saveText, enableTextEdit, isTextEdit, setIsTextEdit }) => {
  return (
    <nav id="section-edit-control-nav">
      {isTextEdit ? (
        <>
          <Button onClick={saveText} variant="success" className="nav-btn">
            Save text
          </Button>
          <Button
            onClick={()=>setIsTextEdit(false)}
            variant="warning"
            className="nav-btn"
          >
            Cancel
          </Button>
        </>
      ) : (
        <Button onClick={()=>setIsTextEdit(true)} variant="primary" className="nav-btn">
          Edit text
        </Button>
      )}
      <Button variant="secondary" className="nav-btn">
        Edit title or type
      </Button>
    </nav>
  );
};

export default SectionEditControlBar;
