import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import ButtonRenderer from "./ButtonRenderer.jsx";
import FormWrapper from "./FormWrapper.jsx";

const initialInputs = {
  title: "",
  description: "",
};

const AllLessonsDisplay = ({
  setView,
  setLessonIdSelect,
  lessons,
  mode,
  handleNewLesson,
}) => {
  if (!lessons) return <p>Loading lessons...</p>;
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState(initialInputs);
  const [currentlySubmitting, setCurrentlySubmitting] = useState(false);

  const handleLessonSelect = (id) => {
    setLessonIdSelect(id);
    setView("lesson");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentlySubmitting(true);

    if (inputs.title === "") {
      console.log("Warning: No blank titles.");
      return;
    }

    await handleNewLesson(inputs);
    setCurrentlySubmitting(false);
    handleEndEdit();
    setInputs(initialInputs);
  };

  const handleStartEdit = () => {
    setIsEditing(true);
  };

  const handleEndEdit = () => {
    setIsEditing(false);
  };

  if (!lessons) return <p>Loading...</p>;

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
        <ButtonRenderer
          buttonName="New lesson"
          isContentActive={isEditing}
          activateContent={handleStartEdit}
        >
          <FormWrapper
            currentlySubmitting={currentlySubmitting}
            formType="lesson"
            formDescription="Give your lesson a title and a short description. After creating a lesson, you will be able to edit it."
            handleSubmit={handleSubmit}
            handleEndEdit={handleEndEdit}
          >
            <>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  alt="title"
                  placeholder="Enter title"
                  value={inputs.title || ""}
                  name="title"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  alt="description"
                  placeholder="Enter description"
                  value={inputs.description || ""}
                  name="description"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </>
          </FormWrapper>
        </ButtonRenderer>
      ) : null}
    </>
  );
};

export default AllLessonsDisplay;
