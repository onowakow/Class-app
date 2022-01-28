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

const getArticles = async () => {
  const query = `
    { articleList {
      id
      title
      content
    }}
  `;
  const response = await fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  return result.data.articleList;
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

const App = () => {
  const [articles, setArticles] = useState([]);
  const [articleSelect, setArticleSelect] = useState(0);
  // current edit view
  const [editView, setEditView] = useState("home");
  const [mode, setMode] = useState("editing");

  useEffect(() => {
    getArticles()
      .then((response) => setArticles(response))
      .catch((error) => console.log("Error:", error));
  }, []);

  const handleEditViewChange = (view) => {
    setEditView(view);
  };

  const toggleModeChange = () => {
      if (mode === "editing") {
        setMode('viewing')
      } else {
        setMode('editing')
      }
  };

  const handleArticleSelect = (articleIndex) => {
    setArticleSelect(articleIndex);
  };

  const handleNewArticle = async (title) => {
    try {
      const newArticleResponse = await newArticle(title);
      const id = newArticleResponse.data.addArticle.id;

      const articles = await getArticles();
      setArticles(articles);
      setEditView('home')
      setArticleSelect(id);
    } catch (err) {
      console.log("Error", err);
    }
  };

  const handleEditText = () => {
    console.log("Edit text")
  }

  const getSelectedArticle = (id) => {
    return articles.find((article) => article.id == id);
  };

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
              articles={articles}
              handleArticleSelect={handleArticleSelect}
            />
          </Col>
          <Col id='article-edit-display' xs={10}>
            <ArticleDisplay
              mode={mode}
              saveText={handleEditText}
              article={
                getSelectedArticle(articleSelect) || {
                  title: "",
                  content: "",
                }
              }
            />
            {mode === "editing" ? (
              <Editor
                handleCancel={() => setEditView('home')}
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
