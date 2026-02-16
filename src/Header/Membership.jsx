import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from "react";

import Api from "../Pdfs/Api";

const Membership = () => {
  const [membership, setMembership] = useState({
    name: "",
    designation: "",
    email: "",
    address: "",
    membershiptype: "",
    cv: null, // file
  });

  const { name, designation, email, address, membershiptype, cv } = membership;

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
    formData.append("membershipType", membershiptype); // matches backend
    formData.append("email", email);
    formData.append("address", address);
    formData.append("source", "ijace"); // always ijace
    formData.append("cv", cv); // file

    try {
      const response = await Api.post("/membership/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Membership Details Saved Successfully", response.data);
      alert("Membership Details Saved successfully ✅");

      // Reset form
      setMembership({
        name: "",
        designation: "",
        email: "",
        address: "",
        membershiptype: "",
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
    setMembership({ ...membership, [name]: value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setMembership({ ...membership, cv: e.target.files[0] });
  };

  return (
    <Container className="reviews-container mt-5">
      <h1 className="text-center sub_title">Membership</h1>

      <Row className="mb-4">
        <Col xs={12} className="contact-form">
          <h5>Please enter the details for Membership.</h5>
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

            <Form.Group className="mb-3" controlId="membershiptype">
              <Form.Label>Membership Type*</Form.Label>
              <Form.Control
                as="select"
                name="membershiptype"
                value={membershiptype}
                onChange={handleInput}
                required
              >
                <option value="">-- Select Membership Type --</option>
                <option value="Annual">Annual</option>
                <option value="Life">Life</option>
              </Form.Control>
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

export default Membership;