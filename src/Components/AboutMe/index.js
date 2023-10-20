import { useEffect, useState } from 'react'
import { Row,Col,Container } from 'react-bootstrap'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const AboutMe = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

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
    <Container style={{height:'100vh'}}>
      <Row style={{height:'100%'}}>
        <Col className='d-flex justify-content-center align-items-center'>
          <div className="about-page">
            <div className="text-zone">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                  idx={15}
                />
              </h1>
              <p>
        I'm an ambitious self-starting frontend developer with a strong focus on React and Kotlin development. My passion lies in creating innovative and user-friendly web applications that bring value to users and businesses alike.
      </p>
      <p>
        I have a deep love for technology and the community that surrounds it. I believe in the power of collaboration and constantly seek opportunities to learn from and contribute to the tech community. It's not just about coding; it's about making a positive impact on the world through technology.
      </p>
      <p>
        I'm a curious puzzle solver at heart. I enjoy tackling complex problems and finding elegant solutions. Whether it's debugging a tricky issue or architecting a new feature, I approach each challenge with enthusiasm and a determination to learn and grow.
      </p>
      <p>
Outside of coding I'm pretty well involved into the LGBTQ and POC communities. Love to volunteer with organizations to increase the representation  and community engagement of these minority communities through volunteering. Be it help organize a sports team or help with IT setup of the LGBTQ Asylum in SF     </p>
            </div>
          </div>
        </Col>
        <Col  className='d-flex justify-content-center align-items-center'>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Loader type="ball-pulse" />
          </Container>
  )
  
}

export default AboutMe