import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import SectionNavigation from "./SectionNavigation.jsx";
import ArticleDisplay from "./ArticleDisplay.jsx";
import Editor from "./Editor.jsx";

const LessonDisplay = ({ lesson, mode, editView, changeEditView }) => {
  const [articleIdSelect, setArticleIdSelect] = useState(1);
  // loading message
  if (lesson === undefined) {
    return (
      // add animated spinner?
      <p>Loading lesson...</p>
    );
  }

  const getArticleList = (lesson) => {
    return lesson.sections;
  };

  const handleArticleIdSelect = (id) => {
    setArticleIdSelect(id);
  };

  const getArticle = (lesson, articleId) => {
    const articles = getArticleList(lesson);
    const article = articles.find((article) => article.id === articleId);
    return article;
  };

  // PLACEHOLDERS
  const handleEditText = () => {
    console.log("placeholder for text edit");
  };

  const handleEditViewChange = () => {
    console.log("placeholder for handleEditViewChange");
  };

  const handleNewArticle = () => {
    console.log("ph for new art");
  };
  return (
    <>
      <h2 className='lesson-title'>{lesson.lesson_title}</h2>
      <Col xs={2} className="section-nav">
        <SectionNavigation
          articles={getArticleList(lesson)}
          handleArticleSelect={handleArticleIdSelect}
        />
      </Col>
      <Col id="article-edit-display" xs={10}>
        <ArticleDisplay
          editView={editView}
          changeEditView={changeEditView}
          mode={mode}
          saveText={handleEditText}
          article={getArticle(lesson, articleIdSelect)}
        />
        {mode === "editing" ? (
          <Editor
            changeEditView={changeEditView}
            editView={editView}
            handleNewArticle={handleNewArticle}
          />
        ) : null}
      </Col>
    </>
  );
};

export default LessonDisplay;
