import React from 'react';

const ArticleEditor = ({ handleContentChange, content }) => {
  return (
    <textarea
      alt="Article body"
      value={content}
      onChange={handleContentChange}
      className="textarea-add-text"
    ></textarea>
  );
};

export default ArticleEditor;
