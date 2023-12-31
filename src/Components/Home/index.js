import React, { useEffect, useState } from 'react';
import LogoTitle from '../../assets/images/d-svg-logo.svg';
import { Link } from 'react-router-dom';

import LogoD from '../../assets/images/dorheadshotgroup.png';

import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { Col, Container, Row } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import Projects from '../Projects';

const Home = (props) => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = 'orian'.split('');
  const jobArray = 'web developer.'.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    // Cleanup: Clear the timeout if the component unmounts before the timer fires
    return () => {
      clearTimeout(timer);
    };
}, []);

  return (
    <Container
      className="home-page"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minWidth: '100%',
      }}
    >
      <Row className='d-flex justify-content-center' style={{height:'20vh'}} >
       <div className='text-zone'>
        <p className='banner'>
        <AnimatedLetters
                  letterClass={letterClass}
                  strArray={"Welcome!".split('')}
                  idx={15}
                />
        </p>
        </div>

      </Row>
      <Row>
        <Col
          md={6}
          className="d-flex flex-column justify-content-center"
          style={{ marginLeft: '20px' }}
        >
            <br/>
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _12`}>'m</span>
            <img
              src={LogoTitle}
              alt="developer"
              style={{ display: 'inline' }}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / JavaScript / Kotlin</h2>
          <Link className="flat-button" to="/contact">
            CONTACT ME
          </Link>
        </Col>
        <Col
          xs={6}
          md={4}
          className="d-flex flex-column justify-content-center"
        >
          <Image src={`${LogoD}`} fluid style={{ width: '20vw' }} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
