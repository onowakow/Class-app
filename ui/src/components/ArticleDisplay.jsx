import React from "react";

const ArticleDisplay = ({ article }) => {
  const title = article.title;
  const content = article.content;

  return (
    <article className="article">
      <h2 className="article-title">{title}</h2>
      {content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </article>
  );
};

export default ArticleDisplay;
