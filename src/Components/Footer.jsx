import './Footer.css';

import { Col, Container, Row } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';

import { CiLinkedin } from 'react-icons/ci';
import VisitorCount from './VisitorCount';
import axios from 'axios';

const Footer = () => {
  const [totalCount, setTotalCount] = useState(0);

  // useEffect(() => {
  //   // Determine API base URL based on environment
  //   const apiBaseUrl = process.env.REACT_APP_API_URL || 
  //                      (window.location.hostname === 'localhost' 
  //                        ? "http://localhost:8080" 
  //                        : "https://api.ijmsabc.org");
    
  //   axios
  //     .get(`${apiBaseUrl}/api/ijmsabc/visitors/stats`)
  //     .then((res) => {
  //       if (Array.isArray(res.data) && res.data.length > 0) {
  //         // ✅ Calculate total visitors (sum of all counts)
  //         const total = res.data.reduce((sum, item) => {
  //           const value =
  //             typeof item.count === "number"
  //               ? item.count
  //               : parseInt(item.count || 0, 10);
  //           return sum + value;
  //         }, 0);
  //         setTotalCount(total);
  //       }
  //     })
  //     .catch((err) => console.error("Error fetching total visitors:", err));
  // }, []);

  return (
    <footer className="footer bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          
          {/* Contact Info */}
          <Col md={4} className="mb-3 mb-md-0">
            <div className="phone-wrapper d-flex justify-content-center justify-content-md-start align-items-center">
              <FaPhone className="me-2" />
              <span className="phone">+91-8143123534</span>
            </div>
          </Col>
          
          {/* Copyright */}
          <Col md={4} className="mb-3 mb-md-0 text-center">
            <p className="mb-0">&copy; 2026 IJACE. All rights reserved.</p>
          </Col>

          {/* Social Icons + Visitor Count */}
          <Col md={4} className="text-center text-md-end">
            <div className="icons mb-2">
              <a href="#" className="icon me-3"><FaFacebook /></a>
              <a href="#" className="icon me-3"><FaInstagram /></a>
              <a href="#" className="icon me-3"><FaTwitter /></a>
              <a href="#" className="icon"><CiLinkedin /></a>
            </div>

            {/* ✅ Display Total Visitors */}
           
          </Col>

           {/*<div className="visitor-count-wrapper mt-2">
              <VisitorCount count={totalCount} title="Total Visitors" />
            </div>*/}
        </Row>
        

        {/* Developer Credit */}
        <Row className="mt-3">
          <Col className="text-center">
            <p className="mb-0 developer-credit">
              Designed and Developed by V. Pranava Manjunath, R. Arjuna Rao
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
