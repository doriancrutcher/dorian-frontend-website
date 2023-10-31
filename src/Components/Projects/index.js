import React from 'react';
import { useEffect, useState } from 'react';
import { Row, Col, Container, Button, Table } from 'react-bootstrap';

import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons'

import './index.scss';

const ProjectDetail = ({
  title,
  description,
  githubLink,
  mediaLink,
  mediaType,
}) => {
  // Assuming the same letter animation as the Projects component
  const [letterClass, setLetterClass] = React.useState('text-animate');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Row className="mb-4">
      {' '}
      {/* mb-4 for margin-bottom to separate multiple ProjectDetails */}
      <Col md={9} className="d-flex flex-column align-items-center">
        <Row className="w-100 justify-content-start mb-3">
          <div className="projects-detail" style={{ paddingLeft: '5vw' }}>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={title.split('')}
                idx={title.length - 1}
              />
            </h1>
          </div>
        </Row>



        <Row className="w-100 justify-content-center">
          <p className="mt-2 project-text">{description}</p>
        </Row>
        <Row className="w-100 justify-content-center mb-3">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} color='#FFFF' size="3x"/>
          </a>
        </Row>
      </Col>
      <Col
        md={3}
        className="d-flex justify-content-center align-items-center video-container"
      >
        {mediaType === 'video' ? (
          <iframe
            width="560"
            height="315"
            src={mediaLink}
            title={`YouTube video player for ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={mediaLink}
            alt={title}
            style={{ width: '100%', maxWidth: '500px' }}
          />
        )}
      </Col>
    </Row>
  );
};

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
<Container style={{ marginLeft: 'calc(10% - 40px)', marginRight: '40%', width: '90vw', paddingLeft: '80px' }}>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <div className="projects-page">
            <div
              className="text-zone"
              style={{ width: '70vw', paddingTop: '5vh' }}
            >
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={[
                    'M',
                    'y',
                    ' ',
                    'P',
                    'r',
                    'o',
                    'j',
                    'e',
                    'c',
                    't',
                    's',
                  ]}
                  idx={10}
                />
              </h1>
              <p style={{fontSize:'2vw'}}>
                Below you will find a selection of my recent projects,
                showcasing my skills, creativity, and expertise in web
                development.
              </p>
              {/* You can add details of your projects or links to them here. */}
            </div>
          </div>
        </Col>
      </Row>
      <Row
  className="d-flex justify-content-center align-items-center"
>

  <Table striped bordered hover variant="dark" className="mx-auto">
          <tbody>
            <tr>
              <td>
                <ProjectDetail
                  title="Minecraft Blueprint Trading App"
                  description="This application utilized a MinecraftJS bot to serve as the in-game facilitator of capturing the blueprints of whatever the user built! It would then take these blueprints and turn them into a string of positions and blocktypes. It would then serialize the data and put them onto a database for storage per user the user could then trade these blueprints and use their bot to recreate the building. The Application utilized Javascript, Rust, and the MinecraftJS library to create and control the bot named Jerry to record and take note of these blueprints."
                  githubLink="https://github.com/yourusername/awesome-project"
                  imageLink="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
                  mediaLink={'https://www.youtube.com/embed/pSuTpjvfEEs'}
                  mediaType={'video'}
                />
              </td>
            </tr>
            <tr>
              <td>
                <ProjectDetail
                  title="Bird Image App"
                  description="This application utilized a MinecraftJS bot to serve as the in-game facilitator of capturing the blueprints of whatever the user built! It would then take these blueprints and turn them into a string of positions and blocktypes. It would then serialize the data and put them onto a database for storage per user the user could then trade these blueprints and use their bot to recreate the building. The Application utilized Javascript, Rust, and the MinecraftJS library to create and control the bot named Jerry to record and take note of these blueprints."
                  githubLink="https://github.com/doriancrutcher/my-bird-app"
                  imageLink="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
                  mediaLink={'https://www.youtube.com/embed/lcSqMo0Agng'}
                  mediaType={'video'}
                />
              </td>
            </tr>
            <tr>
              <td>
                <ProjectDetail
                  title="Jigglypuff Quiz App"
                  description="This application was created as a personal project to get use to the Kotlin development environment. This example was dedicated to my favorite Super Smash Brothers Character, Jigglypuff! This Quiz App just tests your basic knowledge of our favorite singing balloon Pokemon and gives you your score at the end!"
                  githubLink="https://github.com/doriancrutcher/JigglyPuffQuizApp"
                  imageLink="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
                  mediaLink={'https://www.youtube.com/embed/YvNRD6aR8K0'}
                  mediaType={'video'}
                />
              </td>
            </tr>
            <tr>
              <td>
                <ProjectDetail
                  title="Voting App Tutorial"
                  description="A Voting App Tutorial aimed at beginner devs to show them how to create a React voting application from the ground up while storing their votes on our company's product "
                  githubLink="https://github.com/doriancrutcher/blockvotetutorial2"
                  imageLink="https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0"
                  mediaLink={'https://www.youtube.com/embed/sbcuseMGw9Q'}
                  mediaType={'video'}
                />
              </td>
            </tr>
            <tr>
              <td>
                <ProjectDetail
                  title="CrutcherTutoring Website"
                  description="This was a webpage that I created for my own tutoring business. Individuals were able to book appoingments and see course materials as a I taught the ciriculum."
                  githubLink="https://github.com/doriancrutcher/CrutcherTutoring"
                  mediaLink="https://i.imgur.com/bAbuLtP.png"
                  mediaType={'img'}
                />
              </td>
            </tr>
          </tbody>
        </Table>
      </Row>

      <Loader type="ball-pulse" />
    </Container>
  );
};

export default Projects;
