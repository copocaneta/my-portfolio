import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArr={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hello there, I am Thiago Bernardi, a Full Stack developer from São
          Paulo Brazil, I've been working with web development, specially
          frontend development since 2001, I've started with simple HTML and CSS
          then moved to ASP 1.0 and then to PHP. I've also programmed on Python
          doing backend and automation tasks mostly for the web hosting
          industry.{' '}
        </p>
        <p>
          I also have experience with Django and Flask (Python frameworks) but
          my passion is for JavaScript and this is where i thrive and
          concentrate the latest years of my web development career. I've been
          programming on NodeJS for Rest APIs using Express, NestJS or sometimes
          frameworks like Strapi or Sanity.{' '}
        </p>
        <p>
          On the frontend I've been using React and its frameworks such as
          Gatsby and NextJS. I have extensive knowledge on CSS and follow the
          best coding practices such as clean code and Test Driven Development
          (Jest and React Testing Library). Lately I've been working a lot with
          Web3, joining JavaScript with blockchains dapps by using libraries
          such as Moralis and Alchemy. I've helped them build several projects
          that innovated the Web3 scene.{' '}
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#dd0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28a4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5Ed4f4" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
