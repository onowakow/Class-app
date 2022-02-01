import React from "react";

const ArticleEditor = ({ handleContentChange, content }) => {
  return (
    <textarea
      value={content}
      onChange={handleContentChange}
      className="textarea-add-text"
    ></textarea>
  );
};

export default ArticleEditor;
