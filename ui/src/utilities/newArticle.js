const newArticle = async (title, lessonId) => {
  const query = `
    mutation {
      addArticle(article: {
        title:"${title}"
      }, lessonId: ${lessonId}){
        id
      }
    }
  `;

  const response = await fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  return await response.json();
};

export default newArticle