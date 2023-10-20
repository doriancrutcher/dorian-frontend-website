import './index.scss';

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { Container, Row } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import emailjs from '@emailjs/browser'


const Contact = (props) => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
const form = useRef()
  

  const labelStyle = {
    color: '#fff', // Set text color to white
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup: Clear the timeout if the component unmounts before the timer fires
    return () => {
      clearTimeout(timer);
    };
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(form.current)
  };

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(process.env.SERVICEID, process.env.TEMPLATEID, form.current, process.env.PK)
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };
  

  return (
    <>
      <Container className='contact-page' style={{ height: '100vh' }}>
        <Row className='text-zone justify-content-center d-flex align-items-center' style={{ height: '100%' }}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
  Hi, I'm a frontend web developer with a knack for crafting beautiful web experiences. I'm also skilled in Kotlin for Android app development. Let's collaborate on your next project! Reach me at <b>crutcherdorian@gmail.com</b> or connect on <a href={'https://www.linkedin.com/in/dorian-crutcher/'}>LinkedIn</a>.
</p>

<div className='contact-form'>
<Form ref={form}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control
          type="text"
          placeholder="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={sendEmail}>
        Submit
      </Button>
    </Form>
</div>


        </Row>
      </Container>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
