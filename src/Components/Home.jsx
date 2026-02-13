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

      
      <div className='home-para'>
       <p>International Journal of
Applied Computing and Engineering
(IJACE)</p>   
    {/* <h3> Why publish with the Management Journal?</h3>
   <ul>
      <li>This is a peer-reviewed Management Journal</li>
      <li> DOI from CrossRef to each published paper</li>
      <li>Publication Certificate will be provided to all authors</li>
      <li>Open access journal (High Citation Rate)</li>
      <li>This Management Journal is indexed by various reputed databases</li>
      <li>Rapid publication after acceptance</li>
    </ul>    */}

      </div>

      {/* <div>
        <p>IJMSABC QR Code</p>
        <img src="/ijmsabc_qr.png" alt="qrcode" />
      </div> */}

       {/* <Card className="text-center shadow-sm my-4" style={{ maxWidth: "300px", margin: "0 auto" }}>
      <Card.Body>
        <Card.Title className="mb-3">IJMSABC QR Code</Card.Title>
        <Card.Img 
          variant="top" 
          src="/ijmsabc_qr.png" 
          alt="IJMSABC QR Code" 
          style={{ width: "200px", height: "200px", objectFit: "contain", margin: "0 auto" }}
        />
      </Card.Body>
    </Card> */}
        
    </section>
    {/* <input type="color" /> */}
    </>
  );
};

export default Home;
