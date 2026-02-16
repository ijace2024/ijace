import './Layout.css';

import { Col, Container, Row } from 'react-bootstrap';

import AsideBar from '../Components/AsideBar';
import Footer from '../Components/Footer'
import Header from '../Header/Header';
import Info from '../Header/Info';
import NavigationBar from '../Header/NavigationBar';
import News from '../Announcement/News';
import { Outlet } from 'react-router-dom';
import React from 'react';
import SidePanel from '../Components/SidePanel';

const Layout = () => {
  return (
    <div id="main">
      <Info/>
      <Header />
      <NavigationBar />
      {/* <News/> */}

      {/* <Container fluid className="py-3 layout-container"> */}
      <Container fluid className="py-3 layout-container">

        <Row>
           <Col lg={3} md={4} sm={12} className=''>
            <AsideBar />
          </Col>
          <Col lg={6} md={6} sm={12} className="mb-1">
            <div className="content-area p-3 shadow-sm bg-white rounded">
              <Outlet />
            </div>
          </Col>

          <Col lg={3} md={4} sm={12} className=''>
            <SidePanel />
          </Col>
        </Row>
      </Container>

      <Footer/>
    </div>
  );
};

export default Layout;
