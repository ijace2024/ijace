import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

import Api from "../Pdfs/Api";

const Reviewers = () => {
  const [reviewers, setReviewers] = useState({
    name: "",
    designation: "",
    email: "",
    address: "",
    cv: null,
  });

  const { name, designation, email, address, cv } = reviewers;

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cv) {
      alert("Please upload a CV file.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("cv", cv);
    formData.append("source", "ijace"); // Always ijace

    try {
      const response = await Api.post("/reviews", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Reviewer Details Saved Successfully", response.data);
      alert("Reviewer Details Saved successfully ✅");

      // Reset form
      setReviewers({
        name: "",
        designation: "",
        email: "",
        address: "",
        cv: null,
      });
    } catch (error) {
      console.error(
        "Error occurred:",
        error.response ? error.response.data : error.message
      );
      alert("Upload failed ❌");
    }
  };

  // Handle text input changes
  const handleInput = (e) => {
    const { name, value } = e.target;
    setReviewers({ ...reviewers, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setReviewers({ ...reviewers, cv: e.target.files[0] });
  };

  return (
    <Container className="reviews-container mt-5">
      <h1 className="text-center sub_title">Reviewers</h1>

      {/* <p>
        IJACE serves as a valuable platform for academicians, researchers,
        and students worldwide to share knowledge and innovations in management
        and business sciences. We warmly invite your support and collaboration
        as a reviewer to strengthen the journal’s academic excellence.
      </p> */}

      <Row className="mb-4">
        <Col xs={12} className="contact-form">
          <h5>Please enter the details for Reviewers.</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name*</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={name}
                placeholder="Enter Your Name"
                required
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email*</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                placeholder="Enter Your Email"
                required
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="designation">
              <Form.Label>Designation*</Form.Label>
              <Form.Control
                type="text"
                name="designation"
                value={designation}
                placeholder="Enter Your Designation"
                required
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address*</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={address}
                placeholder="Enter Your Address"
                required
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="cv">
              <Form.Label>CV*</Form.Label>
              <Form.Control
                type="file"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                onChange={handleFileChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviewers;
