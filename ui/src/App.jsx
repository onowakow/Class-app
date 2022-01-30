import "babel-polyfill";
import "whatwg-fetch";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useState, useEffect } from "react";
import ArticleDisplay from "./components/ArticleDisplay.jsx";
import SectionNavigation from "./components/SectionNavigation.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Editor from "./components/Editor.jsx";
import { Container, Row, Col } from "react-bootstrap";

const getLessons = async () => {
  const query = `
    {
      lessonList {
        id,
        lesson_title
        sections {
          id
          title
          content
        }
      }
    }
  `;
  const response = await fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  return result.data.lessonList;
};

const newArticle = async (title) => {
  const query = `
    mutation {
      addArticle( article: {
        title:"${title}"
      }){
        id
      }
    }
  `;

  const response = await fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  return await response.json();
};

const blankLesson = {
  id: null,
  lesson_title: null,
  sections: [],
}

const blankArticle = {
  id: null,
  title: null,
  content: null,
}

const App = () => {
  const [lessons, setLessons] = useState([blankLesson]);
  const [lessonSelect, setLessonSelect] = useState(1);
  const [articles, setArticles] = useState();
  const [articleIdSelect, setArticleIdSelect] = useState(1);
  // current edit view
  const [editView, setEditView] = useState("home");
  const [mode, setMode] = useState("editing");

  async function loadLessons() {
    try {
      const lessonList = await getLessons();
      setLessons(lessonList);
      // setArticles(lessonList[lessonSelect]);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    loadLessons()
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

  const handleArticleIdSelect = (articleIndex) => {
    setArticleIdSelect(articleIndex);
  };

  const handleNewArticle = async (title) => {
    try {
      const newArticleResponse = await newArticle(title);
      const id = newArticleResponse.data.addArticle.id;

      const articles = await getLessons();
      setArticles(articles);
      setEditView("home");
      setArticleIdSelect(id);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleEditText = () => {
    console.log("Edit text");
  };
  
  const getArticleList = () => {
    if (lessons[lessonSelect] === undefined) {
      return [blankLesson]
    } 
    return lessons[lessonSelect].sections
  }

  const getArticle = () => {
    const articleList = getArticleList()
    if (articleList[articleIdSelect] === undefined) {
      return [blankArticle]
    }

    return articleList.find(article => article.id === articleIdSelect)
  }

  return (
    <div className="app">
      <Container id="app-container">
        <Row>
          <NavigationBar
            editorIsHome={editView === "home" ? true : false}
            changeEditView={handleEditViewChange}
            mode={mode}
            toggleModeChange={toggleModeChange}
          />
        </Row>
        <Row>
          <Col xs={2} className="section-nav">
            <SectionNavigation
              articles={getArticleList()}
              handleArticleSelect={handleArticleIdSelect}
            />
          </Col>
          <Col id="article-edit-display" xs={10}>
            <ArticleDisplay
              mode={mode}
              saveText={handleEditText}
              article={getArticle()}
            />
            {mode === "editing" ? (
              <Editor
                handleCancel={() => setEditView("home")}
                changeEditView={handleEditViewChange}
                editView={editView}
                handleNewArticle={handleNewArticle}
              />
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
