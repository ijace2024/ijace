import { Button, Card, Col, Container, Row } from "react-bootstrap";

import React from "react";

const Downloads = () => {
  return (
    <Container className="my-5">
      {/* <h1 className="text-center mb-4">Downloads</h1> */}

   <h2 className="fw-bold author text-center mb-3">
           Downloads
          </h2>

      <Row className="g-4 justify-content-center">
        {/* Cover Page */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title>Cover Page</Card.Title>
              <a
                href="/blank.pdf"
                download="Cover Page.pdf"  // ✅ Forces download
                className="mt-auto"
              >
                <Button variant="primary" className="w-100">
                  Download PDF
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/* Undertaking by Authors */}
        <Col md={6} lg={4}>
          <Card className="shadow-sm border-0 h-100">
            <Card.Body className="d-flex flex-column text-center">
              <Card.Title>Undertaking by Authors</Card.Title>
              <a
                href="/blank.pdf"
                download="Undertaking-by-Authors.pdf" // ✅ Custom file name
                className="mt-auto"
              >
                <Button variant="primary" className="w-100">
                  Download PDF
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Downloads;
