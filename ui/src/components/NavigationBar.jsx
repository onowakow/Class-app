import React from "react";
import Button from "react-bootstrap/Button";

const NavigationBar = ({ editorIsHome, changeEditView, handleModeChange, mode }) => {
  const handleClick = () => {
    if (mode === "editing") {
      handleModeChange("viewing");
    } else {
      handleModeChange("editing");
    }
  };

  return (
    <nav id="nav-bar">
      <div>
        <h1>Class app</h1>
      </div>
      <div>
        <Button
          className="nav-btn"
          onClick={handleClick}
          variant="dark"
        >
          {mode}
        </Button>
        {mode === "editing" && editorIsHome === false ? (
          <Button 
            className="nav-btn" 
            variant="warning"
            onClick={() => changeEditView('home')}
          >
            Editor home
          </Button>
        ) : null}
      </div>
    </nav>
  );
};

export default NavigationBar;
