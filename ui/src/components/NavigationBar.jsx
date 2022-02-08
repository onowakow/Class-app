import React from 'react';
import Button from 'react-bootstrap/Button';

const NavigationBar = ({ handleViewLessons, view, toggleModeChange, mode }) => {
  return (
    <nav id="nav-bar">
      <div>
        <h1>
          <u>student-teacher</u>
        </h1>
      </div>
      <div>
        {view !== 'lessons' ? (
          <Button className="nav-btn" onClick={handleViewLessons} variant="primary">
            View all lessons
          </Button>
        ) : null}
        <Button className="nav-btn" onClick={toggleModeChange} variant="dark">
          {mode}
        </Button>
      </div>
    </nav>
  );
};

export default NavigationBar;
