import "babel-polyfill";
import "whatwg-fetch";
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useState, useEffect } from "react";
import NewArticleForm from "./components/NewArticleForm.jsx";
import ArticleDisplay from "./components/ArticleDisplay.jsx";
import SectionNavigation from "./components/SectionNavigation.jsx";
import NavigationBar from './components/NavigationBar.jsx';
import EditingControlBar from "./components/EditingControlBar.jsx";
import { Container, Row, Col } from 'react-bootstrap'

const getArticles = async () => {
  const query = `
    { articleList {
      id
      title
      content
    }}
  `
  const response = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })

  const result = await response.json();
  return result.data.articleList
}

const newArticle = async (title) => {
  const query = `
    mutation {
      addArticle( article: {
        title:"${title}"
      }){
        id
      }
    }
  `

  const response = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })
  
  return await response.json()
}

const App = () => {
  const [articles, setArticles] = useState([])
  const [articleSelect, setArticleSelect] = useState(0)
  const [mode, setMode] = useState('editing')

  useEffect(() => {
    getArticles()
      .then(response => setArticles(response))
      .catch(error => console.log("Error:", error))
  }, [])

  const handleModeChange = (mode) => {
    setMode(mode)
  }

  const handleArticleSelect = (articleIndex) => {
    setArticleSelect(articleIndex)
  }

  const handleNewArticle = async (title) => {
    try {
      const newArticleResponse = await newArticle(title)
      const id = newArticleResponse.data.addArticle.id

      const articles = await getArticles()
      setArticles(articles)

      setArticleSelect(id)

    } catch (err) {
      console.log("Error", err)
    }
  }

  const getSelectedArticle = (id) => {
    return articles.find(article => article.id == id);
  }

  return (
    <div className="app">
      <Container id="app-container">
        <Row>
          <NavigationBar mode={mode} handleModeChange={handleModeChange} />
        </Row>
        <Row>
          <Col xs={2} className="section-nav">
            <SectionNavigation articles={articles} handleArticleSelect={handleArticleSelect} />
          </Col>
          <Col xs={10}>
            <ArticleDisplay article={getSelectedArticle(articleSelect) || {title: "", content: [""]}} />
            {mode === 'editing' ? (
              <>
                <NewArticleForm handleNewArticle={handleNewArticle} />
                <EditingControlBar />
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
