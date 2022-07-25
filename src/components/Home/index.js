import LogoTitleT from '../../assets/images/t.svg';
import LogoTitleB from '../../assets/images/b.svg';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm{' '}
          <img src={LogoTitleT} alt="Thiago" className="letter-t" />
          hiago <img src={LogoTitleB} alt="Bernardi" className="letter-b" />
          ernardi
          <br />
          web developer
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
