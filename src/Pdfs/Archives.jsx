import { Button, Col, Container, Row } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'
import React from 'react'

const Archives = () => {
  return (
    <Container fluid className="py-5 px-3 px-md-4">
      {/* <Row className="mb-5">
        <Col xs={12}>
          <h1 className="text-center fw-bold mb-4">Archive</h1>
        </Col>
      </Row> */}

       <h2 className="fw-bold author text-center mb-4"> Archives</h2>
      
      <Row className="justify-content-center g-3">
        <Col xs={12} sm={6} md={5} lg={4} className="d-flex">
          <NavLink to="/Current_Issues" end className="w-100">
            <Button 
              // variant="primary" 
              className="w-100 py-2 fw-bold "
              title="View Current Issues"
              id='issue'
              
            >
              Current Issues
            </Button>
          </NavLink>
        </Col>

        <Col xs={12} sm={6} md={5} lg={4} className="d-flex">
          <NavLink to="/Previous_Issues" className="w-100">
            <Button 
              // variant="primary" 
              className="w-100 py-2 fw-bold"
              title="View Previous Issues"
              id='issue'
            >
              Previous Issues
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  )
}

export default Archives