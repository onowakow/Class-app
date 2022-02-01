import React from "react";
import { useState } from "react";
import SectionEditControlBar from "./SectionEditControlBar.jsx";
import ArticleEditor from "./ArticleEditor.jsx";

// mode can be 'editing' or 'viewing.'

const ArticleDisplay = ({ editView, changeEditView, saveText, article, mode }) => {
  const content = article.content;
  const title = article.title;

  return (
    <>
      <div className="bin article">
        <article>
          <h2 className="article-title">{title}</h2>
          {editView === 'article-text' ? <ArticleEditor content={content} /> : <>{content}</>}
        </article>
        {mode === "editing" ? (
          <SectionEditControlBar
            saveText={saveText}
            editView={editView}
            changeEditView={changeEditView}
          />
        ) : null}
      </div>
    </>
  );
};

export default ArticleDisplay;
