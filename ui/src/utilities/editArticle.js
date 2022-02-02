async function editArticle(article, lessonId) {
  const query = `
    mutation {
      modifyArticle(
        article: {
          title: "${article.title}"
          content: """${article.content}"""
        }
        lessonId: ${lessonId}
        articleId: ${article.id}
      ) {
        title
        content
        id
      }
    }
  `;

  const response = await fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  return await response.json;
}

export default editArticle;
