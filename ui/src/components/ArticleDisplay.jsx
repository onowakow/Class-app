import React from "react";
import { useState } from "react";
import SectionEditControlBar from "./SectionEditControlBar.jsx";
import ArticleEditor from "./ArticleEditor.jsx";

// mode can be 'editing' or 'viewing.'

const ArticleDisplay = ({ editView, changeEditView, saveText, article, mode }) => {
  const content = article.content
  const title = article.title

  const [editedContent, setEditedContent] = useState(content)
  const [editedTitle, setEditedTitle] = useState(title)

  const handleCancel = () => {
    changeEditView('home')
    setEditedContent(content)
  }

  const handleContentChange = (e) => {
    setEditedContent(e.target.value)
  }

  const handleSaveText = () => {
    saveText({
      content,
      title
    })
    changeEditView('home')
  }

  return (
    <>
      <div className="bin article">
        <article>
          <h2 className="article-title">{title}</h2>
          {editView === 'article-text' ? <ArticleEditor handleContentChange={handleContentChange} content={editedContent} /> : <>{content}</>}
        </article>
        {mode === "editing" ? (
          <SectionEditControlBar
            changeEditView={changeEditView}
            handleCancel={handleCancel}
            saveText={handleSaveText}
            editView={editView}
          />
        ) : null}
      </div>
    </>
  );
};

export default ArticleDisplay;
