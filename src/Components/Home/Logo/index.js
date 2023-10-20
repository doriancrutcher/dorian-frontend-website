import './index.scss';
import LogoD from '../../../assets/images/dorheadshotgroup.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import { Container } from 'react-bootstrap';

const Logo = () => {





  return (
      <img
      className='headshot'
        src={LogoD}
   />

  );
};

export default Logo;
