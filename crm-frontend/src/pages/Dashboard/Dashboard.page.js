import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp'

import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Link to="/add-ticket">
            <Button
              variant="info"
              style={{
                fontSize: "2rem",
                padding: "10px 30px",
              }}
            >
              Add New Ticket
            </Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total Tickets: 50</div>
          <div>Pending Tickets: 10</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">Recently added Tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
