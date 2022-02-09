async function modifyArticle(article, lessonId) {
  console.log(article);
  const query = `
    mutation {
      modifyArticle(
        article: {
          title: "${article.title}"
          content: """${article.content}"""
        }
        lessonId: ${lessonId}
        article_Id:"${article._id}"
      ) {
        title
        content
        id
      }
    }
  `;

  const response = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });

  return await response.json;
}

export default modifyArticle;
