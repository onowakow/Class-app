// Browser support imports
import "babel-polyfill";
import "whatwg-fetch";

// React and bootstrap imports
import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// Component imports
import NavigationBar from "./components/NavigationBar.jsx";
import LessonDisplay from "./components/LessonDisplay.jsx";
import getLessons from "./utilities/getLessons.js";
import newArticle from "./utilities/newArticle.js";
import newLesson from "./utilities/newLesson.js";
import editArticle from "./utilities/editArticle.js";
import AllLessonsDisplay from "./components/AllLessonsDisplay.jsx";

const App = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonIdSelect, setLessonIdSelect] = useState(1);
  const [view, setView] = useState("lessons");
  const [editView, setEditView] = useState("home");
  const [mode, setMode] = useState("editing");
  const [articleIdSelect, setArticleIdSelect] = useState(1);

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
      const response = await newArticle(title, lessonIdSelect);
      const articleId = response.data.addArticle.id;
      await loadLessons();
      setArticleIdSelect(articleId);
      setEditView("home");
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleNewLesson = async (lessonInputs) => {
    console.log(lessonInputs);
    try {
      await newLesson(lessonInputs.title, lessonInputs.description);
      await loadLessons()
    } catch (error) {
      console.log(error);
    }
  };

  // editArticle needs article, lessonId, and articleId. REMEMBER when plugging it in.
  const handleEditText = async (article, lessonId) => {
    try {
      await editArticle(article, lessonId);
      await loadLessons();
      setEditView("home");
    } catch (error) {
      console.log("Failed to update article, Error:", error);
    } finally {
    }
  };

  const getLesson = () => {
    const findResult = lessons.find((lesson) => lesson.id === lessonIdSelect);
    return findResult;
  };

  const handleViewLessons = () => {
    setView("lessons");
  };

  return (
    <div className="app">
      <Container id="app-container">
        <Row>
          <NavigationBar
            view={view}
            handleViewLessons={handleViewLessons}
            mode={mode}
            toggleModeChange={toggleModeChange}
          />
        </Row>
        <Row>
          {view === "lessons" ? (
            <AllLessonsDisplay
              lessons={lessons}
              mode={mode}
              handleNewLesson={handleNewLesson}
              setLessonIdSelect={setLessonIdSelect}
              setView={setView}
            />
          ) : view === "lesson" ? (
            <LessonDisplay
              handleEditText={handleEditText}
              handleArticleIdSelect={setArticleIdSelect}
              articleIdSelect={articleIdSelect}
              handleNewArticle={handleNewArticle}
              lesson={getLesson()}
              mode={mode}
              editView={editView}
              changeEditView={setEditView}
            />
          ) : (error)}
        </Row>
      </Container>
    </div>
  );
};

export default App;
