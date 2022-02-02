import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import SectionNavigation from "./SectionNavigation.jsx";
import ArticleDisplay from "./ArticleDisplay.jsx";
import NewArticleEditor from "./NewArticleEditor.jsx";

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
  const [isArticleEdit, setIsArticleEdit] = useState(false)

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

  return (
    <>
      <h2 className="lesson-title">{lesson.lesson_title}</h2>
      <Col xs={2} className="section-nav">
        <SectionNavigation
          isEdit={isArticleEdit}
          articles={getArticleList(lesson)}
          handleArticleSelect={handleArticleIdSelect}
        />
      </Col>
      <Col id="article-edit-display" xs={10}>
        <ArticleDisplay
          isEdit={isArticleEdit}
          setIsEdit={setIsArticleEdit}
          mode={mode}
          lessonId={lesson.id}
          saveText={handleEditText}
          article={getArticle(lesson, articleIdSelect)}
        />
        {mode === "editing" ? (
          <NewArticleEditor
            handleNewArticle={handleNewArticle}
          />
        ) : null}
      </Col>
    </>
  );
};

export default LessonDisplay;
