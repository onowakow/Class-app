async function deleteArticle(lessonId, articleId) {
  const query = `
    mutation {
      deleteArticle (
        lessonId: ${lessonId}
        articleId: ${articleId}
      )
    }
  `;

  const response = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });

  return await response.json();
}

export default deleteArticle;
