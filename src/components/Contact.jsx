// src/components/ContactPage.jsx

import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    Swal.fire({ title: 'Thank You!', text: 'Your message has been sent.', icon: 'success' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{
      padding: '4rem 0',
      background: 'url(\'data:image/svg+xml;utf8,<svg width="100" height="100" transform="scale(3)" opacity="0.1" xmlns="http://www.w3.org/2000/svg"><g fill="%23a0aec0"><rect x="10" y="10" width="10" height="10"/><rect x="30" y="10" width="10" height="10"/><rect x="50" y="10" width="10" height="10"/><rect x="70" y="10" width="10" height="10"/><rect x="90" y="10" width="10" height="10"/><rect x="10" y="30" width="10" height="10"/><rect x="30" y="30" width="10" height="10"/><rect x="50" y="30" width="10" height="10"/><rect x="70" y="30" width="10" height="10"/><rect x="90" y="30" width="10" height="10"/><rect x="10" y="50" width="10" height="10"/><rect x="30" y="50" width="10" height="10"/><rect x="50" y="50" width="10" height="10"/><rect x="70" y="50" width="10" height="10"/><rect x="90" y="50" width="10" height="10"/><rect x="10" y="70" width="10" height="10"/><rect x="30" y="70" width="10" height="10"/><rect x="50" y="70" width="10" height="10"/><rect x="70" y="70" width="10" height="10"/><rect x="90" y="70" width="10" height="10"/><rect x="10" y="90" width="10" height="10"/><rect x="30" y="90" width="10" height="10"/><rect x="50" y="90" width="10" height="10"/><rect x="70" y="90" width="10" height="10"/><rect x="90" y="90" width="10" height="10"/></g></svg>\')',
      backgroundColor: '#f8f9fa'
    }}>
      <Container>
        <h1 className="text-center mb-5 display-4">Get In Touch</h1>
        <Card className="p-4 p-md-5 border-0 shadow-lg">
          <Row>
            <Col md={7}>
              <h4 className="mb-4">Send us a Message</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={5} value={formData.message} onChange={handleChange} required />
                </Form.Group>
                <Button variant="primary" type="submit" size="lg">Send Message</Button>
              </Form>
            </Col>
            <Col md={5} className="mt-5 mt-md-0">
              <div className="p-4" style={{ backgroundColor: '#e9ecef', borderRadius: '0.5rem' }}>
                <h4 className="mb-4">Contact Information</h4>
                <p className="d-flex align-items-center"><FaMapMarkerAlt className="me-3" size={20}/> 123 Peor Road, Tasvin Valley, CA</p>
                <hr/>
                <p className="d-flex align-items-center"><FaPhone className="me-3" size={20}/> (546) 456-7890</p>
                <hr/>
                <p className="d-flex align-items-center"><FaEnvelope className="me-3" size={20}/> dotindex@yahoo.com</p>
              </div>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;