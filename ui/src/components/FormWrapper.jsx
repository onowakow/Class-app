import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormWrapper = ({ currentlySubmitting, formType, formDescription, children, handleSubmit, handleEndEdit }) => {
  return (
    <div className="bin form-container">
      <h3>Create new {formType}</h3>
      <p>{formDescription}</p>
      <Form onSubmit={handleSubmit} className="bin input-form">

        {children}
        
        <Button variant="success" type="submit">
          {!currentlySubmitting ? (
            <>Create {formType}</>
          ) : (
            <>Submitting...</>
          )}
        </Button>

        <Button className="nav-btn" variant="warning" onClick={handleEndEdit}>
          Cancel
        </Button>
      </Form>
    </div>
  );
};

export default FormWrapper;
