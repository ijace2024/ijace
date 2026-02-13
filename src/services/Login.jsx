import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      if (!userCredential.user.emailVerified) {
        alert("Please verify your email first.");
        return;
      }

      // ✅ Save user in localStorage
      const userData = {
        email: userCredential.user.email,
        uid: userCredential.user.uid,
      };
      localStorage.setItem("USER_DATA", JSON.stringify(userData));

      alert("Login successful ✅");
      onLogin(userCredential.user);
      navigate("/admindashboard"); // redirect to admin dashboard
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-3">Login</h3>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit" className="w-100 mb-2" variant="primary">
                Login
              </Button>
              <div className="text-center">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
