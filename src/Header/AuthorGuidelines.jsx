import './AuthorGuidelines.css';

import { Card, Col, Container, Row } from "react-bootstrap";

import { Helmet } from "react-helmet";
import React from "react";

const AuthorGuidelines = () => {
  return (

    <>
     <Helmet>
        <title>Author Guidelines for IJMSABC | International Journal Of
Management Science And Business Conclave</title>
        <meta
          name="description"
          content=" IJMSABC – International Journal Of
Management Science And Business Conclave provides a dedicated guidelines for authors."
        />
        <link rel="canonical" href="https://www.ijmsabc.org/AuthorGuidelines" />
      </Helmet>
    

    <Container className="my-5">
      {/* Title */}
      
         <h2 className="fw-bold author text-center mb-3">
            Author Guidelines
          </h2>
        

      {/* Introduction */}
      <Row className="mb-4 gd-section" >
        {/* <Col> */}
          <Card className="shadow-sm border-0 about-section">
            <Card.Body>
              <h3 className="h4 fw-bold mb-3 ">Introduction</h3>
              <Card.Text className="fs-6">
                The journal welcomes original research articles, review papers,
                case studies, and conceptual papers in the field of All Engineering 
                related disciplines. Authors are expected
                to present well-structured, original, and plagiarism-free
                content that contributes to both academic and practical
                knowledge.
              </Card.Text>
              <Card.Text className="fs-6">
                Manuscripts should clearly state the research objectives,
                methodology, results, and conclusions, with proper references
                following <b>APA style</b>.
              </Card.Text>
            </Card.Body>
          </Card>
        {/* </Col> */}
      {/* </Row>

    
      <Row className="mb-4 gd-section"> */}
        {/* <Col> */}
          <Card className="shadow-sm border-0 about-section">
            <Card.Body>
              <h3 className="h4 fw-bold mb-3">
                Guidelines for Manuscripts (Font and Style)
              </h3>
              <ul className="fs-6">
                <li>
                  <b>File Format:</b> Microsoft Word (.doc or .docx)
                </li>
                <li>
                  <b>Font:</b> Times New Roman, size 12, with 1.5 line spacing
                </li>
                <li>
                  <b>Margins:</b> 1-inch on all sides
                </li>
                <li>
                  <b>Headings:</b>
                  <ul>
                    <li>
                      <b>Main headings:</b> Bold, size 14
                    </li>
                    <li>
                      <b>Sub-headings:</b> Bold, size 12
                    </li>
                  </ul>
                </li>
                <li>
                  <b>References:</b> APA style
                </li>
                <li>
                  <b>Tables & Figures:</b> Embed in the text, properly labeled
                  and referenced
                </li>
              </ul>
            </Card.Body>
          </Card>
        {/* </Col>
      </Row> */}

      {/* Manuscript Format */}
      {/* <Row className="mb-4 gd-section">
        <Col> */}
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold mb-3 ">
                Format for Manuscripts
              </h2>
              <p className="fs-6">
                Each manuscript should include the following sections:
              </p>

              <h3 className="h5 fw-bold mt-3">Title Page</h3>
              <ul className="fs-6">
                <li>Concise and informative title</li>
                <li>Full names of all authors</li>
                <li>
                  Email IDs, mobile numbers, and designations of all authors
                </li>
                <li>Clearly identify the corresponding author</li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Abstract</h3>
              <ul className="fs-6">
                <li>
                  150–200 words summarizing research objectives, methods,
                  results, and conclusions
                </li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Keywords</h3>
              <ul className="fs-6">
                <li>4–6 keywords reflecting the core themes</li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Main Text</h3>
              <ul className="fs-6">
                <li>
                  <b>Introduction:</b> Problem, objectives, significance
                </li>
                <li>
                  <b>Literature Review:</b> Summarize existing research, show
                  gaps
                </li>
                <li>
                  <b>Methodology:</b> Design, data collection, techniques
                </li>
                <li>
                  <b>Results:</b> Findings with tables/figures
                </li>
                <li>
                  <b>Discussion:</b> Interpretation and linkage to research
                </li>
                <li>
                  <b>Conclusion:</b> Key findings, implications, limitations,
                  future work
                </li>
                <li>
                  <b>References:</b> APA style
                </li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Tables and Figures</h3>
              <ul className="fs-6">
                <li>Insert near first mention</li>
                <li>Number sequentially (e.g., Table 1, Figure 1)</li>
                <li>Provide descriptive captions</li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Acknowledgments</h3>
              <ul className="fs-6">
                <li>Recognize contributions that do not warrant authorship</li>
              </ul>

              <h3 className="h5 fw-bold mt-3">Appendices</h3>
              <ul className="fs-6">
                <li>Include supplementary material</li>
              </ul>
            </Card.Body>
          </Card>
        {/* </Col>
      </Row> */}

      {/* Submission Details */}
      {/* <Row className="mb-4 gd-section">
        <Col> */}
          <Card className="shadow-sm border-0">
            <Card.Body>
              <h2 className="h4 fw-bold mb-3 ">Submission Details</h2>
              <p className="fs-6">
                Authors are required to submit manuscripts via email to:{" "}
                <a
                  href="mailto:ijmsabc@gmail.com"
                  className="fw-semibold text-decoration-none text-primary"
                >
                  ijmsabc@gmail.com
                </a>
              </p>
              <p className="fs-6">
                Each submission must include the following:
              </p>
              <ul className="fs-6">
                <li>
                  A cover letter declaring originality, unpublished status, and
                  exclusivity
                </li>
                <li>
                  Manuscript prepared according to guidelines
                </li>
                <li>
                  Full details of authors: names, designations, institution,
                  email, mobile
                </li>
                <li>Identification of corresponding author</li>
              </ul>
              <p className="fs-6">
                Submissions are acknowledged within 3–5 working days and enter a{" "}
                <b>double-blind peer review</b> process. Authors are notified of
                acceptance, revision needs, or rejection.
              </p>
            </Card.Body>
          </Card>
        {/* </Col> */}
      </Row>
    </Container>

        </>
  );
};

export default AuthorGuidelines;
