import LogoTitleT from '../../assets/images/t.svg';
import LogoTitleB from '../../assets/images/b.svg';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['h', 'i', 'a', 'g', 'o'];
  const lastNameArray = ['e', 'r', 'n', 'a', 'r', 'd', 'i'];

  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitleT} alt="Thiago" className="letter-t" />
          <AnimatedLetters
            letterClass={letterClass}
            strArr={nameArray}
            idx={15}
          />
          <img src={LogoTitleB} alt="Bernardi" className="letter-b" />
          <AnimatedLetters
            letterClass={letterClass}
            strArr={lastNameArray}
            idx={20}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArr={jobArray}
            idx={27}
          />
        </h1>
        <h2>Fullstack JavaScript Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
