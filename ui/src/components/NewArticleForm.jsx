import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const initialInputs = {
  title: "",
  type: "Content"
};

const NewArticleForm = ({ handleNewArticle }) => {
  const [inputs, setInputs] = useState(initialInputs);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputs.title === "") {
      console.log('Warning: No blank titles.')
      return 
    }
    
    handleNewArticle(inputs.title);
    setInputs(initialInputs);

  };

  return (
    <div className="form-container">
      <p>New section: {inputs.title !== "" ? <b>{inputs.title}</b> : null}</p>
      <Form onSubmit={handleSubmit} className="input-form">
        <Form.Group>
          <Form.Label>Section type</Form.Label>
          <Form.Select 
            className="form-control"
            name="type"
            value={inputs.type}
            onChange={handleInputChange}
          >
            <option>Content</option>
            <option>Quiz</option>
            <option>Other</option>
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
      </Form>
    </div>
  );
};

export default NewArticleForm;
