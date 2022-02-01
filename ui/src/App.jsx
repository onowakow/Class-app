// Browser support imports
import "babel-polyfill";
import "whatwg-fetch";

// React and bootstrap imports
import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Component imports
import NavigationBar from "./components/NavigationBar.jsx";
import LessonDisplay from './components/LessonDisplay.jsx'
import getLessons from './utilities/getLessons.js'
import newArticle from "./utilities/newArticle.js";

const App = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonIdSelect, setLessonIdSelect] = useState(1);
  const [editView, setEditView] = useState("home");
  const [mode, setMode] = useState("editing");

  console.log(editView)

  async function loadLessons() {
    try {
      const lessonList = await getLessons();
      setLessons(lessonList);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  useEffect(() => {
    loadLessons();
  }, []);

  const handleEditViewChange = (view) => {
    setEditView(view);
  };

  const toggleModeChange = () => {
    if (mode === "editing") {
      setMode("viewing");
    } else {
      setMode("editing");
    }
  };
  
  const handleNewArticle = async (title) => {
    try {
      const newArticleResponse = await newArticle(title, lessonIdSelect);
      const id = newArticleResponse.data.addArticle.id;
      setEditView("home");
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleEditText = () => {
    console.log("Edit text");
  };

  const getLesson = () => {
    const findResult = lessons.find((lesson) => lesson.id === lessonIdSelect)

    return findResult
  };

  return (
    <div className="app">
      <Container id="app-container">
        <Row>
          <NavigationBar
            editView={editView}
            changeEditView={handleEditViewChange}
            mode={mode}
            toggleModeChange={toggleModeChange}
          />
        </Row>
        <Row>
          <LessonDisplay 
            lesson={getLesson()} 
            mode={mode}
            editView={editView}
            changeEditView={setEditView}
          />
        </Row>
      </Container>
    </div>
  );
};

export default App;
