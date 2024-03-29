import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='contactForm' style={{ padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Contact Me</h2>
      <Form>
        <Form.Group className='contactInput' controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className='contactInput' controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className='contactInput' controlId="formTelephone">
          <Form.Label>Telephone</Form.Label>
          <Form.Control type="tel" placeholder="Enter your telephone number" />
        </Form.Group>

        <Form.Group className='contactInput' controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
