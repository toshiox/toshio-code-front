import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Alert = ({ show, title = 'Alerta', message, modalSize = 'sm', handleClose, variant = 'success' }) => {
  return (
    <Modal show={show} size={modalSize} onHide={handleClose}>
      <Modal.Header closeButton className={`bg-${variant}`}>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Alert;
