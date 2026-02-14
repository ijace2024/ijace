import { Card, Col, Container, Image, Row } from 'react-bootstrap';

import React from 'react';

const members = [
  {
    name: 'Dr. Tanvir Hussein',
    position:"Associate Professor",
    Department:"Accounting & Financial Science",
    university:"Gulf University,.",
    address:"Building 1964, Road 4363, Block 743, Sanad, Kingdom of Bahrain. ",
    email:"dr.tanvir@gulfuniversity.edu.bh ",
    Profilelink: 'https://www.gulfuniversity.edu.bh/colleges/administrative-and-financial-science/departments/accounting-and-financial-science/department-staff/dr-tanvir-hussein/',
    pdf: '/assets/john.pdf',
    image: '../dummy-image.png',
  },
  

  {
    name:"Dr.Vinoth raman rangan",
    position:"Assistant Professor",
    Department:"Deanship of Quality and Academic Accreditation ",
    university:"Imam Abdulrahman Bin Faisal University",
    address:"Dammam, Saudi Arabia",
    email:"vrrangan@iau.edu.sa ",
    Profilelink:": https://www.iau.edu.sa/en/colleges/deanship-of-quality-and-academic-accreditation/faculty/dr-vinoth-raman-rangan",
    pdf:"",
    image:"../dummy-image.png",
  },

  {
    name:"Dr. Vottiprolu Vijaya Kumar ",
    position:"Publisher/ Editor in Chief / Assistant Professor",
    Department:"Institute of Management and Research",
    university:"MGM University",
    address:"Chhatrapati Sambhajinagar, Maharashtra.",
    email:"vvottiprolu@mgmu.ac.in",
    Profilelink: 'https://mgmu.ac.in/admissions/program/master-of-business-administration-mba',
    pdf:"",
    image:"../dummy-image.png",
  },

  //  {
  //   name:"Dr. Vottiprolu Vijaya Kumar ",
  //   position:"Publisher/ Editor in Chief / Assistant Professor",
  //   Department:"Institute of Management and Research",
  //   university:"MGM University",
  //   address:"Chhatrapati Sambhajinagar, Maharashtra.",
  //   email:"vvottiprolu@mgmu.ac.in",
  //   Profilelink: 'https://mgmu.ac.in/admissions/program/master-of-business-administration-mba',
  //   pdf:"",
  //   image:"../dummy-image.png",
  // },

  {
    name:"Dr Vishali Kahpradhe ",
    
    position:"Head, & Director I/C,",
    Department:"Department of Library & Information Science & Knowledge Resource Centre",
    university:"Dr. Babasaheb Ambedkar Marathwada University, University Campus, Near Soneri Mahal",
    address:"Jaisingpura Chhatrapati Sambhajinagar  431004",
    email:"head.libscience@bamu.ac.in ",
    Profilelink: 'https://www.bamu.ac.in/campus/institutional-excellence/krc-library/#',
ProfileLink1:'https://www.bamu.ac.in/en/academicspage/department-of-library-and-information-science/',
    pdf:"",
    image:"../dummy-image.png",
  },

  {
    name:"DR ZEENA FLAVIA D’SOUZA",
    position:"Associate Professor",
    Department:"School of Commerce, Finance and Accountancy",
    university:" St Aloysius (Deemed to be University)",
    address:"Mangalore. Karnataka",
    email:"zeena_flavia@staloysius.edu.in",
    Profilelink: 'https://staloysius.edu.in/school/school-of-commerce-finance-and-accountancy',
    pdf:"",
    image:"../dummy-image.png",
  },

  // {
  //   name:"DR. Nirav Joshi",
  //   position:"Assistant Professor",
  //   Department:"VM Patil Institute of Management",
  //   university:"Ganpat University",
  //   address:"Mehsana Gandhinagr Highway, PO-384012, North Gujarat, India",
  //   email:"nrj01@ganpatuniversity.ac.in",
  //   Profilelink: 'https://vmpim.guni.ac.in/people/faculty/dr-nirav-joshi',
  //   pdf:"",
  //   image:"../dummy-image.png",
  // },

  {
    name:"Mr. Ganesh Sagre",
    position:"Librarian",
    Department:"Institute of Management and Research Librarian ",
    university:"MGM University",
    address:"Institute of Management and Research N-6 CIDCO Chhatrapati Sambhajinagar  431003",
    email:"gsagare@mgmu.ac.in",
    Profilelink: 'https://mgmu.ac.in/knowledge-resource-center?srsltid=AfmBOop5WpQ08inSpv3tQUl_QgjeLSMmkzSZR48Sx6BiCuFWbWEpcxOp',
    pdf:"",
    image:"../dummy-image.png",
  },
  
];

const EditorialBoard = () => {
  return (
    <Container fluid className="py-5 px-2 px-md-4">
      {/* <Row className="mb-5">
        <Col xs={12}>
          <h2 className="fw-bold text-center mb-4">Editorial Board</h2>
        </Col>
      </Row> */}
       <h2 className="fw-bold author text-center mb-3">
           Editorial Board Members
          </h2>

      <Row className="g-4">
        {members.map((member, index) => (
          <Col xs={12} sm={12} md={12} lg={12} key={index} className="mb-3">
            <Card className="h-100 shadow-sm border-0 rounded-3">
              <Card.Body className="p-0">
                <Row className="g-0 align-items-start">
                  {/* Image Column */}
                  <Col xs={12} sm={4} md={3} lg={3} className="d-flex justify-content-center p-3 bg-light rounded-start">
                    <div className="text-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fluid
                        className="rounded-circle"
                        style={{
                          maxWidth: '150px',
                          width: '100%',
                          height: 'auto',
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                  </Col>

                  {/* Content Column */}
                  <Col xs={12} sm={8} md={6} lg={6} className="p-3 d-flex flex-column justify-content-start">
                    <h5 className="fw-bold mb-2 text-dark">{member.name}</h5>
                    <p className="mb-2 text-muted small">
                      <strong>{member.position}</strong>
                    </p>
                    <p className="mb-3 small">
                      <span className="fw-bold">Department:</span> {member.Department}
                    </p>

                    <details className="mt-auto">
                      <summary className="cursor-pointer fw-bold text-primary">
                        More Details
                      </summary>
                      <div className="mt-2 small">
                        <p className="mb-2">
                          <span className="fw-bold">University:</span> {member.university}
                        </p>
                        <p className="mb-2">
                          <span className="fw-bold">Address:</span> {member.address}
                        </p>
                        <p className="mb-2">
                          <span className="fw-bold">Email:</span>{' '}
                          <a href={`mailto:${member.email}`}>{member.email}</a>
                        </p>
                        <p>
                          <span className="fw-bold">Profile:</span>{' '}
                          {member.Profilelink && (
                            <a
                              href={member.Profilelink}
                              target="_blank"
                              rel="noreferrer"
                              className="text-decoration-none"
                            >
                              Link
                            </a>
                          )}
                          {member.ProfileLink1 && (
                            <>
                              {' | '}
                              <a
                                href={member.ProfileLink1}
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none"
                              >
                                Profile Link
                              </a>
                            </>
                          )}
                        </p>
                      </div>
                    </details>
                  </Col>

                  {/* PDF Column */}
                  <Col xs={12} sm={12} md={3} lg={3} className="p-3 d-flex align-items-center justify-content-center">
                    {member.pdf && (
                      <a
                        href={member.pdf}
                        className="btn btn-primary btn-sm w-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View PDF
                      </a>
                    )}
                    {!member.pdf && (
                      <span className="text-muted small text-center">No PDF</span>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EditorialBoard;
