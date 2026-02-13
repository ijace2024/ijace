import './Header.css';

import { Col, Container, Row } from 'react-bootstrap';

import React from 'react';
import UserInfoPortal from '../services/UserInfoPortal';

const Header = () => {
  const text = "International Journal Of Applied Computing and Engineering";

  const text1="";

  const text2="(IJACE)";

  // Function to wrap first letter of each word in a span
  const styledTitle = text.split(" ").map((word, index) => (
    <span key={index}>
      <span className="first-letter">{word.charAt(0)}</span>
      {word.slice(1)}{" "}
    </span>
  ));
  


  return (
    <>
      <div id="header" className="
      
      py-3 border-bottom shadow-sm">
        <Container fluid>
          <Row className="align-items-center">
            <Col
              xs={12}
              className="d-flex align-items-center justify-content-center flex-column flex-md-row"
            >
             
              <img
                // src="/logo.jpeg"
                src='/IjaceLogo.png'
                alt="IJACE Logo"
                className="logo mb-3 mb-md-0 me-md-3"
              />
            
              <div className="text-center text-md-start">
              

                <Row className="title-wrapper text-center">
                   <h1 className="title mb-2">International Journal of</h1>
               <h2 className="title mb-2">Applied Computing and Engineering</h2>
               <h3 className="title mb-2">(IJACE)</h3>
                   </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


     
    </>
  );
};

export default Header;




// import './Header.css';

// import { Col, Container, Row } from 'react-bootstrap';

// import React from 'react';

// const Header = () => {
//   const text = "International Journal Of";
//   const text1 = "Management Science And Business Conclave ";
//   const text2 = "(IJMSABC)";

//   // Function to wrap first letter of each word in a span
//   const styleWords = (sentence) =>
//     sentence.split(" ").map((word, index) => (
//       <span key={index}>
//         <span className="first-letter">{word.charAt(0)}</span>
//         {word.slice(1)}{" "}
//       </span>
//     ));

//   return (
//     <header id="header" className="bg-light py-3 border-bottom shadow-sm">
//       <Container fluid>
//         {/* <Row className="align-items-center justify-content-center text-center"> */}
//         <Row>
//           <Col xs={12} className="d-flex flex-column align-items-center">
//             <img
//               src="/logo.jpeg"
//               alt="IJMSABC Logo"
//               className="logo mb-3"
//             />

//             {/* <div className="title-wrapper text-center">
//               <h1 className="title mb-2">{styleWords(text)}</h1>
//               <h2 className="title mb-2">{styleWords(text1)}</h2>
//               <h3 className="title mb-2">{styleWords(text2)}</h3>
//                   </div> */}

//                   <Row className="title-wrapper text-center">
//                      <h1 className="title mb-2">International Journal Of</h1>
//               <h2 className="title mb-2">Management Science And Business Conclave</h2>
//               <h3 className="title mb-2">(IJMSABC)</h3>
//                   </Row>
//           </Col>
//         </Row>
//       </Container>
//     </header>
//   );
// };

// export default Header;





