import React from "react";
import { useState } from "react";
import SectionEditControlBar from "./SectionEditControlBar.jsx";
import ArticleEditor from "./ArticleEditor.jsx";

// mode can be 'editing' or 'viewing.'

const ArticleDisplay = ({ saveText, article, mode }) => {
  const [isTextEdit, setIsTextEdit] = useState(false);
  const content = article.content;
  const title = article.title;

  return (
    <>
      <div className="bin article">
        <article>
          <h2 className="article-title">{title}</h2>
          {isTextEdit ? <ArticleEditor content={content} /> : <>{content}</>}
        </article>
        {mode === "editing" ? (
          <SectionEditControlBar
            saveText={saveText}
            isTextEdit={isTextEdit}
            setIsTextEdit={setIsTextEdit}
          />
        ) : null}
      </div>
    </>
  );
};

export default ArticleDisplay;
