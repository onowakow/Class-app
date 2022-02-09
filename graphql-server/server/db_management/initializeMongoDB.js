const { MongoClient } = require("mongodb");
const ObjectID = require("mongodb").ObjectID;

require("dotenv").config();

const url = process.env.MONGODB_URL;

async function initializeMongoDB() {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db();
    const lessonCollection = db.collection("lessons");

    await lessonCollection.deleteMany();
    console.log("Deleted all documents in lessons.");

    const newLesson = {
      id: 1,
      lesson_title: "Understanding React",
      lesson_description: "A beginner's guide to a popular framework",
      sections: [
        {
          _id: ObjectID(),
          title: "Introduction",
          content:
            "Before starting this course, you should be familiar with JavaScript, HTML, and CSS.",
        },
        {
          _id: ObjectID(),
          title: "Thinking in modules",
          content:
            "React splits the DOM into components and allows one to conditionally render and update components as the user interacts.",
        },
        {
          _id: ObjectID(),
          title: "State",
          content: "State is what makes React components dynamic.",
        },
        {
          _id: ObjectID(),
          title: "Hooks",
          content: "With hooks, functional components can also have state.",
        },
      ],
    };

    const result = await lessonCollection.insertOne(newLesson);
    console.log("Successfully added lesson. _id:", result.insertedId);

    // Counter initialize
    const counterCollection = db.collection("counters");
    await counterCollection.deleteOne({ _id: "lessons" });
    await counterCollection.insertOne({ _id: "lessons", current: 1 });
    console.log("Reset lessons counter.");
  } catch (err) {
    console.log("Failed to initialize DB. Error:", err);
  } finally {
    client.close();
  }
}

initializeMongoDB();
