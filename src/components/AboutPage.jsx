// src/components/AboutPage.jsx

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const AboutPage = () => {
  return (
    <div>
      {/* Hero Header with Background Image */}
      <div style={{
        padding: '8rem 0',
        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1784&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
      }}>
        <Container>
          <h1 className="display-3 fw-bold">Our Story</h1>
          <p className="lead fs-4">A commitment to quality, innovation, and you.</p>
        </Container>
      </div>

      {/* Main Content Section */}
      <div style={{ backgroundColor: '#ffffff', padding: '4rem 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="display-5">Who We Are</h2>
              <p className="lead text-muted">
                We started with a simple idea: to make high-quality products accessible to everyone. 
                Our journey began in a small garage, fueled by passion and a commitment to excellence.
              </p>
              <p>
                Today, we are proud to offer a curated selection of items that blend quality, innovation,
                and style. Each product in our catalog is hand-picked and tested to ensure it meets our
                high standards.
              </p>
              <p>
                Our mission is to provide an unparalleled shopping experience with exceptional customer
                service. Thank you for being a part of our story.
              </p>
            </Col>
            <Col lg={6}>
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1932&q=80" 
                rounded 
                fluid 
                className="shadow-lg"
                alt="Our creative workspace"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;