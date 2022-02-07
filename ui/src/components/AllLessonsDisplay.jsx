import React from "react";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import NewArticleEditor from "./NewArticleEditor.jsx";

const AllLessonsDisplay = ({
  setView,
  setLessonIdSelect,
  lessons,
  mode,
  handleNewLesson,
}) => {
  if (!lessons) return <p>Loading lessons...</p>;

  const handleLessonSelect = (id) => {
    setLessonIdSelect(id)
    setView('lesson')
  }

  return (
    <>
      <div id="lessons">
        {lessons.map((lesson) => (
          <Card
            onClick={() => handleLessonSelect(lesson.id)}
            className="lesson-card"
            key={lesson.id}
          >
            <Card.Body>
              <Card.Title>{lesson.lesson_title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {lesson.sections.length} sections
              </Card.Subtitle>
              <Card.Text>{lesson.lesson_description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      {mode === "editing" ? (
        <NewArticleEditor handleNewLesson={handleNewLesson} />
      ) : null}
    </>
  );
};

export default AllLessonsDisplay;
