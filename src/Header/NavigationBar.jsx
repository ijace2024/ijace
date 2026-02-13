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
              <Nav.Link as={NavLink} to="/About" id="color">
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
              {/*<Nav.Link as={NavLink} to="/JournalPolicies" id="color">
                Ethics and Policies
              </Nav.Link> */}
              {/* <Nav.Link as={NavLink} to="/downloads" id="color">
                Downloads
              </Nav.Link> */}
              
              {/* <Nav.Link as={NavLink} to="/member" id="color">
                Membership
               
              </Nav.Link> */}
              
               {/* <select onChange={handleChange}>
      <option value="">-- Select --</option>
      <option value="/reviewers">Reviewers</option>
      <option value="/editorial-board">Editorial</option>
      <option value="/membership">Membership</option>
    </select> */}

   

{/* <select onChange={handleChange} aria-label="Navigation Select" className="mb-3" id="color1">
 
   
   <option value="/membership" >Membership</option>
  <option value="/reviewers">Reviewers</option>
  <option value="/editorial-board">Editorial Board</option>
 
</select> */}


    {/* <Nav>
  <NavDropdown title="Membership" id="membership-dropdown" className="nav-link">
    <NavDropdown.Item as={NavLink} to="/reviewers">Reviewers</NavDropdown.Item>
    <NavDropdown.Item as={NavLink} to="/editorial-board">Editorial Board Members</NavDropdown.Item>
    <NavDropdown.Item as={NavLink} to="/membership">Membership</NavDropdown.Item>
  </NavDropdown>
</Nav> */}

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
