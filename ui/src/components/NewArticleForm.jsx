import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialInputs = {
  title: "",
  type: "text",
};

const NewArticleForm = ({ handleNewArticle, handleCancel }) => {
  const [inputs, setInputs] = useState(initialInputs);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  console.log(inputs)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.title === "") {
      console.log("Warning: No blank titles.");
      return;
    }

    handleNewArticle(inputs.title);
    setInputs(initialInputs);
  };

  return (
    <div className="bin form-container">
      <h3>Create new section: <em>{inputs.title}</em></h3>
      <p>
        Choose your section type and give it a name. Sections can currently be
        text or a quiz. After creating the section, you will be
        able to add content to it. Don't worry: you will be able to edit the
        title and section type at any point.
      </p>
      <Form onSubmit={handleSubmit} className="bin input-form">
        <Form.Group>
          <Form.Label>Section type</Form.Label>
          <Form.Select
            className="form-control"
            name="type"
            value={inputs.type}
            onChange={handleInputChange}
          >
            <option value="text">Text</option>
            <option value="quiz">Quiz</option>
            <option value="other">Other</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Enter title"
            value={inputs.title || ""}
            name="title"
            onChange={handleInputChange}
          />
        </Form.Group>
        {/*
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            className="form-control"
            type="text"
            placeholder="Enter content"
            value={inputs.content || ""}
            name="content"
            onChange={handleInputChange}
          />
        </Form.Group>
        */}
        <Button variant="primary" type="submit">
          Add section
        </Button>
        <Button className="nav-btn" variant="warning" onClick={handleCancel}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default NewArticleForm;
