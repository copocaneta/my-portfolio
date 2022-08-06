import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import { useState } from 'react';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            strArr={'Portfolio'.split('')}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
