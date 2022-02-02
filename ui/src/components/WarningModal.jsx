import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const WarningModal = ({ 
  show, 
  handleClose, 
  handleContinue,
  title,
  body,
  closeBtnText,
  continueBtnText
}) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            {closeBtnText}
          </Button>
          <Button variant="danger" onClick={handleContinue}>
            {continueBtnText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default WarningModal;
