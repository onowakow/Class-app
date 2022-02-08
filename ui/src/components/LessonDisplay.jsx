import React from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import SectionNavigation from './SectionNavigation.jsx';
import ArticleDisplay from './ArticleDisplay.jsx';
import ButtonRenderer from './ButtonRenderer.jsx';
import FormWrapper from './FormWrapper.jsx';
import Form from 'react-bootstrap/Form';

const initialInputs = {
  title: ''
};

const LessonDisplay = ({
  handleEditText,
  lesson,
  mode,
  articleIdSelect,
  handleNewArticle,
  handleArticleIdSelect
}) => {
  const [isArticleEdit, setIsArticleEdit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState(initialInputs);
  const [currentlySubmitting, setCurrentlySubmitting] = useState(false);

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

  // Form handling
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentlySubmitting(true);

    if (inputs.title === '') {
      console.log('Warning: No blank titles.');
      return;
    }

    await handleNewArticle(inputs.title);
    setCurrentlySubmitting(false);
    handleEndEdit();
    setInputs(initialInputs);
  };

  const handleStartEdit = () => {
    setIsEditing(true);
  };

  const handleEndEdit = () => {
    setIsEditing(false);
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
        {mode === 'editing' ? (
          <ButtonRenderer
            buttonName="New article"
            isContentActive={isEditing}
            activateContent={handleStartEdit}
          >
            <FormWrapper
              currentlySubmitting={currentlySubmitting}
              formType="article"
              formDescription="To create a new article, give it a title. You will be able to add content to it later."
              handleSubmit={handleSubmit}
              handleEndEdit={handleEndEdit}
            >
              <>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    className="form-control"
                    type="text"
                    alt="title"
                    placeholder="Enter title"
                    value={inputs.title || ''}
                    name="title"
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </>
            </FormWrapper>
          </ButtonRenderer>
        ) : null}
      </Col>
    </>
  );
};

export default LessonDisplay;
