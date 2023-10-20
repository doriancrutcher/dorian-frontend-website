import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Project = ({ title, description, imageUrl, githubLink, demoLink }) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imageUrl} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary" href={githubLink}>
        GitHub
      </Button>
      <Button variant="secondary" href={demoLink}>
        Demo
      </Button>
    </Card.Body>
  </Card>
);

const Projects = () => (
  <Container>
    <h1>My Projects</h1>
    <Row>
      <Col>
        <Project
          title="Project 1"
          description="Lorem ipsum dolor sit amet."
          imageUrl="project1.jpg"
          githubLink="https://github.com/user/project1"
          demoLink="https://demo.project1.com"
        />
      </Col>
      <Col>
        <Project
          title="Project 2"
          description="Consectetur adipiscing elit."
          imageUrl="project2.jpg"
          githubLink="https://github.com/user/project2"
          demoLink="https://demo.project2.com"
        />
      </Col>
      {/* Add more projects */}
    </Row>
  </Container>
);

export default Projects;
