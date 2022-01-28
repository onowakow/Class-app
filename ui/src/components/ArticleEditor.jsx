import React from "react";
import { useState, useEffect } from 'react'

const ArticleEditor = ({ content }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(content)
  }, [content])

  const handleTextChange = (event) => {
    setText(event.target.value)
  }
  return (
    <textarea
      value={text}
      onChange={handleTextChange}
      className="textarea-add-text"
    ></textarea>
  );
};

export default ArticleEditor;
