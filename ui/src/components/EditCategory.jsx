import React from "react";
import Button from "react-bootstrap/Button";

const EditCategory = ({ changeEditView }) => {
  return (
    <nav id="edit-category-nav">
      <Button
        onClick={() => changeEditView("new")}
        className="nav-btn"
        variant="primary"
      >
        New section
      </Button>
      <Button 
        onClick={() => changeEditView("editSection")}
        className="nav-btn" 
        variant="secondary"
      >
        Edit section
      </Button>
    </nav>
  );
};

export default EditCategory;
