import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import SectionNavigation from "./SectionNavigation.jsx";
import ArticleDisplay from "./ArticleDisplay.jsx";
import Editor from "./Editor.jsx";

const LessonDisplay = ({
  handleEditText,
  lesson,
  mode,
  editView,
  changeEditView,
  handleNewArticle,
  articleIdSelect,
  handleArticleIdSelect,
}) => {
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

  const getArticle = (lesson, articleId) => {
    const articles = getArticleList(lesson);
    const article = articles.find((article) => article.id === articleId);
    return article;
  };

  const handleEditViewChange = () => {
    console.log("placeholder for handleEditViewChange");
  };

  return (
    <>
      <h2 className="lesson-title">{lesson.lesson_title}</h2>
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
