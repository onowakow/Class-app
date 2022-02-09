import React from 'react';
import { useState, useEffect } from 'react';
import SectionEditControlBar from './SectionEditControlBar.jsx';
import ArticleEditor from './ArticleEditor.jsx';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import WarningModal from './WarningModal.jsx';

// mode can be 'editing' or 'viewing.'

const nullAlert = {
  show: false,
  variant: null,
  content: null
};

const ArticleDisplay = ({
  childComp,
  isEdit,
  setIsEdit,
  saveText,
  article,
  mode,
  lessonId,
  handleDeleteArticle
}) => {
  if (!article) return <>No articles yet!{childComp}</>;

  const articleId = article.id;

  const title = article.title;
  const content = article.content;

  const [editedContent, setEditedContent] = useState(content);
  const [editedTitle, setEditedTitle] = useState(title);
  const [alert, setAlert] = useState(nullAlert);
  const [showWarningModal, setShowWarningModal] = useState(false);

  const handleModalClose = () => setShowWarningModal(false);

  const handleModalContinue = () => {
    setIsEdit(false);
    setShowWarningModal(false);
    setEditedContent(content);
    setEditedTitle(title);
  };

  // update edit content/title when changing to different article
  useEffect(() => {
    setEditedContent(content);
    setEditedTitle(title);
  }, [content, title]);

  const handleCancel = () => {
    setShowWarningModal(true);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleTitleChange = (e) => [setEditedTitle(e.target.value)];

  const handleSaveText = async () => {
    const updatedArticle = {
      content: editedContent,
      title: editedTitle,
      id: article.id
    };
    await saveText(updatedArticle, lessonId);
    setIsEdit(false);
  };

  if (!isEdit) {
    return (
      <div className="bin article">
        <article>
          <h2 className="article-title">{title}</h2>
          <p className="article-content">{content}</p>
        </article>
        {mode === 'editing' ? (
          <>
            <Button onClick={() => setIsEdit(true)} variant="primary" className="nav-btn">
              Edit title and content
            </Button>
            <Button
              onClick={() => handleDeleteArticle(lessonId, articleId)}
              variant="danger"
              className="nav-btn"
            >
              Delete article
            </Button>
          </>
        ) : null}
        {alert.show ? <Alert variant={alert.variant}>{alert.message}</Alert> : null}
      </div>
    );
  } else {
    return (
      <>
        <WarningModal
          title="Are you sure you want to continue?"
          body="Canceling the current edit will cause the current changes to be lost."
          closeBtnText="Continue editing"
          continueBtnText="Delete changes"
          show={showWarningModal}
          handleContinue={handleModalContinue}
          handleClose={handleModalClose}
        />
        <div className="bin article">
          <article>
            <h2 className="article-title">
              <input alt="article title" onChange={handleTitleChange} value={editedTitle} />
            </h2>
            <ArticleEditor handleContentChange={handleContentChange} content={editedContent} />
          </article>
          <SectionEditControlBar
            handleCancel={handleCancel}
            saveText={handleSaveText}
            isEdit={isEdit}
          />
        </div>
      </>
    );
  }
};

export default ArticleDisplay;
