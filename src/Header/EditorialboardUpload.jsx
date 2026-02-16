import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

import Api from "../Pdfs/Api";

const EditorialboardUpload = () => {
  const [editorialboard, setEditorialboard] = useState({
    name: "",
    designation: "",
    email: "",
    address: "",
    cv: null,
  });

  const { name, designation, email, address, cv } = editorialboard;

  // Handle form submission
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
    formData.append("source", "ijace"); // always ijace

    try {
      const response = await Api.post("/editorialboardupload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Editorial Board Details Saved Successfully", response.data);
      alert("Editorial Board Details Saved successfully ✅");

      // Reset form
      setEditorialboard({
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
    setEditorialboard({ ...editorialboard, [name]: value });
  };

  // Handle CV file input
  const handleFileChange = (e) => {
    setEditorialboard({ ...editorialboard, cv: e.target.files[0] });
  };

  return (
    <Container className="reviews-container mt-5">
      <h1 className="text-center sub_title">Editorial Board Members</h1>

      <h3>Invitation to Join Our Editorial Board</h3>
      {/* <p>
        IJACE is seeking dedicated and qualified researchers to join its
        Editorial Team. Like our other journals, IJACE aims to be a valuable
        resource for academicians, researchers, and students across the globe.
        We invite you to support this initiative by becoming a part of our
        editorial team.
      </p> */}

      <Row className="mb-4">
        <Col xs={12} className="contact-form">
          <h5>Please enter the details for Editorial Board Membership.</h5>
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

export default EditorialboardUpload;
