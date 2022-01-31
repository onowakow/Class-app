import React from "react";
import Button from "react-bootstrap/Button";

const NavigationBar = ({ editView, changeEditView, toggleModeChange, mode }) => {
  return (
    <nav id="nav-bar">
      <div>
        <h1><u>student-teacher</u></h1>
      </div>
      <div>
        <Button
          className="nav-btn"
          onClick={toggleModeChange}
          variant="dark"
        >
          {mode}
        </Button>
        {/*
        {mode === "editing" && editView !== 'home' ? (
          <Button 
            className="nav-btn" 
            variant="warning"
            onClick={() => changeEditView('home')}
          >
            Editor home
          </Button>
        ) : null}
        */}
      </div>
    </nav>
  );
};

export default NavigationBar;
