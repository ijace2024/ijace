import './About.css'; // Import the CSS

import React from 'react';

// import { Helmet } from 'react-helmet';


const About = () => {
  return (
    <>

     {/* <Helmet>
        <title>About IJMSABC | International Journal Of
Management Science And Business Conclave</title>
        <meta
          name="description"
          content="Learn about IJMSABC – International Journal Of
Management Science And Business Conclave dedicated to publishing original and quality research."
        />
        <link rel="canonical" href="https://www.ijmsabc.org/about" />
      </Helmet> */}
    
    <div className="about-container">
      {/* <h2 className="sub_title">About</h2> */}

      <section className="about-section">
        <h3>About Us</h3>
        <p>
          The International Journal of Applied Computing and Engineering (IJACE) is an international, peer-reviewed, open-access scholarly journal committed to publishing high-quality research that advances the theory, practice, and applications of applied computing and engineering technologies. The journal provides a global platform for researchers, academicians, industry professionals, and students to disseminate innovative ideas, original research outcomes, and emerging trends in the rapidly evolving domains of computing and engineering.
        </p>
        <p>
            IJACE emphasizes applied, interdisciplinary, and solution-oriented research that bridges the gap between advanced computational techniques and real-world engineering applications. The journal encourages the integration of computing technologies with engineering systems to address contemporary technological, industrial, and societal challenges. By fostering academic collaboration and knowledge exchange, IJACE aims to contribute meaningfully to technological innovation and sustainable digital development.
        </p>
        <p>
            All manuscripts submitted to IJACE undergo a rigorous double-blind peer-review process to ensure originality, technical quality, relevance, and clarity. Submissions are evaluated by subject experts in accordance with internationally accepted publication ethics and editorial standards.
        </p>
      </section>

      <section className="about-section">
        <h3>Scope of the Journal</h3>
        <p>The scope of IJACE includes, but is not limited to, the following areas:</p>
        <ul>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Applied Computing Systems and Engineering Applications</li>
          <li>Cloud, Edge, and Fog Computing</li>
          <li>Big Data Analytics and Data Science</li>
          <li>Internet of Things (IoT) and Smart Engineering Systems</li>
          <li>Cyber Security, Cryptography, and Blockchain Technologies</li>
          <li>Computer Networks and Distributed Systems</li>
           <li>Software Engineering and Emerging Programming Paradigms</li>
           <li>Human–Computer Interaction and User Experience Engineering</li>
           <li>Green Computing and Sustainable Engineering Technologies</li>
        </ul>
       
      </section>

      <section className="about-section">
        <h3>IJACE is Committed to:</h3>
        <ul>
          <li>Promoting innovative, practical, and impactful research</li>
          <li>Supporting open access to scholarly knowledge</li>
          <li>Encouraging early-career researchers and academicians</li>
          <li>Maintaining high ethical, editorial, and review standards</li>
        </ul>
      </section>

      <section className="about-section">
        <h3>Vision</h3>
        <p>The International Journal of Applied Computing and Engineering (IJACE) aspires to become a recognized international forum for disseminating pioneering research that drives computing-enabled engineering solutions and global digital transformation.</p>
      </section>

    </div>
    
    </>
  );
};

export default About;
