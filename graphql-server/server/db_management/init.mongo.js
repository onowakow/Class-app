db.lessons.removeMany({})

const lessonsDB = [
  {
    id: 1,
    lesson_title: 'Understanding React',
    sections: [
      {
        id: 1,
        title: 'Introduction',
        content: 'Before starting this course, you should be familiar with JavaScript, HTML, and CSS.'
      }, 
      {
        id: 2,
        title: 'Thinking in modules',
        content: 'React splits the DOM into components and allows one to conditionally render and update components as the user interacts.'
      }
    ]
  },
]

db.lessons.insertMany(lessonsDB)
const count = db.lessons.count()
print('Inserted', count, 'lessons')

db.lessons.createIndex({ id: 1 }, { unique: true })
db.lessons.createIndex({ lesson_title: 1 })
