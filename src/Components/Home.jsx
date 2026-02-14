import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import DarkVariantExample from '../Courosals/DarkVariantExample';
import { Helmet } from "react-helmet";
import React from 'react';

const Home = () => {
  return (
    <>
    <Helmet>
        <title>IJACE | International Journal Of Applied Computing and Engineering</title>
        <meta
          name="description"
          content="IJMSABC is a peer-reviewed international journal publishing high-quality multidisciplinary research in science, management, and technology."
        />
        {/* <link rel="canonical" href="https://www.ijmsabc.org/" /> */}
      </Helmet>
    
    
    <section className="py-5 bg-light ">
       <h1 className="mb-4 fw-bold text-primary " style={{textAlign:'center'}}>Welcome to IJACE</h1>
       <DarkVariantExample/>

      
     

     
        
    </section>

    <section className="about-section">
        <h3>Vision</h3>
        <p>The International Journal of Applied Computing and Engineering (IJACE) aspires to become a recognized international forum for disseminating pioneering research that drives computing-enabled engineering solutions and global digital transformation.</p>
      </section>
    <input type="color" />
    </>
  );
};

export default Home;
