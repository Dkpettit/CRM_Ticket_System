import React from "react";
import PropTypes from 'prop-types';
import { Row, Col, Form } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";

export const SearchForm = ({ handleOnChange, str }) =>
{
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm="3">
            Search:
          </Form.Label>
          <Col sm="9">
                      <Form.Control
                          name="searchStr"
                          placeholder="Search..."
                          onChange={handleOnChange}
                          value={str}
                      />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

SearchForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    str: PropTypes.string.isRequired
}
