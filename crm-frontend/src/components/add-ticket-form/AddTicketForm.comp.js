import React from "react";
import JumboTron from 'react-bootstrap/Jumbotron';
import { Form, Button, Row, Col, } from "react-bootstrap";

import PropTypes from 'prop-types';

import "./add-ticket-form.style.css";


export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmdt, frmDataError }) => {
  return (
      <JumboTron className="mt-3 add-new-ticket bg-light">
          <h1 className="text-info text-center">Add a new Ticket...</h1>
          <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              value={frmdt.subject}
              onChange={handleOnChange}
              placeholder="Enter Subject"
              required
                      />
                      <Form.Text className="text-danger">{frmDataError.subject && "Subject is required"}</Form.Text>
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Date
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              value={frmdt.issueDate}
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            value={frmdt.detail}
            rows="5"
            onChange={handleOnChange}
            required
          />
        </Form.Group>

        <Button type="submit" variant="info" block>
          Submit
        </Button>
      </Form>
    </JumboTron>
  );
};

AddTicketForm.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChange: PropTypes.func.isRequired,
    frmdt: PropTypes.object.isRequired,
    frmDataError: PropTypes.object.isRequired
}