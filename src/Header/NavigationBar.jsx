import './NavigationBar.css';

import { Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import UserInfoPortal from '../services/UserInfoPortal';

const NavigationBar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('USER_DATA'));
    setUserData(user);
  }, []);


  const navigate = useNavigate();

  const handleChange = (e) => {
    navigate(e.target.value);
  };

  return (
    <>
      <Navbar expand="lg" sticky="top" id="navbar">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
               <Nav.Link as={NavLink} to="/AboutTheJournal" id="color"  >
                About the Journal
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" id="color"  >
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/AimsAndScope" id="color">
                Aims and Scope
              </Nav.Link>
              <Nav.Link as={NavLink} to="/AuthorGuidelines" id="color">
                Guidelines for Authors
              </Nav.Link>
              <Nav.Link as={NavLink} to="/CallForPapers" id="color">
                Call For Papers
              </Nav.Link>
              <Nav.Link as={NavLink} to="/SubmitManuscript" id="color">
                Article Submission System
              </Nav.Link>
              <Nav.Link as={NavLink} to="/EditorialBoard" id="color">
                Editorial Board
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Archives" id="color">
                Archives
              </Nav.Link>
               <Nav.Link as={NavLink} to="/conferences" id="color">
                Conferences
              </Nav.Link>
  

              <Nav.Link as={NavLink} to="/Contact" id="color">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <UserInfoPortal user={userData} />
    </>
  );
};

export default NavigationBar;
