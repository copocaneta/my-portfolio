import LogoTitleT from '../../assets/images/t.svg';
import LogoTitleB from '../../assets/images/b.svg';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../Logo';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
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
              strArr={'hiago'.split('')}
              idx={15}
            />
            <img src={LogoTitleB} alt="Bernardi" className="letter-b" />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={'ernardi'.split('')}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={'web developer'.split('')}
              idx={27}
            />
          </h1>
          <h2>Fullstack JavaScript Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
