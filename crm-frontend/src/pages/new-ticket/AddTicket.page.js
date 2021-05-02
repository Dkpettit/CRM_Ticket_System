import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { shortText } from "../../utils/validation";

const initialFrmData = {
  subject: '',
  issueDate: '',
  detail: '',
};

const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
};

export const AddTicket = () =>
{

  const [frmData, setFrmData] = useState(initialFrmData);
  const [frmDataError, setFrmDataError] = useState(initialFrmError);

   useEffect(() => {}, [frmData, frmDataError]);

  const handleOnSubmit = async (e) =>
  {
    e.preventDefault()

    setFrmDataError(initialFrmError);

    const isSubjectValid = await shortText(frmData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isSubjectValid,
    })

  }

  const handleOnChange = e =>
  {
   const { name, value } = e.target;

    setFrmData({
      ...frmData,
      [name]: value,
    });
       
  }
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmdt={frmData}
            frmDataError={frmDataError}
          />
        </Col>
      </Row>
    </Container>
  );
};
