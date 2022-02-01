import React from "react";
import Button from "react-bootstrap/Button";

const SectionEditControlBar = ({ saveText, changeEditView, editView}) => {
  return (
    <nav id="section-edit-control-nav">
      {editView === 'article-text' ? (
        <>
          <Button onClick={saveText} variant="success" className="nav-btn">
            Save text
          </Button>
          <Button
            onClick={()=>changeEditView('home')}
            variant="warning"
            className="nav-btn"
          >
            Cancel
          </Button>
        </>
      ) : (
        <Button onClick={()=>changeEditView('article-text')} variant="primary" className="nav-btn">
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
