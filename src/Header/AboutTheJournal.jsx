import { Col, Container, Row, Table } from 'react-bootstrap'

import React from 'react'

const AboutTheJournal = () => {
  return (
    <>
    <h2 className="fw-bold author text-center mb-3">
           About the Journal
          </h2>
     <Container>
        <Row className="my-5">
        <Col>
          <Table striped bordered hover responsive className="align-middle">
            <tbody>
                <tr>
                    <td className="fw-bold">Title</td>
                    <td>
                      International Journal of
Applied Computing and Engineering
(IJACE)
                      </td>
                </tr>
             
              <tr>
                <td className="fw-bold">ISSN</td>
                <td>****-****</td>
              </tr>
              
              
              {/* <tr>
                <td className="fw-bold">Copyright</td>
                <td>
                  Upon acceptance of a manuscript, authors are required to sign
                  a Declaration of Copyright Form, transferring copyright to the
                  International Journal of Management Science and Business
                  Conclave (IJMSABC). The journal follows an Open Access policy,
                  ensuring that all published articles are freely accessible in
                  print format. Authors must ensure that their submissions are
                  original, unpublished, and do not violate any existing
                  copyright laws.
                </td>
              </tr> */}
              <tr>
                <td className="fw-bold">Starting Year</td>
                <td>2026</td>
              </tr>

               <tr>
                <td className="fw-bold">Frequency of Publication</td>
                <td>
                  <b>Bi-monthly</b> ( 
                   January–February, March–April, May–June,July–August, September–October, November–December, )
                </td>
              </tr>
              <tr>
                <td className="fw-bold">First Issue Published</td>
                <td>Volume 01, Issue 01, January-February 2026</td>
              </tr>
              <tr>
                <td className="fw-bold">Subject</td>
                <td>Engineering</td>
              </tr>
              <tr>
                <td className="fw-bold">Language</td>
                <td>English</td>
              </tr>
              <tr>
                <td className="fw-bold">Format of Publication</td>
                <td>Online</td>
              </tr>

             <tr>
                <td className="fw-bold">Editor-in-Chief</td>
                <td>Dr. Vottiprolu Vijaya Kumar</td>
              </tr>

              <tr>
                <td className="fw-bold">Publisher</td>
                <td>
                  Dr. Vottiprolu Vijaya Kumar <br />
                  International Journal of
Applied Computing and Engineering
(IJACE)
                </td>
              </tr>

              <tr>
                <td className="fw-bold">Publisher Details</td>
                <td>
                  Dr. Vottiprolu Vijaya Kumar <br />
                  International Journal of
Applied Computing and Engineering
(IJACE) <br />
                  <b>Address:</b> House No. 11-31, Nandivelugu, Tenali Mandal,
                  Guntur District, Andhra Pradesh-522306 <br />
                  <b>Mobile:</b> +91 8143123534 <br />
                  <b>Email:</b> ijace2024@gmail.com, vvottiprolu@mgmu.ac.in <br />
                  <b>Website:</b>{" "}
                  <a
                    href="https://ijace.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-primary fw-semibold"
                  >
                    https://ijace.vercel.app/
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>

     </Container>
    </>
  )
}

export default AboutTheJournal
