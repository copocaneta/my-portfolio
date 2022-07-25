import './index.scss';
import LogoTitleT from '../../assets/images/t.svg';
import LogoTitleB from '../../assets/images/b.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div clasName="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm <img src={LogoTitleT} alt="Thiago" />
          hiago <img src={LogoTitleB} alt="Bernardi" />
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
