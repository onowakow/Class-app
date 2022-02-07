async function newLesson (title, description) {
  const query = `
    mutation {
      addLesson(lesson: {
        lesson_title: "${title}"
        lesson_description: "${description}"
      }) {
        id
      }
    }
  `

  const id = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ query }) 
  })
}

export default newLesson