import React from "react";
import FormWrapper from "./FormWrapper.jsx";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const initialInputs = {
  title: "",
  description: "",
}

const formType = "lesson"
const formDescription = "Give your lesson a title and a short description. After creating a lesson, you will be able to edit it."

const NewArticleEditor = ({ handleNewLesson }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputs, setInputs] = useState(initialInputs);
  const [currentlySubmitting, setCurrentlySubmitting] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentlySubmitting(true)

    if (inputs.title === "") {
      console.log("Warning: No blank titles.");
      return;
    }

    await handleNewLesson(inputs);
    setCurrentlySubmitting(false)
    handleEndEdit();
    setInputs(initialInputs);
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleEndEdit = () => {
    setIsEditing(false);
  };

  return !isEditing ? (
    <Button className="new-section-btn" onClick={handleStartEditing}>
      New {formType}
    </Button>
  ) : isEditing ? (
    <FormWrapper
      currentlySubmitting={currentlySubmitting}
      handleSubmit={handleSubmit}
      formType={formType}
      formDescription={formDescription}
      handleEndEdit={handleEndEdit}
    >
      {/* children below */}
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
    </FormWrapper>
  ) : null;
};

export default NewArticleEditor;
