import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Form = () => {
  const { value, startDate, endDate, select, radio, setRadio } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const onSubmit = () => {
    setShow(true);
  };

  return (
    <div>
      <input
        type="radio"
        name=""
        className="me-2"
        checked={radio === "One way"}
        value="One way"
        onChange={(e) => setRadio(e.target.value)}
      />
      <label className="me-3">One way</label>

      <input
        type="radio"
        name=""
        className="me-2"
        checked={radio === "Round trip"}
        value="Round trip"
        onChange={(e) => setRadio(e.target.value)}
      />
      <label>Round Trip</label>
      <br />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>From: {value.From}</Modal.Body>
        <Modal.Body>To: {value.To}</Modal.Body>
        <Modal.Body>Start-Date: {startDate?.toLocaleDateString()}</Modal.Body>
        <Modal.Body>End-Date: {endDate?.toLocaleDateString()}</Modal.Body>
        <Modal.Body>Passengers/travel class: {select}</Modal.Body>
        <Modal.Body>
          Voucher or event code: {value.Voucher_or_event_code}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <Button
        onClick={onSubmit}
        variant="danger"
        className="mx-auto mt-4 mb-4 w-50"
      >
        Book Now
      </Button>
    </div>
  );
};

export default Form;
