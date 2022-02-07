const getLessons = async () => {
  const query = `
    {
      lessonList {
        id
        lesson_title
        lesson_description
        sections {
          id
          title
          content
        }
      }
    }
  `;
  const response = await fetch("http://localhost:3000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  return result.data.lessonList;
};

export default getLessons